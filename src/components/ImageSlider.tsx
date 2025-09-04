"use client";

// useState와 useEffect를 import 합니다.
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  // ✅ 1. 클라이언트 렌더링 여부를 추적할 state를 만듭니다.
  const [isMounted, setIsMounted] = useState(false);

  // ✅ 2. 컴포넌트가 브라우저에 마운트되면 isMounted를 true로 변경합니다.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ✅ 3. isMounted가 false일 때는 아무것도 렌더링하지 않습니다.
  if (!isMounted) {
    return null; // 또는 로딩 스피너 같은 것을 보여줄 수 있습니다.
  }

  // ✅ 4. isMounted가 true가 되면 Swiper 컴포넌트를 렌더링합니다.
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="w-full rounded-lg"
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full aspect-[1/1]">
            <Image
              src={src}
              alt={`슬라이드 이미지 ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;