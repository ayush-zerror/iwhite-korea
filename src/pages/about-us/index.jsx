import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen relative'>
        <Navbar color={"white"} />
        <video autoPlay muted loop className='w-full h-full object-cover brightness-50' src="https://iwhitekorea.com.ph/wp-content/uploads/2021/10/Brand-Video_Logo-Seoul_Fold-9.mp4"></video>
    </div>
  )
}

export default About