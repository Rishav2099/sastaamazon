import React from 'react'
import SubTotal from './shared/SubTotal'
import { useRouter } from 'next/navigation'

const ProceedToBuy = ({length,  totalPrice}: {length:number, totalPrice:number}) => {
  const router = useRouter()
  return (
    <div className='w-[20%] h-fit border-gray-300 ml-4'>
      <div className='p-4'>
        <p>order is free delivered</p>
        <SubTotal length={length}  totalPrice={totalPrice} />
        <button onClick={() => {
          router.push('/checkout')
        }} className='bg-yellow-500 w-full py-1 rounded-md shadow-md my-3'>Procced to buy</button>
      </div>
    </div>
  )
}

export default ProceedToBuy
