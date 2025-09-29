import { CategoryType } from "../_interfaces/products";

export async function getAllCategories():Promise<null| CategoryType[]>{
    try{
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories',{
            cache:"force-cache"
        });
        const finalRes = await res.json();
        return finalRes.data;
    }catch(error){
        console.log('Error Found')
        return null;
    }
}