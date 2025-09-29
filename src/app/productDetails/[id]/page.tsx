import { getProductDetails } from '_/app/_services/products.service';
import React from 'react'


type ProductDetailsProps={
    params:{id:string}
}
export default async function ProductDetails({params}:ProductDetailsProps) {

    const object = await getProductDetails(params.id);


    console.log('props',params.id);
  return (
    <div className='grid grid-cols-4 items-center px-10 py-5'>
        <div className='col-span-1'>
            <img src={object?.imageCover} className='w-full' alt={object?.title} />
        </div>

        <div className="col-span-3 px-5">
            <h1 className='font-bold text-5xl'>{object?.title}</h1>
            <p className='text-gray-500 text-lg'>{object?.description}</p>
            <h5>Price: {object?.priceAfterDiscount?<>
                <span className='line-through  me-4'> {object?.priceAfterDiscount}</span>
            </>:<span>{object?.price}</span>}
            </h5>
            <h5>Category: {object?.category.name}</h5>
            <h5>Brand: {object?.brand.name}</h5>
        </div>
    </div>
  )
}
