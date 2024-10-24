import Navbar from '@/components/navbar/Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const details = () => {

    useGSAP(() => {
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
        <div className='details-container w-full h-screen flex justify-between bg-[#f8d8de] relative overflow-hidden'>
            <Navbar />
            <div className='w-[50%] h-full relative'>
                <div className='img-container w-full h-[400vh]'>
                    <div className='w-full h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1686831889330-dd7d9ff32515?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='w-full h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1686831889299-f4c2a9c561c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='w-full h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1686831757659-a7528ec36e24?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='w-full h-[100vh]'>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1686831757685-de3cadfc2325?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
                <div className='h-screen w-[5vw] absolute top-0 right-[-2.5vw] flex flex-col items-center justify-center gap-8'>
                    <div  className='w-[5vw] h-[5vw] bg-white p-1 flex cursor-pointer items-center justify-center'>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1686831889330-dd7d9ff32515?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div  className='w-[5vw] h-[5vw] bg-white p-1 flex cursor-pointer items-center justify-center'>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1686831889299-f4c2a9c561c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div  className='w-[5vw] h-[5vw] bg-white p-1 flex cursor-pointer items-center justify-center'>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1686831757659-a7528ec36e24?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div  className='w-[5vw] h-[5vw] bg-white p-1 flex cursor-pointer items-center justify-center'>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1686831757685-de3cadfc2325?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[50%] h-full flex flex-col items-center justify-center pt-14'>
                <h4 className='mb-2'>100ml</h4>
                <h2 className='text-5xl font-medium font-[second] mb-10'>Acne+ Facial Wash</h2>
                <p className='text-lg font-[third] w-[70%] text-center'>A gentle facial wash that helps fight against acne and blackheads while protecting the skin’s moisture barrier.</p> <br />
                <p className='text-lg font-[third] w-[70%] text-center'>Wet face thoroughly. Create a lather and massage gently all over the face. Rinse well and pat dry. Use twice a day or as needed. If any irritation occurs, discontinue use and consult with a doctor if necessary.</p>
                <div className='flex items-center justify-between w-[45%] mt-10'>
                    <div className='flex items-center justify-between p-2 px-4 text-xl border border-zinc-700 text-zinc-700 w-[35%] rounded-full'>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                    <div className='flex items-center justify-center w-[60%] bg-[#F2809A]  py-2  text-white rounded-full uppercase'>
                        <h2 className=''>add to cart</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default details