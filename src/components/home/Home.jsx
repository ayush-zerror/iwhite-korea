import React from 'react'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section1Over from './Section1Over'

const Home = ({homeRef}) => {
  return (
    <div className='relative pointer-events-none'>
      <Section1Over/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default Home