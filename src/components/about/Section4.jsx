import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {
  useGSAP(() => {
    gsap.to('.core-values', {
        y: "-66%",
        duration: 3,
        scrollTrigger: {
            trigger: '.core',
            start: 'top 0%',
            end: 'top -300%',
            pin: true,
            scrub: 2
        }
    })
}, [])

return (
   <>
    <div className='hidden core w-full h-[100vh] bg-[#FDF9EE] sm:flex items-start'>
      <div className='w-[60%] h-screen'>
        <Image width={1000} height={1000} className='w-full h-full object-cover object-top' src="/about4.jpg" alt="" />
      </div>
      <div className='w-[40%] h-screen overflow-hidden'>
        <div className='core-values w-full'>
          <div className='w-full h-screen flex flex-col pt-[8vw] px-[6vw]'>
            <h1 className='text-[4.2vw] font-[five]'>Modern</h1>
            <h2 className='text-[2vw] font-[fourth]'>A brand that is fresh to its
              offerings and beliefs. There
              is a constant challenge to
              reinvent itself.</h2>
          </div>
          <div className='w-full h-screen flex flex-col pt-[8vw] px-[6vw]'>
            <h1 className='text-[4.2vw] font-[five]'>Korean</h1>
            <h2 className='text-[2vw] font-[fourth]'>A brand that is true to its
              origins. It exudes the qualities
              and everything that makes it
              uniquely Korean</h2>
          </div>
          <div className='w-full h-screen flex flex-col pt-[8vw] px-[6vw]'>
            <h1 className='text-[4.2vw] font-[five]'>Dependable</h1>
            <h2 className='text-[2vw] font-[fourth]'>The skincare you can lean
              upon. A brand that gets you
              through your good days and
              bad days.</h2>
          </div>
        </div>
      </div>
    </div>
    <div className='w-full bg-[#FDF9EE] sm:hidden flex flex-col items-start'>
      <div className='w-full h-[60vh]'>
        <Image width={1000} height={1000} className='w-full h-full object-cover object-top' src="/about4.jpg" alt="" />
      </div>
        <div className='w-full py-[10vw] pt-2'>
          <div className='w-full flex flex-col pt-[12vw] sm:pt-[8vw] px-3 sm:px-[6vw]'>
            <h1 className='text-[10vw] sm:text-[4.2vw] font-[third]'>Modern</h1>
            <h2 className='text-[4.2vw] sm:text-[2vw] font-[second] text-[#635758]'>A brand that is fresh to its
              offerings and beliefs. There
              is a constant challenge to
              reinvent itself.</h2>
          </div>
          <div className='w-full flex flex-col pt-[12vw] sm:pt-[8vw] px-3 sm:px-[6vw]'>
            <h1 className='text-[10vw] sm:text-[4.2vw] font-[third]'>Korean</h1>
            <h2 className='text-[4.2vw] sm:text-[2vw] font-[second] text-[#635758]'>A brand that is true to its
              origins. It exudes the qualities
              and everything that makes it
              uniquely Korean</h2>
          </div>
          <div className='w-full flex flex-col pt-[12vw] sm:pt-[8vw] px-3 sm:px-[6vw]'>
            <h1 className='text-[10vw] sm:text-[4.2vw] font-[third]'>Dependable</h1>
            <h2 className='text-[4.2vw] sm:text-[2vw] font-[second] text-[#635758]'>The skincare you can lean
              upon. A brand that gets you
              through your good days and
              bad days.</h2>
          </div>
        </div>
    </div>
   </>
  )
}

export default Section4
