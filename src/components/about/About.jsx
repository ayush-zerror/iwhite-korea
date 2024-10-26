import React from 'react'
import Footer from '../footer/Footer'
import Section2 from './Section2'
import Section1Over from '../home/Section1Over'

const About = () => {
  return (
    <div className='relative pointer-events-none'>
        <Section1Over/>
        <Section2/>
        <Footer/>
    </div>
  )
}

export default About