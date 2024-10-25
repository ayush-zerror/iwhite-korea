import { productsContext } from '@/utils/Context'
import Link from 'next/link'
import React, { useContext } from 'react'

const ProductsContainer = ({ category }) => {
  return (
    <div className='w-[75%] min-h-screen  py-10 pt-52 pr-11 flex items-start gap-10 flex-wrap'>
        <Link href='/products/details' className='relative w-[30%] transition duration-500rounded-lg mb-8 flex flex-col'>
          <img className='h-[85%] w-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Hydrating_Gel_Cream_01.jpg?v=1724166871&width=750" alt="" />
          <h4 className='text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>Hydrating Gel-Cream</h4>
          <div className='flex items-center gap-1  text-[1.2vw] font-semibold text-black'>
            <i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>
            <h4 className='text-[.8vw] font-[second] font-normal'>1 reviews</h4>
          </div>
          <h4 className='text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
        </Link>
        <Link href='/products/details' className='relative w-[30%] transition duration-500rounded-lg mb-8 flex flex-col'>
          <img className='h-[85%] w-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Cream_Cleanser_01.jpg?v=1724159456&width=750" alt="" />
          <h4 className='text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>Hydrating Gel-Cream</h4>
          <div className='flex items-center gap-1  text-[1.2vw] font-semibold text-black'>
            <i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>
            <h4 className='text-[.8vw] font-[second] font-normal'>1 reviews</h4>
          </div>
          <h4 className='text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
        </Link>
        <Link href='/products/details' className='relative w-[30%] transition duration-500rounded-lg mb-8 flex flex-col'>
          <img className='h-[85%] w-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Detox_Mask_01.jpg?v=1724159584&width=750" alt="" />
          <h4 className='text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>Hydrating Gel-Cream</h4>
          <div className='flex items-center gap-1  text-[1.2vw] font-semibold text-black'>
            <i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>
            <h4 className='text-[.8vw] font-[second] font-normal'>1 reviews</h4>
          </div>
          <h4 className='text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
        </Link>
        <Link href='/products/details' className='relative w-[30%] transition duration-500rounded-lg mb-8 flex flex-col'>
          <img className='h-[85%] w-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Eye_Cream_01.jpg?v=1724159677&width=750" alt="" />
          <h4 className='text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>Hydrating Gel-Cream</h4>
          <div className='flex items-center gap-1  text-[1.2vw] font-semibold text-black'>
            <i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>
            <h4 className='text-[.8vw] font-[second] font-normal'>1 reviews</h4>
          </div>
          <h4 className='text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
        </Link>
    </div>
  )
}

export default ProductsContainer