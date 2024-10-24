import React from 'react'
import Products from '@/components/products/Products'
import Navbar from '@/components/navbar/Navbar'
import ProductsContainer from '@/components/products/ProductsContainer'

const index = () => {

  return (
    <div className='relative'>
      <Navbar />
      <Products>
      </Products>
    </div>
  )
}

export default index