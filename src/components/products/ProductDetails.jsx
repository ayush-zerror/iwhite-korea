import Navbar from '@/components/navbar/Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useState } from 'react'
gsap.registerPlugin(ScrollTrigger)

const details = ({ product }) => {
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
        <div className='details-container w-full min-h-screen sm:h-screen flex flex-col sm:flex-row justify-between bg-[#FDF9EE] relative overflow-hidden'>
            <div className='w-full sm:w-[50%] h-[60vh] sm:h-full relative overflow-hidden sm:overflow-visible'>
                <div className='img-container w-full h-[240vh] sm:h-[400vh]'>
                    {product.images.map((img, i) => (
                        <div
                            key={i}
                            className="w-full h-[60vh] sm:h-[70vh] lg:h-[100vh] relative"
                        >
                            <Image
                                src={img}
                                alt="Product Image"
                                layout="fill"  
                                objectFit="cover"  
                                objectPosition="center"  
                                priority 
                            />
                        </div>
                    ))}
                </div>
                <div className='h-full sm:h-screen absolute top-10 pointer-events-none sm:top-0 right-30 px-3 sm:px-0  sm:right-[-2.5vw] flex flex-col items-center justify-center gap-8'>

                    {product.images.map((img, i) => (
                        <div className='w-[12vw] sm:w-[5vw] h-[12vw] sm:h-[5vw] bg-white p-[.5vw] sm:p-1 flex cursor-pointer items-center justify-center'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover' src={img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full sm:w-[50%] sm:h-full flex flex-col items-start sm:items-center justify-center py-10 sm:py-0 sm:pt-14 px-3 sm:px-0'>
                <h4 className='detstxt mb-2 text-[second] text-[#635758]'>100ml</h4>
                <h2 className='detstxt text-5xl font-medium font-[third] mb-4 sm:mb-10 capitalize'>{product.name}</h2>
                <p className='detstxt text-lg font-[second] sm:w-[70%] sm:text-center text-[#635758]'>A gentle facial wash that helps fight against acne and blackheads while protecting the skin’s moisture barrier.</p> <br />
                <p className='detstxt text-lg font-[second] sm:w-[70%] sm:text-center text-[#635758]'>Wet face thoroughly. Create a lather and massage gently all over the face. Rinse well and pat dry. Use twice a day or as needed. If any irritation occurs, discontinue use and consult with a doctor if necessary.</p>
                <div className='detstxt flex items-center justify-between w-full sm:w-[45%] h-[6vh] mt-8 sm:mt-10'>
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