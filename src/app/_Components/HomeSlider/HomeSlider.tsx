import React from 'react'
import MySwiper from '../MySwiper/MySwiper'
import Image from 'next/image'

import img1 from '@images/slider-image-1.jpeg'
import img2 from '@images/slider-image-2.jpeg'
import img3 from '@images/slider-image-3.jpeg'
import blog1 from '@images/blog-img-1.jpeg'
import blog2 from '@images/blog-img-2.jpeg'

export default function HomeSlider() {
  return (
    <div className="px-10 flex">
        <MySwiper imagesList={[img1.src,img2.src,img3.src]}/>
        {/* <MySwiper imagesList={}/> */}
        <div className="w-1/4">
            <Image src={blog1} className="w-full h-[200px]" alt="blog1" />
            <Image src={blog2} className="w-full h-[200px]" alt="blog2" />
        </div>
    </div>
  )
}
