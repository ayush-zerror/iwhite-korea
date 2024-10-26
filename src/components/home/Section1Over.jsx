import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section1Over = () => {
  useGSAP(()=>{
    gsap.to(".sectionOver",{
      backgroundColor:"#0000009f",
      duration:1,
      scrollTrigger:{
        trigger:".sectionOver",
        start:"top -10%",
        end:"top -80%",
        scrub:1,
      }
    })
  },[])
  return (
    <div className='sectionOver w-full h-screen bg-transparent pointer-events-none'></div>
  )
}

export default Section1Over