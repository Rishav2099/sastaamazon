import Image from 'next/image'
import React from 'react'
import prime from '@/public/prime-logo.png'
import { useAppDispatch } from '@/lib/superbase/hooks/redux'
import { addToCart } from '@/redux/cartSlice'
import { useRouter } from 'next/navigation'

const AddToCartContainer = ({product}: {product:any}) => {
    const dispatch = useAppDispatch();
    const router = useRouter()
  return (
    <div className='border border-gray-300 rounded-md h-fit'>
        <div className='p-4'>
        <Image src={prime} width={40} height={40} alt='prime' />

        </div>
      <div className='p-4'>
        <p>Free delivery</p>
      </div>
      <div className='w-[70%] mx-auto'>
        <button onClick={() => {
            dispatch(addToCart(product));
            router.push('/cart')
        }} className='bg-yellow-500 w-full rounded-full py-2'>Add to cart</button>
        <button className='bg-orange-500 w-full rounded-full py-2 my-2'>Buy now</button>
      </div>
    </div>
  )
}

export default AddToCartContainer
