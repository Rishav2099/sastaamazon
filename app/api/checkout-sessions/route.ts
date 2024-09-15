import { NextResponse } from "next/server";

import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string);

interface Item {
    title: string;
    image: string;
    price: number;
  }
  
  export async function POST(req: Request) {
    const body = await req.json();
    const { items, email }: { items: Item[]; email: string } = body;
  
    // Arrange items for the Stripe checkout session
    const arangedItems = items.map((item: Item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          images: [item.image],
        },
        unit_amount: Math.floor(item.price * 82), // Assuming a conversion rate
      },
      quantity: 1,
    }));
  
    // Create the checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      shipping_address_collection: {
        allowed_countries: ['GB', 'US', 'CA'],
      },
      line_items: arangedItems,
      mode: 'payment',
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item: Item) => item.image)),
      },
    });
  
    return NextResponse.json({ id: session.id });
  }
  