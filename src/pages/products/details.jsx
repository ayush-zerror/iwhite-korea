import React, { useEffect } from 'react'
import ProductDetails from '@/components/products/ProductDetails'
import Footer from '@/components/footer/Footer'
import Social from '@/components/home/Social'
const details = () => {
  useEffect(()=>{
    document.title = 'Acne+ Facial Wash - The Original Korean Skin Care - Your Daily Skin Care Partner'
  },[])
  return (
    <div>
    <ProductDetails/>
    <Social/>
    <Footer/>
    </div>
  )
}

export default details