import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section4 = () => {
    const posts = [
        "/insta1.jpg",
        "/insta2.jpg",
        "/insta3.jpg",
        "/insta4.jpg",
        "/insta5.jpg",
    ]
    return (
        <div className='w-full  pt-[15vw] sm:pt-[5vw] bg-[#FDF9EE] pointer-events-auto'>
            <div className='w-full  flex items-center justify-between px-3 sm:px-6 '>
                <Link href='https://www.instagram.com/iwhitekorea/' className='text-[6vw] sm:text-[2.5vw] font-[third]'>@iwhitekorea</Link>
                <div className='btn-anime transition-all duration-500 capitalize text-black px-8 py-2  border border-black rounded-full cursor-pointer relative overflow-hidden'>
                    <div className='curve  transition-all duration-500 w-full h-full bg-black absolute top-full left-1/2 -translate-x-1/2 rounded-[50%]'></div>
                    <Link href='https://www.instagram.com/iwhitekorea/' className='relative whitespace-nowrap'>follow us</Link>
                </div>
            </div>
            <div className='w-full py-[8vw] sm:py-[5vw] overflow-hidden flex'>
                <div className='socal-mq w-fit flex items-center gap-4 pr-4'>
                    {posts.map((p, i) => (
                        <div key={i} className='w-[40vw] sm:w-[18vw] h-[40vw] sm:h-[18vw] shrink-0 rounded-xl overflow-hidden'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover' src={p} alt="" />
                        </div>
                    ))}
                </div>
                <div className='socal-mq w-fit flex items-center gap-4 pr-4'>
                    {posts.map((p, i) => (
                        <div key={i} className='w-[40vw] sm:w-[18vw] h-[40vw] sm:h-[18vw] shrink-0 rounded-xl overflow-hidden'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover' src={p} alt="" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Section4