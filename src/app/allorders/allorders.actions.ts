'use server'
import { getMyUserToken } from "_/utils/utils";
import { jwtDecode } from "jwt-decode";

export async function getMyOrders(){
    const token = await getMyUserToken();
    const {id}= await jwtDecode(token);
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
    const finalRes= await res.json();
    console.log("orders:",finalRes)
    return finalRes;
}