import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';
import Link from 'next/link';
import { productsContext } from '@/utils/Context';
import Image from 'next/image';

export default function Section3() {
    const products = useContext(productsContext)
    const filterProducts = products.slice(0, 7)
    return (
        <div className='w-full  pt-[10vw] pb-[4vw] px-3 sm:px-5 bg-[#FDF9EE] pointer-events-auto'>
            <Swiper
                spaceBetween={15}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                    },
                    640: {
                        slidesPerView: 3.5,
                    }
                }}
            >
                {filterProducts.map((p,i)=>(
                    <SwiperSlide key={i}>
                    <Link href={`/products/${p.category}/${p.name}`}>
                    <Image width={1000} height={1000} className='h-[42vh] sm:h-[70vh] w-full object-cover' src={p.images[0]} alt="" />
                    <h4 className='text-[4.2vw] sm:text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>{p.name}</h4>
                    <div className='flex items-center gap-1  text-[4.2vw] sm:text-[1.2vw] font-semibold text-black'>
                        <i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i>
                        <h4 className='text-[3.4vw] sm:text-[.8vw] font-[second] font-normal'>1 reviews</h4>
                    </div>
                    <h4 className='text-[4.2vw] sm:text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
                    </Link>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
