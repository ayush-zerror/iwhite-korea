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
    <div className='w-[25%] fixed top-0 left-0 h-screen pl-11 pt-52 '>
    {productsList.map((p,i)=>(
      <div key={i} className='relative mb-4'>
      <i className={`ri-arrow-right-line ${router.query.name == p && 'text-zinc-900'} text-zinc-500`}></i>
      <Link href={`/products/${p}`} className={`absolute top-1/2 -translate-y-1/2 left-0 bg-[#FDF9EE] hover:left-5 ${router.query.name == p && 'left-5 text-zinc-900'} duration-500 text-zinc-500 font-[second] capitalize  text-2xl cursor-pointer w-fit`}>{p}</Link>
      </div>
    ))}
   </div>
  )
}

export default ProductSideNav