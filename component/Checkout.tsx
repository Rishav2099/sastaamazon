'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '@/public/amazon-logo.png'
import { FaLock } from "react-icons/fa6";
import { useAppSelector } from '@/lib/superbase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import OrderSummary from './OrderSummary';

const Checkout = () => {
    const cart = useAppSelector(getCart);
  return (
    <div className='absolute flex justify-between  top-0 w-full p-12 bg-black h-full'>
        <div className='w-[70%]'>
        <div className='border-b border-b-gray-400 pb-5'>

        <div className='  mx-auto  flex items-center justify-between '>
            <div >
                <Image className='bg-white p-2 rounded-md' src={Logo} width={150}  alt='Logo'/>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Checkout</h1>
            </div>
            <div className='text-gray-400'>
                <FaLock size={'30px'}  />
            </div>
        </div>
        </div>
        <div className='mt-5 w-[70%] mx-auto'>
            <div>
                <h1 className='font-bold text-lg'>1. Delivery Address</h1>
                <p>No adress set becuase its a <span className='font-bold text-2xl'>Fake store</span> made for practise purpose.</p>
            </div>
        </div>
        <div className='mt-5 w-[70%] mx-auto'>
            <div>
                <h1 className='font-bold text-lg'>1. Items and delivery</h1>
            </div>
            {
                cart.map((product:any) => {
                    return (
                        <div className='my-4'>
                            <div className='flex'>
                                <Image src={product.image} width={100} height={100} alt={product.title} />
                                <div className='ml-4'>
                                <p className='font-bold '>{product.title}</p>
                                <p className='text-2xl font-bold py-2 '>${product.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
        <div className='w-[30%] text-center'>

        <OrderSummary />
        </div>
    </div>
  )
}

export default Checkout
