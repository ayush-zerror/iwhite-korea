import Contact from '@/components/contact/Contact'
import React, { useEffect } from 'react'

const index = () => {
  useEffect(()=>{
    document.title = 'Contact - The Original Korean Skin Care - Your Daily Skin Care Partner'
  },[])
  return (
    <>
    <Contact/>
    </>
  )
}

export default index