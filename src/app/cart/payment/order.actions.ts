'use server'
import { getMyUserToken } from "_/utils/utils";
import { revalidatePath } from "next/cache";


export type shippingAddressType={
    details:string,
    phone:string,
    city:string
} 
export async function createCashOrder(cartId:string, shippingAddress:shippingAddressType){
    const token = await getMyUserToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
        method:'post',
        body: JSON.stringify({shippingAddress}),
        headers:{
            "Content-Type":"application/json",
            token: token as string 
        }
    });
    const finalRes = await res.json();
    console.log("finalRes create order",finalRes);
    if(finalRes.status==='success'){
        revalidatePath('/cart');
        return true;
    }
    else{
        return false;
    }
}

export async function createCheckoutSession(cartId:string, shippingAddress:shippingAddressType){
    const token = await  getMyUserToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
        method:'post',
        body: JSON.stringify({shippingAddress}),
        headers:{
            "Content-Type":"application/json",
            token: token as string,
        }
    })
    const final = await res.json();
    console.log('final check seesion ', final);
    if(final.status=='success'){
        return final.session.url;
    }
}


// final check seesion  {
//   status: 'success',
//   session: {
//     url: 'https://checkout.stripe.com/c/pay/cs_test_a1cBM6yhYOfVoxPPnSBcy9VGLVS8SZUDt6oTiS1EDogWiq3V6BXT04bsfK#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blpxYHZxWjA0SHViYl1ANVYyU2pOX2hVVW9ASmZBUElpa2FLVnBUQGo2UFduUEhIXHx9aEhjanBGZ1NxZ3RKNVVtXWxcSTJ8Qzx2aWZkUEBpMXJCXVRHTkIxZzBSZmhENTUxYHVKMUpQVycpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyZjY2NjY2MnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl',
//     success_url: 'http://localhost:3000/allorders',
//     cancel_url: 'http://localhost:3000/cart'
//   }
// }