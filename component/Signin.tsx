'use client'
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { superbase } from '@/lib/superbase/product'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const Signin = () => {
  return (
    <div className='bg-black py-10 top-0 absolute h-full w-full'>
        <div className='w-[24%] mx-auto'>

       <Auth
    supabaseClient={superbase}
    appearance={{ theme: ThemeSupa }}
    theme='dark'
  />
        </div>
    </div>
  )
}

export default Signin
