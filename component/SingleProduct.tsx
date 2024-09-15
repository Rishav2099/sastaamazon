import Image from "next/image";
import React from "react";
import Rating from "./shared/Ratings";
import AddToCartContainer from "./AddToCartContainer";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto mt-10">
      {singleProduct.map((product: any) => {
        return (
          <div key={product.id} className="flex justify-between">
            {/* Left section for product details */}
            <div className="flex w-[65%]">
              <div className="bg-gray-100">
                <Image
                  className="mix-blend-multiply p-4"
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.title}
                />
              </div>
              <div className="mx-4 w-[70%]">
                <h1 className="font-bold text-lg">{product.title}</h1>
                <p>{product.description}</p>
                <Rating ratings={product.rating} />
                <h2 className="font-bold text-2xl">${product.price}</h2>
                <div>
                  <h1 className="font-bold text-sm">About this item</h1>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia recusandae aut eligendi ipsum reiciendis ullam a quo
                    libero cupiditate voluptatum rem quos optio, repudiandae sunt!
                    Quod placeat dolores omnis velit dolor accusantium quo vitae
                    odio repellendus! Facilis aperiam temporibus impedit quidem
                    similique veritatis delectus laudantium at.
                  </li>
                </div>
              </div>
            </div>

            {/* Right section for AddToCartContainer */}
            <div className="w-[30%]">
              <AddToCartContainer product={product} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
