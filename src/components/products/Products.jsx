import React from 'react'
import ProductSideNav from './ProductSideNav'

const products = ({ data, children }) => {


  return (
    <div className="w-full min-h-screen">
      <div className='flex justify-end bg-[#FDF9EE]'>
        <ProductSideNav />
        {children}
      </div>
    </div>
  )
}

export default products