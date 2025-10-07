"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function MySwiper({imagesList, spaceBetween = 10, slidesPerView=1,nameList}:{imagesList:string[], slidesPerView?:number, spaceBetween?:number,nameList?:string[]}) {

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className='w-full'
      loop
      
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >


        {imagesList.map((src,index) => <SwiperSlide key={src}>
            <img src={src} alt='' className='w-full h-[400px]' />
            <p className='text-center text-green-700 font-bold capitalize'>{nameList?.[index]}</p>
        </SwiperSlide>)}

      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ... */}
    </Swiper>
  );
};