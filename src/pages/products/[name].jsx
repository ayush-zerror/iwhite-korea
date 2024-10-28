import React, { useEffect, useState } from 'react';
import Products from '@/components/products/Products';
import Navbar from '@/components/navbar/Navbar';
import ProductsContainer from '@/components/products/ProductsContainer';
import { useRouter } from 'next/router';
import Footer from '@/components/footer/Footer';

const Index = () => {
  const router = useRouter();
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (router.query.name) {
      const productCategory = router.query.name.split("-").join("");
      setCategory(productCategory);
    }
  }, [router.query.name]);
  return (
    <div className='relative'>
      <Navbar color={"black"} bg={"bg-[#FDF9EE]"}/>
      <Products>
        {category !== "" ? <ProductsContainer category={category} /> :"loading..."}
      </Products>
      <Footer/>
    </div>
  );
};

export default Index;
