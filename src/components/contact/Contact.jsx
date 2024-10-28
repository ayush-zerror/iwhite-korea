import React from 'react'
import Navbar from '../navbar/Navbar'
import Section1 from './Section1'
import Social from '../home/Social'
import Footer from '../footer/Footer'

const Contact = () => {
  return (
    <div className='relative'>
      <Navbar color={"black"} bg={"bg-[#FDF9EE]"} />
      <Section1 />
      <Social/>
      <Footer/>
    </div>
  )
}

export default Contact