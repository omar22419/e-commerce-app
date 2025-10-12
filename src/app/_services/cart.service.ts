'use server'
import { getMyUserToken } from "_/utils/utils";
import { CartResponseType, ItemType } from "../_interfaces/items.type";


export async function getUserCart():Promise<CartResponseType>{

    const token = await getMyUserToken();
    

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
      headers: {
        token: token as string,
      },
      cache:"force-cache", 
      next:{tags:['getUserCart']}

    });
    const final = await res.json();
    const {
      numOfCartItems,
      data: { products, totalCartPrice },
    } = final;

    return { numOfCartItems, products, totalCartPrice };
}