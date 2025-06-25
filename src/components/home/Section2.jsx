import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {
    
    useGSAP(()=>{
        gsap.from(".sect2txt",{
          y:20,
          opacity:0,
          duration:1,
          stagger:.2,
          scrollTrigger:{
            trigger:"#section2",
            start:"top 60%",
            end:"top 40%",
            scrub:1
          }
        })
      },[])
    return (
        <div id='section2' className='w-full min-h-screen bg-[#FDF9EE] pointer-events-auto'>
            <div className='w-full h-[30vh] sm:h-[50vh] flex flex-col items-center justify-center'>
                <div className='mb-[5vw] sm:mb-[1.5vw] sect2txt'>
                    <h4 className='text-[4.2vw] sm:text-[1.2vw] leading-none'>AWARD-WINNING SKINCARE</h4>
                </div>
                <div className='mb-2 sect2txt'>
                    <p className='text-[#635758] leading-none text-[4.2vw] sm:text-[1.2vw] font-[second]'>Winners of Grazia’s Best New Beauty Brand and</p>
                </div>
                <div className='mb-2 sect2txt'>
                    <p className='text-[#635758] leading-none text-[4.2vw] sm:text-[1.2vw] font-[second]'>Elle’s Future of Beauty Award with our 24/7</p>
                </div>
                <div className='mb-2 sect2txt'>
                    <p className='text-[#635758] leading-none text-[4.2vw] sm:text-[1.2vw] font-[second]'>Treatment, discover hard-working skincare</p>
                </div>
                <div className='mb-2 sect2txt'>
                    <p className='text-[#635758] leading-none text-[4.2vw] sm:text-[1.2vw] font-[second]'>essentials from Soho Skin.</p>
                </div>
            </div>
            <div className='w-full px-3 sm:px-[25vw]'>
                <h2>BEHIND SOHO SKIN</h2>
                <div className='h-[50vh] sm:h-[140vh] overflow-hidden'>
                    <Image width={1000} height={1000} className='w-full h-full object-cover ' src="/homeposter.jpg" alt="" />
                </div>
                <p className='text-[4.2vw] sm:text-[1.2vw] my-[4vw] sm:my-[1vw] text-[#635758] font-[second]'>Inspired by Soho House’s global membership community, our hyper-functional formulas have been developed to remove complicated steps and create a simple, effective routine that meets the demands of modern lifestyles.</p>
                <Link href={"/products/all products"} className='font-[second] font-semibold text-black text-[4.2vw] sm:text-[1.2vw] leading-none'>Browse collection</Link>
            </div>
        </div>
    )
}

export default Section2