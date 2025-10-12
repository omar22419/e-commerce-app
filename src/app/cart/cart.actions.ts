"use server";
import { getMyUserToken } from "_/utils/utils";
import { revalidatePath, revalidateTag } from "next/cache";

export async function addProductToCart(productId: string) {
  const token = await getMyUserToken();
  if (token) {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
      method: "post",
      body: JSON.stringify({ productId }),
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
    });
    const finalRes = await res.json();
    console.log(finalRes);
    if (finalRes.status === "success") {
      // revalidatePath('/cart')
      revalidateTag("getUserCart");
      return finalRes.numOfCartItems;
    } else {
      return false;
    }
  }
}

export async function removeProductFromCart(id:string){
    const token = await getMyUserToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
        method:'Delete',
        headers:{
            token: token as string
        }
    })
    const final = await res.json();
    console.log('final',final);
    if(final.status=='success'){
        revalidatePath('/cart');
        return final.numOfCartItems;
    }else{
        return null;
    }
}

export async function changeCount(id:string,count:number){
    const token = await getMyUserToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
        method:'put',
        headers:{
            token:token as string,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({count})
    })
    const final = await res.json();
    console.log('change final response',final);
    if(final.status=='success'){
        revalidatePath('/cart');
        return final.numOfCartItems;
    }
    else{
        return null;
    }
}