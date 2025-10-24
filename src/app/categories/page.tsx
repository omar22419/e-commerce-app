import React from 'react'
import { getAllCategories } from '../_services/categories.service';

export default async function categories() {
    const categories = await getAllCategories();

    return (
 <>
   <div className="grid md:grid-cols-4 gap-9 md:w-3/4 md:my-9 mx-auto sm:w-full">
    {categories?.map(category=><div key={category._id}>
        <img src={category.image} alt={category.slug} className='w-full h-full' />
        <h1 className='font-bold text-2xl text-center'>{category.name}</h1>
    </div>
    )}
   </div>
   </>
)
}
