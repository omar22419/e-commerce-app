'use server'

import { CategoryType } from "../_interfaces/products";

export async function getAllBrands():Promise<CategoryType[]|null>{
    try{
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands');
        const finalRes = await res.json();
        return finalRes.data;
    }catch(error){
        console.log('Error Found', error);
        return null;
    }
}

