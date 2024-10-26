import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const Footer = () => {
    const company = useRef()
    const support = useRef()
    const [isCompany, setisCompany] = useState(false)
    const [isSupport, setisSupport] = useState(false)

    useEffect(()=>{
        if(company.current){
            if(isCompany){
                gsap.to(company.current,{
                    height:"18vh",
                    duration:.5
                })
            }else{
                gsap.to(company.current,{
                    height:"0",
                    duration:.5
                })
            }
        }
        if(support.current){
            if(isSupport){
                gsap.to(support.current,{
                    height:"12vh",
                    duration:.5
                })
            }else{
                gsap.to(support.current,{
                    height:"0",
                    duration:.5
                })
            }
        }
    },[isCompany,isSupport])

    const handleCompany = ()=>{
        setisCompany(!isCompany)
    }
    const handleSupport = ()=>{
        setisSupport(!isSupport)
    }
    return (
        <div className='w-full min-h-[70vh] bg-[#FDF9EE] pointer-events-auto'>
            <div className='w-full sm:h-[70vh] rounded-tl-3xl rounded-tr-3xl sm:bg-[#f0ece2] p-3 sm:p-6'>
                <div className='w-full pb-[6vw] bg-[#FDF9EE] rounded-2xl px-[3vw] pt-[9vw] sm:pt-[3vw] flex flex-col sm:flex-row items-center sm:items-start justify-between'>
                    <div>
                        <h2 className='text-[8vw] sm:text-[2.2vw] leading-none text-center sm:text-left'>Your inbox deserves  <br /> rejuvenation, too.</h2>
                        <p className='text-[4.2vw] sm:text-[1.2vw] mt-[5vw] sm:w-[50%] sm:mt-2 text-black/60 text-center sm:text-left'>Sign up for our newsletter for 10% off, special offers, iwhitekorea news, wellness tips, and more!</p>
                    </div>
                    <div className='hidden sm:flex gap-[4vw]'>
                        <div>
                            <h4 className='text-[.9vw] font-medium uppercase font-[second] mb-2'>company</h4>
                            <h2 className='text-[1.2vw] mb-1'>About us</h2>
                            <h2 className='text-[1.2vw] mb-1'>Products</h2>
                            <h2 className='text-[1.2vw] mb-1'>Blog</h2>
                            <h2 className='text-[1.2vw] mb-1'>FAQ</h2>
                            <h2 className='text-[1.2vw] mb-1'>Contact</h2>
                        </div>
                        <div>
                            <h4 className='text-[.9vw] font-medium uppercase font-[second] mb-2'>support</h4>
                            <h2 className='text-[1.2vw] mb-1'>Privacy Policy</h2>
                            <h2 className='text-[1.2vw] mb-1'>Terms of Service</h2>
                            <h2 className='text-[1.2vw] mb-1'>Shipping & Returns</h2>
                        </div>
                    </div>
                    <div className='sm:hidden w-full mt-2 border-b border-black pb-2 sm:pb-0'>
                        <div className='w-full py-[3vw] pb-[1vw] sm:pb-0 flex items-center justify-between'>
                            <h6 className='uppercase font-medium font-[first]'>company</h6>
                            <i onClick={handleCompany} className="ri-add-circle-line text-[6vw]"></i>
                        </div>
                        <div ref={company} className='h- 0 overflow-hidden'>
                            <h2 className='text-[4vw] mb-1'>About us</h2>
                            <h2 className='text-[4vw] mb-1'>Products</h2>
                            <h2 className='text-[4vw] mb-1'>Blog</h2>
                            <h2 className='text-[4vw] mb-1'>FAQ</h2>
                            <h2 className='text-[4vw] mb-1'>Contact</h2>
                        </div>
                    </div>
                    <div className='sm:hidden w-full mt-2 border-b border-black pb-2 sm:pb-0'>
                        <div className='w-full py-[3vw] pb-[1vw] sm:pb-0 flex items-center justify-between'>
                            <h6 className='uppercase font-medium font-[first]'>Support</h6>
                            <i onClick={handleSupport} className="ri-add-circle-line text-[6vw]"></i>
                        </div>
                        <div ref={support} className='h- 0 overflow-hidden'>
                            <h2 className='text-[4vw] mb-1'>Privacy Policy</h2>
                            <h2 className='text-[4vw] mb-1'>Terms of Service</h2>
                            <h2 className='text-[4vw] mb-1'>Shipping & Returns</h2>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-[10vw] sm:mt-[2vw] flex flex-col sm:flex-row justify-between items-center sm:items-end relative'>
                    <div className="social  flex gap-[5vw] sm:gap-[1vw]">
                        <i className="hover:text-black/50 text-[12vw] sm:text-[2.3vw] duration-300 cursor-pointer ri-facebook-circle-fill"></i>
                        <i className="hover:text-black/50 text-[12vw] sm:text-[2.3vw] duration-300 cursor-pointer ri-instagram-fill"></i>
                        <i className="hover:text-black/50 text-[12vw] sm:text-[2.3vw] duration-300 cursor-pointer ri-twitter-fill"></i>
                        <i className="hover:text-black/50 text-[12vw] sm:text-[2.3vw] duration-300 cursor-pointer ri-youtube-fill"></i>
                    </div>
                    <Link href="/" className='w-[50%] sm:w-[14%] absolute hidden sm:block left-1/2 -translate-x-1/2'><img className={`logo w-full invert filter`} src="https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/iwhite-logo-transparent-4d1bd242.webp" alt="" /></Link>
                    <div className='p-3 border border-black rounded-xl w-full sm:w-[25%]'>
                        <p className='text-[3vw] sm:text-[.8vw]'>These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer