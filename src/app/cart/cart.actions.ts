'use server';

import { getMyUserToken } from "_/utils/utils";



export async function addProductToCart(productId:string){


    const token = await getMyUserToken();
    if(token){
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
                method:"post",
                body:JSON.stringify({productId}),
                headers:{
                    "Content-Type":"application/json",
                    token:token as string
                }
    });
    const finalRes=await res.json();   
    console.log(finalRes);
    if(finalRes.status==='success'){
        return true;
    }else{
        return false;
    }
}
}