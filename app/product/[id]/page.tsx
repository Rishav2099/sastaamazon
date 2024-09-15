'use client'
import SingleProduct from '@/component/SingleProduct'
import { useSuperbase } from '@/lib/superbase/hooks/useSuperbase'
import { useParams } from 'next/navigation'
import React, {useEffect} from 'react'

const Page = () => {
    const {id} = useParams()
    const {singleProduct, getSingleProduct} = useSuperbase()
    useEffect(() => {
     getSingleProduct(Number(id));
    }, [id, getSingleProduct])
    
    
  return (
    <div>
      <SingleProduct singleProduct={singleProduct} />
    </div>
  )
}

export default Page
