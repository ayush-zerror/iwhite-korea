import React, { useEffect, useState } from 'react';
import Products from '@/components/products/Products';
import Navbar from '@/components/navbar/Navbar';
import ProductsContainer from '@/components/products/ProductsContainer';
import { useRouter } from 'next/router';

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
      <Navbar />
      <Products>
        {category !== "" ? <ProductsContainer category={category} /> :"loading..."}
      </Products>
    </div>
  );
};

export default Index;
