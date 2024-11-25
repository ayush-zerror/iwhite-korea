import { productsContext } from '@/utils/Context'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'

const ProductsContainer = ({products}) => {
  return (
    <div className='w-full  sm:w-[75%]  min-h-screen py-10 pt-32 sm:pt-40 px-3 sm:px-0 sm:pr-11 flex  flex-col  sm:flex-row sm:items-start gap-10 flex-wrap'>
       {products.map((p,i)=>(
         <Link key={i} href={`/products/${p.category}/${p.name}`} className='relative  w-full sm:w-[30%] mb-8 flex flex-col'>
         <img className='h-[55vh] w-full object-cover' src={p.images[0]} alt="" />
         <h4 className='text-[4.2vw] sm:text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>{p.name}</h4>
         <div className='flex items-center gap-1  text-[4.2vw] sm:text-[1.2vw] font-semibold text-black'>
           <i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i>
           <h4 className='text-[3.4vw] sm:text-[.8vw] font-[second] font-normal'>1 reviews</h4>
         </div>
         <h4 className='text-[4.2vw] sm:text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
       </Link>
       ))}
    </div>
  )
}

export default ProductsContainer