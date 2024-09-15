"use client";
import { useAppDispatch, useAppSelector } from "@/lib/superbase/hooks/redux";
import {
  clearAllCart,
  decrementQuantity,
  getCart,
  incrementQuantity,
  removeFromTheCart,
} from "@/redux/cartSlice";
import Image from "next/image";
import React from "react";
import SubTotal from "./shared/SubTotal";

const ShoppingCart = () => {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  // Calculate total price based on cart items
  const totalPrice = cart.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-[70%]">
      <div className="flex justify-between items-center border-b border-gray-300 p-5">
        <h1 className="font-bold text-2xl">Shopping Cart</h1>
        <p className="font-medium">Price</p>
      </div>

      {cart.length > 0 ? (
        cart.map((product: any) => (
          <div
            key={product.id} // Add unique key here
            className="py-4 flex justify-between border-b border-gray-200"
          >
            <div className="flex">
              <div>
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt={product.title}
                />
              </div>
              <div className="ml-4">
                <h1 className="font-medium">{product.title}</h1>
                <p className="text-green-600 my-1 font-bold text-xs">In Stock</p>
                <button
                  className="font-bold text-red-700"
                  onClick={() => dispatch(removeFromTheCart(product.id))}
                >
                  Remove
                </button>
                <div className="flex gap-2 my-4 justify-between text-black text-2xl font-medium items-center bg-gray-200 rounded-md px-5 py-2 w-fit">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      if (product.quantity > 1) {
                        dispatch(decrementQuantity(product));
                      }
                    }}
                  >
                    -
                  </div>
                  <div className="cursor-pointer">{product.quantity}</div>
                  <div
                    className="cursor-pointer"
                    onClick={() => dispatch(incrementQuantity(product))}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">$ {product.price}</h1>
              <h1 className="text-xs py-1">
                MRP: $ <span className="line-through">{product.price + 100}</span>
              </h1>
            </div>
          </div>
        ))
      ) : (
        <div>Your cart is empty</div>
      )}
      {cart.length > 0 &&  <h1 onClick={()=> {
        dispatch(clearAllCart());
      }} className="text-red-600 font-bold cursor-pointer mt-4 py-2">Clear All</h1>}
     
      <SubTotal length={cart.length} totalPrice={totalPrice} />
    </div>
  );
};

export default ShoppingCart;
