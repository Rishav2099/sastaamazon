import Image from 'next/image';
import React from 'react';
import Rating from './Ratings';
import { useAppDispatch } from '@/lib/superbase/hooks/redux';
import { addToCart } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';

const CategoryWiseProduct = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className='border border-gray-300 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full'>
      {/* Category Badge */}
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-lg font-semibold text-gray-700 capitalize'>
          {product.category}
        </h1>
        <span className='px-2 py-1 bg-yellow-200 text-yellow-700 text-xs font-bold rounded-full'>
          New
        </span>
      </div>

      {/* Product Image */}
      <div className='flex justify-center items-center h-[200px] mb-4 bg-gray-100'>
        <Image
          src={product.image}
          className='object-contain max-h-[150px]'
          width={200}
          height={150}
          alt={product.title}
        />
      </div>

      {/* Product Info */}
      <div className='flex flex-col flex-grow'>
        <h1 className='text-md font-bold text-gray-800 mb-2 line-clamp-2'>
          {product.title}
        </h1>
        <Rating ratings={product.rating} />
      </div>

      {/* Add to Cart Button */}
      <div className='mt-4'>
        <button
          onClick={() => {
            dispatch(addToCart(product));
            router.push('/cart');
          }}
          className='w-full py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition duration-200'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CategoryWiseProduct;
