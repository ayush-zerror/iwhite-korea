import Home from '@/components/home/Home'
import Section1 from '@/components/home/Section1'
import Navbar from '@/components/navbar/Navbar'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)


const index = () => {
  const navRef = useRef(null)
  useEffect(()=>{
    document.title = 'Home - The Original Korean Skin Care - Your Daily Skin Care Partner'
    var tl = gsap.timeline({
      scrollTrigger:{
        start:"top 0%",
        end:"top -5%",
        scrub:1
      }
    })
    tl.to(navRef.current,{
      backgroundColor:"#FDF9EE",
      color:"black",
      duration:.2,
    },"a")
    tl.to(navRef.current.querySelector(".bag"),{
      backgroundColor:"black",
      color:"#FDF9EE",
      duration:.2
    },"a")
    tl.to(navRef.current.querySelector(".logo"),{
      filter:"invert(1)",
      duration:.2
    },"a")
  },[])
  return (
    <div className='relative'>
      <Navbar navRef={navRef} color={"white"} />
      <Section1 title={true} vid={"./videos/home.mp4"}/>
      <Home />
    </div>
  )
}

export default index