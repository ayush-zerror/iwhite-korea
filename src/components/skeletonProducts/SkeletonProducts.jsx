import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonProducts = () => {
  return (
    <div className="w-full sm:w-[75%] min-h-screen py-10 pt-32 sm:pt-40 px-3 sm:px-0 sm:pr-11 flex flex-col sm:flex-row sm:items-start gap-10 flex-wrap">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="relative w-full sm:w-[30%] mb-8 flex flex-col">
          {/* Skeleton for Image */}
          <Skeleton height="55vh" width="100%" borderRadius="8px" />
          
          {/* Skeleton for Product Name */}
          <Skeleton height={20} width="70%" style={{ marginTop: '10px' }} />
          
          {/* Skeleton for Price */}
          <Skeleton height={20} width="30%" style={{ marginTop: '10px' }} />
        </div>
      ))}
    </div>
  );
};

export default SkeletonProducts;
