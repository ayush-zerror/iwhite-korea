import React from 'react'
import ProductSideNav from './ProductSideNav'

const products = ({ data, children }) => {


  return (
    <div className="w-full min-h-screen">
      <div className='flex bg-[#f8d8de]'>
        <ProductSideNav />
        {children}
      </div>
    </div>
  )
}

export default products