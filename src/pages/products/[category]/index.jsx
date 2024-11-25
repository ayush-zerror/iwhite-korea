import React, { useContext, useEffect, useState } from 'react';
import Products from '@/components/products/Products';
import Navbar from '@/components/navbar/Navbar';
import ProductsContainer from '@/components/products/ProductsContainer';
import { useRouter } from 'next/router';
import Social from '@/components/home/Social';
import Footer from '@/components/footer/Footer';
import { productsContext } from '@/utils/Context';
import SkeletonLoader from '@/components/skeletonProducts/SkeletonProducts';
import SkeletonCard from '@/components/skeletonProducts/SkeletonProducts';
import SkeletonProducts from '@/components/skeletonProducts/SkeletonProducts';

const Index = () => {
  const products = useContext(productsContext);
  const router = useRouter();
  const [filterProduct, setFilterProduct] = useState([]); 
  
  useEffect(() => {
    if (router.query.category && products.length > 0) {
      const productCategory = router.query.category;
      const prodFilter = products.filter((p) => productCategory === "all products" || p.category === productCategory); // Filter by category
      setFilterProduct(prodFilter);

      document.title = `${productCategory.replace(/^\w/, (char) => char.toUpperCase())} - The Original Korean Skin Care - Your Daily Skin Care Partner`;
    }
  }, [router.query.category, products]); 

  return (
    <div className='relative'>
      <Navbar color={"black"} bg={"bg-[#FDF9EE]"} />
      <Products>
        {filterProduct.length > 0 ? (
          <ProductsContainer products={filterProduct} />
        ) : (
          <SkeletonProducts/>
        )}
      </Products>
      <Social />
      <Footer />
    </div>
  );
};

export default Index;
