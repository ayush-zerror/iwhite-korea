import React, { useContext, useEffect, useState } from 'react';
import ProductDetails from '@/components/products/ProductDetails';
import Footer from '@/components/footer/Footer';
import Social from '@/components/home/Social';
import { productsContext } from '@/utils/Context';
import { useRouter } from 'next/router';
import SkeletonDetails from '@/components/skeletonProducts/SkeletonDetails';
import Navbar from '@/components/navbar/Navbar';

const Details = () => {
  const products = useContext(productsContext);
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const { name } = router.query;
    if (name) {
      const normalizedName = name.toLowerCase();
      const prod = products.find((p) => p.name.toLowerCase() === normalizedName);

      if (prod) {
        setProduct(prod);
        document.title = `${prod.name.replace(/^\w/, (char) => char.toUpperCase())} - The Original Korean Skin Care - Your Daily Skin Care Partner`;
      } else {
        console.error('Product not found');
      }
    }
  }, [router.query.name, products]);

  return (
    <div className='relative'>
      <Navbar color={"black"} bg={"bg-[#FDF9EE]"} />
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <SkeletonDetails />
      )}
      <Social />
      <Footer />
    </div>
  );
};

export default Details;
