import React, { useEffect, useRef } from 'react'

const Section3 = ({setexploreScroll}) => {
    const secRef =  useRef(null)

    useEffect(()=>{
        if(secRef.current){
            setexploreScroll(secRef.current.getBoundingClientRect().top)
        }
    },[])

    return (
        <div ref={secRef} className='w-full bg-[#FDF9EE] flex justify-between px-3 sm:px-10 py-[10vw] sm:py-[5vw]'>
            <div className='hidden sm:block w-[2.5%] relative border-r-2 border-[#E0DDD5]'>
                <h4 className='absolute rotate-90 top-[9%] left-[-150%] whitespace-nowrap uppercase font-[second]  font-semibold text-[1vw]'>our philosophy</h4>
            </div>
            <div className='w-full sm:w-[94%] flex flex-col sm:flex-row items-start h-fit'>
                <div className='w-full sm:w-1/2'>
                    <h1 className='text-[10vw] sm:text-[4.2vw] font-[third] uppercase leading-none mb-[1vw]'>our</h1>
                    <h1 className='text-[10vw] sm:text-[4.2vw] font-[third]  uppercase leading-none mb-[5vw] sm:mb-0'>philosophy</h1>
                </div>
                <div className='w-full sm:w-1/2 text-[#635758]'>
                    <h2 className='text-[4.2vw] sm:text-[2vw] font-[second] '>
                        iWhite Korea got its start as one of the first Korean skincare
                        brands in the Philippines. With all the hustle and bustle of
                        skincare, we hope to rekindle your experience of receiving,
                        opening, and trying out your first Korean skincare.
                        iWhite Korea believes that skincare is Self-Care and
                        Self-Care is as easy as 1, 2, 3
                    </h2>
                    <h4 className='text-[4.2vw] sm:text-[1.5vw] my-[6vw] sm:my-[2vw] font-[second] '><span className='text-black'>Cheot-Sarang </span>
                        the feeling of experiencing your first love. A love that comes
                        from within and when simple heartwarming gestures feels
                        so grand.</h4>
                    <h4 className='text-[4.2vw] sm:text-[1.5vw] font-[second] '><span className='text-black'>Malg-eum </span>
                        It is finding solace in the purity of
                        nature like...
                        when you see blue skies,
                        feel the morning breeze,
                        and take a dip in the clear water.</h4>
                </div>
            </div>
        </div>
    )
}

export default Section3

