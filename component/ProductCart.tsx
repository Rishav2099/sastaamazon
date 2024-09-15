'use client'
import Image from 'next/image';
import React from 'react';
import Rating from './shared/Ratings';
import { useRouter } from 'next/navigation';

const ProductCart = ({ product }: { product: any }) => {
  const router = useRouter()
  return (
    <div className="cursor-pointer" onClick={() => {
      router.push(`/product/${product.id}`)
    }}>
      <div className="bg-gray-100 h-[250px] flex items-center justify-center rounded-md overflow-hidden">
        <Image
          className="mix-blend-multiply p-8"
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
      </div>
      <h1 className="font-bold">{product.title}</h1>
      <p>{`${product.description.substring(0, 50)}...`}</p>
      <Rating ratings={product.rating} />
      <p className="font-bold text-2xl">${product.price}</p>
    </div>
  );
};

export default ProductCart;
