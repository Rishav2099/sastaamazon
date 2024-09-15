'use client'
import { useAppSelector } from "@/lib/superbase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Success = () => {
    const cart = useAppSelector(getCart)
  return (
    <div className="absolute top-0 w-full h-full mx-auto bg-black py-12">
      <div className=" mx-auto w-[70%]">
        <h1> Thank you for ordering with sasta amazon</h1>
        <div>
        <p className="font-bold py-3 underline">Order Details</p>
        {
            cart.map((product:any) => {
                return (
                    <div key={product.id} >
                        <div className="flex gap-5">

                        <Image src={product.image} width={100} height={100} alt={product.title} />
                        <div>
                        <h1>{product.title}</h1>
                        <p>{product.price}</p>
                        </div>

                        </div>
                    </div>
                )
            })
        }
        </div><div className="my-5 font-semibold">

        <Link href={'/'} className="bg-yellow-400 px-4 py-1 rounded-full w-fit mt-5 text-black">Return to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
