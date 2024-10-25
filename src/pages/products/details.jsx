import Navbar from '@/components/navbar/Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useState } from 'react'
gsap.registerPlugin(ScrollTrigger)

const details = () => {
    const [quantity, setQuantity] = useState(1)
    useGSAP(() => {
        gsap.from(".detstxt", {
            y: 10,
            opacity: 0,
            duration: .8,
            stagger: .2
        })
        gsap.to('.img-container', {
            y: "-75%",
            duration: 3,
            scrollTrigger: {
                trigger: '.details-container',
                start: 'top 0%',
                end: 'top -300%',
                pin: true,
                scrub: 2
            }
        })
    }, [])


    return (
        <div className='details-container w-full h-screen flex justify-between bg-[#FDF9EE] relative overflow-hidden'>
            <Navbar color={"black"} bg={"bg-[#FDF9EE]"}/>
            <div className='w-[50%] h-full relative'>
                <div className='img-container w-full h-[400vh]'>
                    <div className='w-full h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Face_Oil_01_747bbb1d-8b86-4214-9b80-d08e89e4bf6f.jpg?v=1724160713&width=1000" alt="" />
                    </div>
                    <div className='w-full h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Face_Cream_01.jpg?v=1724159737&width=1000" alt="" />
                    </div>
                    <div className='w-full h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Power_Duo_01.jpg?v=1724160408&width=1000" alt="" />
                    </div>
                    <div className='w-full h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Face_Cream_01.jpg?v=1724159737&width=1000" alt="" />
                    </div>
                </div>
                <div className='h-screen w-[5vw] absolute top-0 right-[-2.5vw] flex flex-col items-center justify-center gap-8'>
                    <div className='w-[5vw] h-[5vw] bg-white p-1 flex cursor-pointer items-center justify-center'>
                        <img className='w-full h-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Face_Oil_01_747bbb1d-8b86-4214-9b80-d08e89e4bf6f.jpg?v=1724160713&width=1000" alt="" />
                    </div>
                    <div className='w-[5vw] h-[5vw] bg-white p-1 flex cursor-pointer items-center justify-center'>
                        <img className='w-full h-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Face_Cream_01.jpg?v=1724159737&width=1000" alt="" />
                    </div>
                    <div className='w-[5vw] h-[5vw] bg-white p-1 flex cursor-pointer items-center justify-center'>
                        <img className='w-full h-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Power_Duo_01.jpg?v=1724160408&width=1000" alt="" />
                    </div>
                    <div className='w-[5vw] h-[5vw] bg-white p-1 flex cursor-pointer items-center justify-center'>
                        <img className='w-full h-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Face_Cream_01.jpg?v=1724159737&width=1000" alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[50%] h-full flex flex-col items-center justify-center pt-14'>
                <h4 className='detstxt mb-2 text-[second] text-[#635758]'>100ml</h4>
                <h2 className='detstxt text-5xl font-medium font-[third] mb-10'>Acne+ Facial Wash</h2>
                <p className='detstxt text-lg font-[second] w-[70%] text-center text-[#635758]'>A gentle facial wash that helps fight against acne and blackheads while protecting the skin’s moisture barrier.</p> <br />
                <p className='detstxt text-lg font-[second] w-[70%] text-center text-[#635758]'>Wet face thoroughly. Create a lather and massage gently all over the face. Rinse well and pat dry. Use twice a day or as needed. If any irritation occurs, discontinue use and consult with a doctor if necessary.</p>
                <div className='detstxt flex items-center justify-between w-[45%] h-[6vh] mt-10'>
                    <div className='flex h-full items-center justify-between px-3 text-xl border border-zinc-700 text-zinc-700 w-[35%] rounded-full'>
                        <span onClick={() => quantity > 1 && setQuantity(q => q - 1)} className='text-xl leading-10 px-2 cursor-pointer select-none'>-</span>
                        <span className='text-xl leading-10 px-2'>{quantity}</span>
                        <span onClick={() => setQuantity(q => q + 1)} className='text-xl leading-10 px-2 cursor-pointer select-none'>+</span>
                    </div>
                    <div className='detstxt flex h-full items-center justify-center w-[60%] bg-black text-white rounded-full uppercase'>
                        <h2 className=''>add to cart</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default details