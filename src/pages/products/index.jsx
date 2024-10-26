import React from 'react'
import Products from '@/components/products/Products'
import Navbar from '@/components/navbar/Navbar'

const Product = () => {

  return (
    <div className='relative'>
      <Navbar color={"black"} bg={"bg-[#FDF9EE]"}/>
      <Products>
      </Products>
    </div>
  )
}

export default Product