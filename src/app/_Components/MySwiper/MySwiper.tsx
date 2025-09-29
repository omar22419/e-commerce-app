"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function MySwiper({imagesList, spaceBetween = 10, slidesPerView=1}:{imagesList:string[], slidesPerView?:number, spaceBetween?:number}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className='w-full'
      loop
      
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >


        {imagesList.map(src => <SwiperSlide key={src}>
            <img src={src} alt='' className='w-full h-[400px]' />
        </SwiperSlide>)}

      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ... */}
    </Swiper>
  );
};