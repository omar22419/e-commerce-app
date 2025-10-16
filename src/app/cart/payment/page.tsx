'use client'
import { Button } from '_/components/ui/button'
import { Input } from '_/components/ui/input'
import { Label } from '_/components/ui/label'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { createCashOrder, createCheckoutSession } from './order.actions'
import { getUserCart } from '_/app/_services/cart.service'
import { toast } from 'sonner'
import { CartContext } from '_/app/context/CartContext'

export default function Payment() {
  const {updateCartCount}=useContext(CartContext);
  const cityInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const detailsInput = useRef<HTMLInputElement>(null);

  const [cartId, setCartId] = useState<string|null>(null)

  async function makeCashOrder(){
    const address = {
      details: detailsInput.current?.value||'',
      phone: phoneInput.current?.value||'',
      city: cityInput.current?.value||'',
    }
    const isSuccessed = await createCashOrder(cartId||'',address);
    if(isSuccessed){
      toast.success('order created successfully');
      updateCartCount(0);
    }else{
      toast.error('Error occurred while creating order');
    }
  }

  async function makeOnlineOrder(){
    const address = {
      details: detailsInput.current?.value||'',
      phone: phoneInput.current?.value||'',
      city: cityInput.current?.value||'',
    }
    const res = await createCheckoutSession(cartId||'',address);
    if(res ==false){
      toast.error("the card has error please try again ")
    }else{
      window.open(res,"_self");
    }

  }



  async function handleGettingUserCart(){
    const res = await getUserCart();
    setCartId( res.cartId);
  }
  useEffect(function(){
    handleGettingUserCart();
  },[])
  
  return (
    <div className='w-1/2 mx-auto'>
        <div className=''>
            <Label>City</Label>
            <Input ref={cityInput}/>
        </div>
    
    
        <div className=''>
            <Label>Phone</Label>
            <Input type='tel' ref={phoneInput}/>
        </div>
    
    
        <div className=''>
            <Label>Phone</Label>
            <Input ref={detailsInput}/>
        </div>
    
      <Button onClick={makeCashOrder} className='cursor-pointer mt-4 mr-2'>Make cash order</Button>
      <Button onClick={makeOnlineOrder} className='cursor-pointer mt-4'>Make online order</Button>
    </div>
  )
}
