import gsap from 'gsap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import TextEffect from './TextEffect'
import Image from 'next/image'

const Navbar = ({ color, bg, navRef }) => {
  const navigation = useRef()
  const [isOpen, setisOpen] = useState(false)
  const router = useRouter()
  const productsList = [
    "daily skincare line",
    "acne skincare line",
    "power brightening line",
    "pore care",
    "skin booster",
    "cloud series",
    "day and bbb creame"
  ]
  useEffect(()=>{
    if(navigation.current){
      if(isOpen){
        var tl = gsap.timeline()
      tl.
      to(navigation.current,{
          clipPath:`polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`
      },"a")
      .from(".mtxt",{
        y:"100%",
        duration:.3,
        stagger:{
          amount:.2
        }
      },"a")
      .from(".cat",{
        x:10,
        opacity:0,
        stagger:{
          amount:.2
        },
        duration:.2
      })
      .from(".mtxtc",{
        y:"100%",
        duration:.5,
      })
      }
      else{
        gsap.to(navigation.current,{
          clipPath:`polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`
        })
      }
    }
  },[isOpen])

 

  return (
    <div ref={navRef} className={`fixed top-0 z-10 left-1/2 -translate-x-1/2 w-full font-[second]  py-4  px-3  sm:py-4 sm:px-6 ${bg} flex text-${color} items-center justify-between`}>
      <Link href="/" className=''><Image width={1000} height={1000} className={`logo w-[30vw] sm:w-[10vw]`} src="/logo.png" alt="" /></Link>
      <div className={`absolute left-1/2 -translate-x-1/2  hidden sm:flex items-center gap-10 text-lg`}>
      <TextEffect key={2} text={"Shop"} to={"/products/all products"} id={2}/>
      <TextEffect key={1} text={"About"} to={"/about"} id={1}/>
      <TextEffect key={3} text={"Contact"} to={"/contact"} id={3}/>
      </div>
      <div className='hidden  sm:flex items-center gap-4'>
        <div className={`bag w-[2vw] h-[2vw] rounded-full ${color == "black" ? "bg-black text-white" : "bg-white text-black"} flex items-center justify-center`}>
          <i className="ri-handbag-line"></i>
        </div>
      </div>
      <h4 onClick={()=>setisOpen(true)} className='text-[5vw] sm:hidden'>Menu</h4>
    {
        <div ref={navigation} style={{clipPath:'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}} className='menu-pg sm:hidden fixed top-0 left-0 w-full h-[100vh] bg-[#FDF9EE] flex flex-col justify-between pb-3'>
        <div className={`w-full font-[second]  py-4  px-3 flex text-black border-b border-black items-center `}>
          <h4  onClick={()=>setisOpen(false)} className='text-[5vw] sm:hidden'>close</h4>
        </div>
        <div className='flex flex-col px-3 text-black'>
          <div className='overflow-hidden'>
          <Link href={"/"} className='mtxt inline-block text-[14vw] font-[third] font-semibold text-black'>Home</Link>
          </div>
          <div className='overflow-hidden'>
          <Link href={"/about"} className='mtxt inline-block text-[14vw] font-[third] font-semibold text-black'>About</Link>
          </div>
          <div className='overflow-hidden'>
          <Link href={"/products/all products"} className='mtxt inline-block text-[14vw] font-[third] font-semibold text-black'>Products</Link>
          </div>
          <div className='capitalize ml-[3vw] font-semibold text-black/50'>
          {productsList.map((p,i)=><Link key={i}  onClick={()=>setisOpen(false)} href={`/products/${p}`} className='cat flex gap-1' ><i className={`ri-arrow-right-line ${router.query.name == p ? "text-black":'hidden'}`}></i><p className={`${router.query.name == p ? "text-black" : ''}`}>{p}</p></Link>)}
          </div>
          <div className='overflow-hidden'>
          <Link href={"/contact"} className='mtxtc inline-block text-[14vw] font-[third] font-semibold text-black'>Contact</Link>
          </div>
        </div>
        <div className='border-t w-full border-black'>
          <Link href="/" ><Image width={1000} height={1000} className={`logo w-[50%] filter invert`} src="https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/iwhite-logo-transparent-4d1bd242.webp" alt="" /></Link>
        </div>
      </div>
    }
    </div>
  )
}

export default Navbar