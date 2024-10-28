import React from 'react'
import Section2 from './Section2'
import Section3 from './Section3'
import Social from './Social'
import Section1Over from './Section1Over'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div className='relative pointer-events-none'>
      <Section1Over/>
      <Section2/>
      <Section3/>
      <Social/>
      <Footer/>
    </div>
  )
}

export default Home