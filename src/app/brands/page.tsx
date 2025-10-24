import React from 'react'
import { getAllBrands } from '../_services/brands.service';

export default async function Brands() {
    const brands = await getAllBrands();
  return (
   <>
   <div className="grid md:grid-cols-4 gap-6 md:w-3/4 md:my-9 mx-auto sm:w-full">
    {brands?.map(brand=><div key={brand._id}>
        <img src={brand.image} alt={brand.slug} className='w-fit' />
        <h1 className='font-bold text-2xl text-center'>{brand.name}</h1>
    </div>
    )}
   </div>
   </>
  )
}
