import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen flex bg-[#e2bdc018]'>
        <div className='w-[50%] h-screen pl-11 flex flex-col justify-end py-20 bg-cover bg-[url("https://www.deinde.com/cdn/shop/files/24_PH_FALL_BBM_FULLBLEED_7x6_09c7b174-67ba-4cd0-aba3-f282bf36a56d_900x.jpg?v=1727738884")]'>
            <div>
            <img className='w-[40%]' src="https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/iwhite-logo-new-07-f2809a-b79e4fa3.webp" alt="" />
            <p className='w-[70%] text-4xl text-zinc-800 font-[second] font-semibold'>
            iWhite Korea aims to prolde quality Korean skincare
            that sparks the feeling of (Cheot-Sarang) everyday.
            </p>
            </div>
          
        </div>
        <div className='w-[50%] h-screen'>
            <img className='w-full h-full object-cover' src="https://iwhitekorea.com.ph/wp-content/themes/yootheme/cache/1213x1500-copy-3-1-0199c318.webp" alt="" />
        </div>
    </div>
  )
}

export default Home