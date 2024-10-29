import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Section1 = ({ title, vid }) => {
  useGSAP(() => {
    gsap.from(".hometxt", {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: .2
    })
  }, [])
  return (
    <div className='fixed top-0 left-0 w-full h-screen flex'>
      <video autoPlay muted loop playsInline className='w-full  h-full object-cover' src={vid}></video>
      <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#0000000c] to-[#000000c2]  text-white flex flex-col items-center justify-end pb-[30vw] sm:pb-[6vw]'>
        {
          title && (<>
            <h2 className='hometxt text-[9vw] sm:text-[3vw] font-[third] mb-2 sm:mb-0 leading-none text-center'>Your First In Korean Skincare.</h2>
            <h2 className='hometxt text-[9vw] sm:text-[3vw] font-[third] leading-none text-center'>Your First Love.</h2>
            <p className='hometxt font-[second] my-[6vw] sm:my-[1vw]'>For hydration that never clocks off. </p>
            <div className='btn-anime capitalize text-white px-8 py-2  border border-white rounded-full cursor-pointer relative overflow-hidden'>
              <div className='curve  transition-all duration-500 w-full h-full bg-white absolute top-full left-1/2 -translate-x-1/2 rounded-[50%]'></div>
              <h2 className='txtbtn relative whitespace-nowrap transition-all duration-500 '>find out more</h2>
            </div>
          </>)
        }
      </div>
    </div>
  )
}

export default Section1