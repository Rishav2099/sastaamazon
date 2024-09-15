import { useAppSelector } from "@/lib/superbase/hooks/redux";
import { superbase } from "@/lib/superbase/product";
import { getCart } from "@/redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const OrderSummary = () => {
    const cart  = useAppSelector(getCart)
    let totalPrice = 0;
    cart.forEach((item:any) => {
        totalPrice = item.price * item.quantity
    })
 
    const createStripeSession = async () => {
        const { data: { user } } = await superbase.auth.getUser();
        const stripe = await stripePromise;
      
        try {
          const checkoutSession = await axios.post('/api/checkout-sessions', {
            items: cart,
            email: user?.email,
          });
      
          // Redirect to Stripe checkout
          const result = await stripe?.redirectToCheckout({
            sessionId: checkoutSession.data.id,
          });
      
          if (result?.error) {
            console.error(result.error.message);
          }
        } catch (error) {
          console.error("Error creating Stripe session:", error);
        }
      };      

  return (
    <div className="border border-gray-400 p-4 h-fit">
      <div>
        <h1 className="font-bold pt-5">Order Summary</h1>
        <div className="text-xs ">
          <div className="flex items-center justify-between">
            <p>Items</p>
            <p>{totalPrice}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Delivery</p>
            <p>0</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>{totalPrice}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Promotion Applied</p>
            <p>0</p>
          </div>
          <div className="flex justify-between my-1 text-2xl font-bold text-red-600 py-3 border-y border-y-gray-300">
            <h1>Order Total:</h1>
            <p>{totalPrice}</p>
          </div>
        </div>
        <button onClick={() => {
            createStripeSession();
        }} className="bg-yellow-400 w-full rounded-md px-4 py-1 text-black my-3 font-bold">Place Your Order</button>
      </div>
    </div>
  );
};

export default OrderSummary;
