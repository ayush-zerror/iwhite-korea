import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';

export default function Section3() {
    return (
        <div className='w-full h-[120vh] pt-[10vw] pb-[4vw] pl-5'>
            <Swiper
                slidesPerView={3.5}
                spaceBetween={15}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='h-[85%] w-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Hydrating_Gel_Cream_01.jpg?v=1724166871&width=750" alt="" />
                    <h4 className='text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>Hydrating Gel-Cream</h4>
                    <div className='flex items-center gap-1  text-[1.2vw] font-semibold text-black'>
                        <i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i>
                        <h4 className='text-[.8vw] font-[second] font-normal'>1 reviews</h4>
                    </div>
                    <h4 className='text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[85%] w-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Cream_Cleanser_01.jpg?v=1724159456&width=750" alt="" />
                    <h4 className='text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>Hydrating Gel-Cream</h4>
                    <div className='flex items-center gap-1  text-[1.2vw] font-semibold text-black'>
                        <i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i>
                        <h4 className='text-[.8vw] font-[second] font-normal'>1 reviews</h4>
                    </div>
                    <h4 className='text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[85%] w-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Detox_Mask_01.jpg?v=1724159584&width=750" alt="" />
                    <h4 className='text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>Hydrating Gel-Cream</h4>
                    <div className='flex items-center gap-1  text-[1.2vw] font-semibold text-black'>
                        <i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i>
                        <h4 className='text-[.8vw] font-[second] font-normal'>1 reviews</h4>
                    </div>
                    <h4 className='text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[85%] w-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Eye_Cream_01.jpg?v=1724159677&width=750" alt="" />
                    <h4 className='text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>Hydrating Gel-Cream</h4>
                    <div className='flex items-center gap-1  text-[1.2vw] font-semibold text-black'>
                        <i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i>
                        <h4 className='text-[.8vw] font-[second] font-normal'>1 reviews</h4>
                    </div>
                    <h4 className='text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[85%] w-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Face_Cream_01.jpg?v=1724159737&width=750" alt="" />
                    <h4 className='text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>Hydrating Gel-Cream</h4>
                    <div className='flex items-center gap-1  text-[1.2vw] font-semibold text-black'>
                        <i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i>
                        <h4 className='text-[.8vw] font-[second] font-normal'>1 reviews</h4>
                    </div>
                    <h4 className='text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[85%] w-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Face_Oil_01_747bbb1d-8b86-4214-9b80-d08e89e4bf6f.jpg?v=1724160713&width=750" alt="" />
                    <h4 className='text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>Hydrating Gel-Cream</h4>
                    <div className='flex items-center gap-1  text-[1.2vw] font-semibold text-black'>
                        <i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i>
                        <h4 className='text-[.8vw] font-[second] font-normal'>1 reviews</h4>
                    </div>
                    <h4 className='text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[85%] w-full object-cover' src="https://www.sohoskin.com/cdn/shop/files/SS_Gua_Sha_01_9d660ff0-18b9-424b-b6de-baf7b74d478e.jpg?v=1724161232&width=750" alt="" />
                    <h4 className='text-[1.2vw] font-[second] text-[#030303] mt-[1vw]'>Hydrating Gel-Cream</h4>
                    <div className='flex items-center gap-1  text-[1.2vw] font-semibold text-black'>
                        <i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i>
                        <h4 className='text-[.8vw] font-[second] font-normal'>1 reviews</h4>
                    </div>
                    <h4 className='text-[1.2vw] font-[second] text-[#030303]'>$22</h4>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
