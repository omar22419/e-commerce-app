'use client'
import { Button } from '_/components/ui/button'
import React, { useContext } from 'react'
import { deleteUserCart } from './cart.actions'
import { toast } from 'sonner';
import { CartContext } from '../context/CartContext';

export default function RemoveAllItemsBtn() {
    const {updateCartCount,cartCount}=useContext(CartContext)
    async function handleRemoveCart(){
        const res = await deleteUserCart();
        console.log(res,'delete');
        if(res){
            toast.success('The Items removed successfully')
            updateCartCount(0);
        }else{
            toast.error(res);
        }
    }
    return (
    <Button onClick={handleRemoveCart} disabled={cartCount==0} variant={"destructive"} className='cursor-pointer'>Remove All</Button>
  )
}
