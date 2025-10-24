import AddProductBtn from '_/app/_Components/AddProductBtn/AddProductBtn';
import { getProductDetails } from '_/app/_services/products.service';
import React from 'react'


type ProductDetails={
    params:{
        id:string
    }
}
export default async function ProductDetails(details:ProductDetails) {

    const productDetails = await getProductDetails(details.params.id);

    if(!productDetails){
        return;
    }

  return (
    <div className='grid grid-cols-4 items-center px-10 py-5'>
        <div className='col-span-1'>
            <img src={productDetails?.imageCover} className='w-full' alt={productDetails?.title} />
        </div>

        <div className="col-span-3 px-5">
            <h1 className='text-4xl text-center my-4'>{productDetails?.title}</h1>
            <p className='text-gray-500 text-lg'>{productDetails?.description}</p>
            <h5 className='font-bold my-1'>Price: {productDetails?.priceAfterDiscount?<>
                <span className='line-through  me-4'> {productDetails?.price}</span>
            </>:<span>{productDetails?.priceAfterDiscount}</span>}
            </h5>
            <h5 className='font-bold my-1'>Quantity: {productDetails?.quantity}</h5>
            <h5 className='font-bold my-1'>Rate: {productDetails?.ratingsAverage}</h5>
            <AddProductBtn id={productDetails.id}/>
        </div>
    </div>
  )
}
