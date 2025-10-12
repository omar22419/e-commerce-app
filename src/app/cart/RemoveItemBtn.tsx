'use client'
import { Button } from '_/components/ui/button'
import React, { useContext } from 'react'
import { removeProductFromCart } from './cart.actions';
import { toast } from 'sonner';
import { CartContext } from '../context/CartContext';

export default function RemoveItemBtn({id}:{id:string}) {
    const {updateCartCount} = useContext(CartContext);

    async function handlRemoveItem(){    
        const output = await removeProductFromCart(id);
        if(output===null){
            toast.error("couldn't remove item, please try again");
        }else{
            toast.success('Product removed successfully');
            updateCartCount(output);
        }
  }
    return (
        <Button onClick={handlRemoveItem} className="cursor-pointer bg-red-600 hover:bg-red-700">RemoveAll</Button>
  )
}
