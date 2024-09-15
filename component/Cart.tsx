import React from "react";
import ShoppingCart from "./ShoppingCart";
import ProceedToBuy from "./ProceedToBuy";
import { useAppSelector } from "@/lib/superbase/hooks/redux";
import { getCart } from "@/redux/cartSlice";

const Cart = () => {
  const cart = useAppSelector(getCart);
  let totalPrice = 0
  cart.forEach((item:any) => {
    totalPrice += item.price * Number(item.quantity) 
  });
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="flex w-full justify-between">
        <ShoppingCart />
        <ProceedToBuy length={cart.length} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
