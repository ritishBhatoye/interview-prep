"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <div className="w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <h2 className="text-4xl font-bold">Slide 1</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <h2 className="text-4xl font-bold">Slide 2</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <h2 className="text-4xl font-bold">Slide 3</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
