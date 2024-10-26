import gsap from 'gsap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ color, bg, navRef }) => {
  const navigation = useRef()
  const [isOpen, setisOpen] = useState(false)
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
  useEffect(()=>{
    if(navigation.current){
      if(isOpen){
      gsap.to(navigation.current,{
          clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`
      })
      }
      else{
        gsap.to(navigation.current,{
          clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`
        })
      }
    }
  },[isOpen])
 
  const handleMenuOpen = ()=>{
    setisOpen(true)
  }

  const handleMenuClose = ()=>{
    setisOpen(false)
  }
  return (
    <div ref={navRef} className={`fixed top-0 z-10 left-1/2 -translate-x-1/2 w-full font-[second]  py-4  px-3  sm:py-2 sm:px-6 ${bg} flex text-${color} items-center justify-between`}>
      <Link href="/" className='w-[50%] sm:w-[14%]'><img className={`logo w-full ${color == "black" ? 'invert' : ''} filter`} src="https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/iwhite-logo-transparent-4d1bd242.webp" alt="" /></Link>
      <div className={`absolute left-1/2 -translate-x-1/2  hidden sm:flex items-center gap-10 capitalize  text-lg`}>
        <Link href='/about-us'>About Us</Link>
        <Link href='/products/daily-skincare-line'>Products</Link>
        <Link href='/'>Contact Us</Link>
      </div>
      <div className='hidden  sm:flex items-center gap-4'>
        <div className={`bag w-[2vw] h-[2vw] rounded-full ${color == "black" ? "bg-black text-white" : "bg-white text-black"} flex items-center justify-center`}>
          <i className="ri-handbag-line"></i>
        </div>
      </div>
      <h4 onClick={handleMenuOpen} className='text-[5vw] sm:hidden'>Menu</h4>
    {
      isOpen && (
        <div ref={navigation} style={{clipPath:'polygon(0 0, 100% 0%, 100% 0, 0 0)'}} className='menu-pg sm:hidden fixed top-0 left-0 w-full h-[100vh] bg-[#FDF9EE] flex flex-col justify-between pb-3'>
        <div className={`w-full font-[second]  py-4  px-3 flex text-black items-center `}>
          <h4  onClick={handleMenuClose} className='text-[5vw] sm:hidden'>close</h4>
        </div>
        <div className='flex flex-col px-3 text-black'>
          <Link href={"/"} className='text-[12vw] font-[third] font-semibold text-black'>Home</Link>
          <Link href={"/about-us"} className='text-[12vw] font-[third] font-semibold text-black'>About Us</Link>
          <Link href={"/products/daily-skincare-line"} className='text-[12vw] font-[third] font-semibold text-black'>Products</Link>
          <div className='capitalize ml-[3vw] font-semibold text-black/50'>
          {productsList.map((p,i)=><Link key={i}  onClick={()=>setisOpen(false)} href={`/products/${p}`} className='flex gap-1' ><i class={`ri-arrow-right-line ${router.query.name == p ? "text-black":'hidden'}`}></i><p className={`${router.query.name == p ? "text-black" : ''}`}>{p}</p></Link>)}
          </div>
          <Link href={"/"} className='text-[12vw] font-[third] font-semibold text-black'>Contact Us</Link>
        </div>
        <div className='border-t w-full border-black'>
          <Link href="/" ><img className={`logo w-[50%] filter invert`} src="https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/iwhite-logo-transparent-4d1bd242.webp" alt="" /></Link>
        </div>
      </div>
      )
    }
    </div>
  )
}

export default Navbar