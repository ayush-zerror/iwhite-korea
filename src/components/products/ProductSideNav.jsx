import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const ProductSideNav = () => {
  const router = useRouter()
    const productsList = [
        "daily-skincare-line",
        "acne-skincare-line",
        "power-brightening-line",
        "pore-care",
        "skin-booster",
        "cloud-series",
        "day-and-bbb-creame"
      ]
    
  return (
    <idv className='w-[25%] h-screen pl-11 pt-52 '>
    {productsList.map((p,i)=>(
      <div key={i} className='relative mb-4'>
      <i className={`ri-arrow-right-line ${router.query.name == p && 'text-zinc-800'} text-[#F2809A]`}></i>
      <Link href={`/products/${p}`} className={`absolute top-0 left-0 bg-[#f8d8de] hover:left-5 ${router.query.name == p && 'left-5 text-zinc-800'} duration-500 font-semibold text-[#fa6285] font-["second"] capitalize  text-2xl cursor-pointer w-fit`}>{p}</Link>
      </div>
    ))}
   </idv>
  )
}

export default ProductSideNav