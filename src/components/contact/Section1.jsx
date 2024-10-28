import React from 'react'

const Section1 = () => {
    return (
        <div className='bg-[#FDF9EE] w-full  flex flex-col-reverse sm:flex-row'>
            <div className='w-full sm:w-[32%]  border-r border-[#63575849] pt-[10vw] sm:pt-32 px-3 sm:px-10 flex flex-col justify-between'>
                <div>
                    <h2 className='text-[10vw] sm:text-[2.2vw] font-[second]'>Kista Studio</h2>
                    <h5 className='text-[4.2vw] sm:text-[1.2vw] font-[second] w-[70%] text-[#635758]'>
                        Biocostech Philippines Corporation
                        48 Kanlaon St. BIC Building, Brgy Highway Hills, Mandaluyong City, NCR, Philippines, 1550
                    </h5>
                </div>
                <div className='flex flex-col mt-[12vw] sm:mt-0'>
                    <div className='flex items-center justify-between uppercase font-[second] py-[5vw] sm:py-[1.5vw] border-b border-[#63575849] text-[#635758]'>
                        <h4>HOTLINE</h4>
                        <h5 className='text-right'>+632 8741 6469</h5>
                    </div>
                    <div className='flex items-center justify-between uppercase font-[second] py-[5vw] sm:py-[1.5vw] border-b border-[#63575849] text-[#635758]'>
                        <h4>OPPORTUNITIES</h4>
                        <h5 className='text-right'>biocostech@gmail.com</h5>
                    </div>
                    <div className='flex items-center justify-between uppercase font-[second] py-[5vw] sm:py-[1.5vw] border-b border-[#63575849] text-[#635758]'>
                        <h4>PARTNERSHIPS</h4>
                        <h5 className='text-right'>business.biocostech
                            @gmail.com</h5>
                    </div>
                </div>
            </div>
            <div className='w-full sm:w-[67%] pt-32 px-3 sm:px-14'>
                <h1 className='text-[10vw] sm:text-[6.5vw] font-[third] leading-none'>Let's <br />
                    TAlk!</h1>
                <p className='text-[4.2vw] sm:text-[1.2vw] font-[second] text-[#635758] mt-4 sm:mt-0'>Get in touch with us! Complete the form below to discuss your project. We can't wait to collaborate and bring your vision to life.</p>
                <form className='mt-[8vw] font-[fourth]'>
                    <input className='w-full py-3 px-3 border bg-transparent border-[#63575849] mb-3 outline-none' type="text" placeholder='Name' />
                    <input className='w-full py-3 px-3 border bg-transparent border-[#63575849] mb-3 outline-none' type="email" placeholder='Email' />
                    <input className='w-full py-3 px-3 border bg-transparent border-[#63575849] mb-3 outline-none' type="text" placeholder='Contact Number' />
                    <input className='w-full py-3 px-3 border bg-transparent border-[#63575849] mb-3 outline-none' type="text" placeholder='Message' />
                    <div className='hometxt capitalize text-white  mt-4 sm:mt-0 rounded-full bg-black px-8 py-3  border border-black cursor-pointer relative overflow-hidden'>
                        <div className='w-full h-full bg-black absolute top-full left-1/2 -translate-x-1/2 rounded-[50%]'></div>
                        <h2 className='relative whitespace-nowrap text-center font-semibold'>send message</h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Section1