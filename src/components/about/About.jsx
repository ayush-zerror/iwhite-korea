import React from 'react'
import Footer from '../footer/Footer'
import Section2 from './Section2'
import Section1Over from '../home/Section1Over'
import Section3 from './Section3'
import Section4 from './Section4'
import Self from './Self'
import Social from '../home/Social'

const About = () => {
  return (
    <div className='relative pointer-events-none'>
        <Section1Over/>
        <Section2/>
        <Section3/>
        <Self/>
        <Section4/>
        <Social/>
        <Footer/>
    </div>
  )
}

export default About