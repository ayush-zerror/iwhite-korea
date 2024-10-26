import React from 'react'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section1Over from './Section1Over'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div className='relative pointer-events-none'>
      <Section1Over/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  )
}

export default Home