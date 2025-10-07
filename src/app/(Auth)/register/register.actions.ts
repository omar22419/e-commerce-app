'use server'

import { cookies } from "next/headers";
import { RegisterFormType } from "./register.types";

export async function handleRegister (data:RegisterFormType){
    try{
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,{
      method:'post',
      body: JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    })

    const finalResp = await res.json();
    console.log('finalResp', finalResp);
    if (finalResp.message==='success'){
        const cookie = await cookies();
        cookie.set('user-token', finalResp.token,{
            httpOnly:true,
            sameSite:'strict',
            maxAge:60*60*24
        })
        return true;
    }
    else{
        return finalResp.message;
    }
    }catch(error){
      console.log('Error Exist', error)
    }

}