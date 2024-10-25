import Link from 'next/link'
import React from 'react'

const Navbar = ({color, bg , navRef}) => {
  return (
    <div ref={navRef} className={`fixed top-0 z-10 left-1/2 -translate-x-1/2 w-full font-[second]  p-2 px-6 ${bg} flex text-${color} items-center justify-between`}>
       <Link href="/" className='w-[14%]'><img className={`logo w-full ${color == "black" ? 'invert' : ''} filter`} src="https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/iwhite-logo-transparent-4d1bd242.webp" alt="" /></Link>
        <div className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-10 capitalize  text-lg`}>
            <Link href='/'>About Us</Link>
            <Link href='/products/daily-skincare-line'>Products</Link>
            <Link href='/'>Contact Us</Link>
        </div>
        <div className='flex items-center gap-4'>
            <div className={`bag w-[2vw] h-[2vw] rounded-full ${color  == "black" ? "bg-black text-white" : "bg-white text-black"} flex items-center justify-center`}>
            <i className="ri-handbag-line"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar