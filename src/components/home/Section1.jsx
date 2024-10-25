import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Section1 = ({homeRef}) => {
  useGSAP(()=>{
    gsap.from(".hometxt",{
      y:20,
      opacity:0,
      duration:1,
      stagger:.2
    })
  },[])
  return (
    <div ref={homeRef} className='w-full h-screen flex bg-[#FDF9EE] relative'>
      <video autoPlay muted loop  className='w-full h-full object-cover' src="./vid.mp4"></video>
      <div className='w-full h-full absolute top-0 left-0 text-white flex flex-col items-center justify-end pb-[6vw]'>
        <h2 className='hometxt text-[3vw] font-[third] leading-none'>Introducing: Hydrating</h2>
        <h2 className='hometxt text-[3vw] font-[third] leading-none'>Gel-Cream</h2>
        <p className='hometxt font-[second] my-[1vw]'>For hydration that never clocks off. </p>
        <div className='hometxt capitalize text-white px-8 py-2 border border-white rounded-xl hover:bg-zinc-800 cursor-pointer hover:border-zinc-800'>find out more</div>
      </div>
    </div>
  )
}

export default Section1