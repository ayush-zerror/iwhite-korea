import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import React from 'react'
gsap.registerPlugin(ScrollToPlugin)

const Section2 = ({exploreScroll}) => {
  const handleExploreScroll =()=>{
    gsap.to(window,{
      scrollTo:exploreScroll,
      duration:1,
      ease: "power2.inOut"
    })
  }

  return (
    <div className='w-full bg-[#FDF9EE] pointer-events-auto'>
      <div className='about-marque whitespace-nowrap overflow-hidden'>
        <h1 className='text-[17vw] sm:text-[12vw] py-4 sm:py-0 font-[fourth] w-fit inline-block px-[4vw] sm:px-[2vw] uppercase'><span className='text-black/50'>ABOUT</span> iWhiteKOREA</h1>
        <h1 className='text-[17vw] sm:text-[12vw] py-4 sm:py-0 font-[fourth] w-fit inline-block px-[4vw] sm:px-[2vw] uppercase'><span className='text-black/50'>ABOUT</span> iWhiteKOREA</h1>
        <h1 className='text-[17vw] sm:text-[12vw] py-4 sm:py-0 font-[fourth] w-fit inline-block px-[4vw] sm:px-[2vw] uppercase'><span className='text-black/50'>ABOUT</span> iWhiteKOREA</h1>
        <h1 className='text-[17vw] sm:text-[12vw] py-4 sm:py-0 font-[fourth] w-fit inline-block px-[4vw] sm:px-[2vw] uppercase'><span className='text-black/50'>ABOUT</span> iWhiteKOREA</h1>
      </div>
      <div className='w-full flex flex-col sm:flex-row justify-between px-3 sm:px-10'>
        <div className='w-full sm:w-[80%]'>
          <h1 className='text-[4.2vw] sm:text-[3vw] font-[second] sm:font-[second] text-[#635758]'><span className='text-black'>About iwhite Korea: </span> 
            iWhite Korea is rooted in the concept of Cheot-Sarang, the
            feeling of experiencing your first love.
            </h1>
        </div>
        <div className='w-full sm:w-[20%] flex justify-start sm:justify-center items-end'>
          <div className='flex items-center gap-[4vw] sm:gap-[1.5vw] my-10 sm:my-0'>
            <h4 className='font-[third] capitalize text-[6vw] sm:text-[1.2vw]'><em>explore</em></h4>
            <div onClick={handleExploreScroll} className='w-[8vw] sm:w-[3vw] h-[8vw] sm:h-[3vw] bg-black rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f82457c5-8438-48a1-bcce-dde3448a0d3a, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;icon/inverse&quot;} */" style={{ userSelect: "none", width: "50%", height: "50%", display: "inline-block", fill: "var(--token-f82457c5-8438-48a1-bcce-dde3448a0d3a, rgb(255, 255, 255))", color: "var(--token-f82457c5-8438-48a1-bcce-dde3448a0d3a, rgb(255, 255, 255))", flexShrink: "0" }}><g color="var(--token-f82457c5-8438-48a1-bcce-dde3448a0d3a, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;icon/inverse&quot;} */" weight="light"><path d="M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z"></path></g></svg>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[65vh] sm:h-[70vh] flex mt-[5vw]'>
        <img className='w-full sm:w-[calc(100%/3)] h-full object-cover' src="https://framerusercontent.com/images/mrMYZ6v6P76zyaAFLruqtYRSFs.webp?scale-down-to=512" alt="" />
        <img className='hidden sm:block w-[calc(100%/3)] h-full object-cover' src="https://framerusercontent.com/images/21qMiYf2FW9nVVf0ZXWy7lsKvo.webp?scale-down-to=512" alt="" />
        <img className='hidden sm:block w-[calc(100%/3)] h-full object-cover' src="https://framerusercontent.com/images/kuzAFRgtBYB5PgqonomJBKMMwo.webp?scale-down-to=512" alt="" />
      </div>
    </div>
  )
}

export default Section2