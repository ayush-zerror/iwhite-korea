import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Section1 = ({title , subtitle,vid}) => {
  useGSAP(()=>{
    gsap.from(".hometxt",{
      y:20,
      opacity:0,
      duration:1,
      stagger:.2
    })
  },[])
  return (
    <div className='fixed top-0 left-0 w-full h-screen flex'>
      <video autoPlay muted loop  className='w-full brightness-[50%] h-full object-cover' src={vid}></video>
      <div className='w-full h-full absolute top-0 left-0 text-white flex flex-col items-center justify-end pb-[30vw] sm:pb-[6vw]'>
        <h2 className='hometxt text-[9vw] sm:text-[3vw] font-[third] mb-2 sm:mb-0 leading-none text-center'>{title}</h2>
        <h2 className='hometxt text-[9vw] sm:text-[3vw] font-[third] leading-none text-center'>{subtitle}</h2>
        <p className='hometxt font-[second] my-[6vw] sm:my-[1vw]'>For hydration that never clocks off. </p>
        <div className='hometxt capitalize text-white px-8 py-2 border border-white rounded-xl hover:bg-zinc-800 cursor-pointer hover:border-zinc-800'>find out more</div>
      </div>
    </div>
  )
}

export default Section1