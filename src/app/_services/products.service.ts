import { ProductType } from "../_interfaces/products";

export async function getAllProducts():Promise<ProductType[]|null>{
        try{
            const res = await fetch('https://ecommerce.routemisr.com/api/v1/products');
            // const res = await fetch('https://ecommerce.routemisr.com/api/v1/products',{
            //   cache:'force-cache'
            // });
            const finalRes = await res.json();
            return finalRes.data;
        }catch(error){
            console.log('Error Found', error);
            return null;
        }
    }


export async function getProductDetails(id:string):Promise<ProductType|null>{
        try{
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`,{
                cache:'no-cache',
            })
            const finalRes = await res.json();
            return finalRes.data;
        }catch(error){
            console.log('Error', error);
            return null;
        }
    }
