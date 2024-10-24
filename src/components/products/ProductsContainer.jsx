import { productsContext } from '@/utils/Context'
import Link from 'next/link'
import React, { useContext } from 'react'

const ProductsContainer = ({category}) => {
    const data = useContext(productsContext)
    const handleMouseEnter = (i) => {
     document.querySelector(`.backdrop-${i}`).style.height = "100%"
     document.querySelector(`.backdrop-img${i}`).style.opacity = 1
     document.querySelector(`.add-${i}`).style.opacity = 1
     document.querySelector(`.add-${i}`).style.bottom = "5%"
   
   }
   const handleMouseLeave = (i) => {
     document.querySelector(`.backdrop-${i}`).style.height = "50%"
     document.querySelector(`.backdrop-img${i}`).style.opacity = 0
     document.querySelector(`.add-${i}`).style.opacity = 0
     document.querySelector(`.add-${i}`).style.bottom = "0%"
   
   }
  return (
    <div className='w-[75%] overflow-y-auto h-screen  py-10 pt-52 pr-11 flex items-start gap-20 flex-wrap'>
    {data[0][category].map((p,i)=>(
      <Link href='/products/details' onMouseEnter={()=>handleMouseEnter(i)} onMouseLeave={()=>handleMouseLeave(i)} className='relative w-[27%] transition duration-500rounded-lg mb-8 flex flex-col'>
      <div className={`backdrop-${i} absolute w-full h-[50%] rounded-xl top-0 left-0 transition-all duration-300 bg-white `}></div>
      <div className='bg-white p-2 rounded-xl'>
      <div className='h-[23vw]  rounded-xl p-2 relative bg-white'>
        <img className={`backdrop-img${i} w-full object-cover h-full absolute top-0 left-0 transition-all duration-700  opacity-0 rounded-xl`} src={p.img2} alt="" />
        <img className='w-full h-full object-cover' src={p.img1} alt="" />
        <div className={`add-${i} w-[80%] absolute bottom-0 left-1/2 -translate-x-1/2 z-20 uppercase transition-all duration-500 text-white flex items-center justify-center bg-[#F2809A]  py-2 rounded-full opacity-0`}>add to car</div>
      </div>
      </div>
    <div className='flex items-start justify-between px-2 mt-1'>
    <h4 className='relative  font-semibold text-lg text-[#F2809A]'>{p.productName}</h4>
    <h4 className='relative  font-semibold text-lg text-[#F2809A]'>$23</h4>
    </div>
    <div className='flex  relative items-center gap-1 px-2 mb-1 text-yellow-500'>
    <i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i>
    </div>
    </Link>
    ))}
  </div>
  )
}

export default ProductsContainer