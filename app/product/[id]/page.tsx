'use client'
import SingleProduct from '@/component/SingleProduct'
import { useSuperbase } from '@/lib/superbase/hooks/useSuperbase'
import { useParams } from 'next/navigation'
import React, {useEffect} from 'react'

const page = () => {
    const {id} = useParams()
    const {singleProduct, getSingleProduct} = useSuperbase()
    useEffect(() => {
     getSingleProduct(Number(id));
    }, [])
    
    
  return (
    <div>
      <SingleProduct singleProduct={singleProduct} />
    </div>
  )
}

export default page
