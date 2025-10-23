'use client'
import { addProductToCart } from '_/app/cart/cart.actions';
import { CartContext } from '_/app/context/CartContext';
import { Button } from '_/components/ui/button'
import React, { useContext } from 'react'
import { toast } from 'sonner';

export default function AddProductBtn({id}:{id:string}) {
    const {updateCartCount}= useContext(CartContext);
    async function handleAddToCart(){
        const isAddedSuccess= await addProductToCart(id);
        if(isAddedSuccess){
            toast.success("Product Added Successfully",{position:'top-right'});
            updateCartCount(isAddedSuccess);
        }else{
            toast.error('Error occurred while Adding',{position:'top-right'});
        }
    }
  return (
        <Button onClick={handleAddToCart} className='w-full bg-gray-500 hover:bg-green-950 duration-500 cursor-pointer rounded-t-none'>Add to Cart +</Button>
  )
}
