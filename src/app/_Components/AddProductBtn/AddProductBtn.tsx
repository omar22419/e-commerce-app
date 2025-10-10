'use client'
import { addProductToCart } from '_/app/cart/cart.actions';
import { Button } from '_/components/ui/button'
import React from 'react'
import { toast } from 'sonner';

export default function AddProductBtn({id}:{id:string}) {
    async function handleAddToCart(){
        const isAddedSuccess= await addProductToCart(id);
        if(isAddedSuccess){
            toast.success("Producted Added Successfull y",{position:'top-right'})
        }else{
            toast.error('Error occurred while Adding',{position:'top-right'});
        }
    }
  return (
        <Button onClick={handleAddToCart} className='w-full bg-green-800 hover:bg-green-950 duration-500 cursor-pointer rounded-t-none'>Add to Cart +</Button>
  )
}
