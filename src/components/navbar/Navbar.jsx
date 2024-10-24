import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-[4%] z-10 left-1/2 -translate-x-1/2 w-[95%] font-[second] bg-white p-1 px-6 rounded-full flex items-center justify-between'>
       <Link href="/" className='w-[15%]'><img className='w-full' src="https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/iwhite-logo-new-07-f2809a-b79e4fa3.webp" alt="" /></Link>
        <div className='absolute left-1/2 -translate-x-1/2 flex items-center gap-10 uppercase font-semibold text-[#fa6285]  text-sm'>
            <Link href='/'>About Us</Link>
            <Link href='/products/daily-skincare-line'>Products</Link>
            <Link href='/'>FAQS</Link>
            <Link href='/'>Contact Us</Link>
        </div>
        <div className='flex items-center gap-4'>
            <div className="user w-[2vw] h-[2vw] rounded-full bg-[#F2809A] text-white flex items-center justify-center">
            <i className="ri-user-line"></i>
            </div>
            <div className="user w-[2vw] h-[2vw] rounded-full bg-[#F2809A] text-white flex items-center justify-center">
            <i className="ri-handbag-line"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar