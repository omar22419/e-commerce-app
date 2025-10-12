'use client'
import { Button } from '_/components/ui/button'
import React, { useContext } from 'react'
import { changeCount } from './cart.actions'
import { toast } from 'sonner';
import { CartContext } from '../context/CartContext';

export default function ChangeCountBtn({isIncrement=false, id, newCount}:{isIncrement?:boolean; id:string; newCount:number}) {
    const {updateCartCount} = useContext(CartContext);
    async function handleChangeCount(){
        const output = await changeCount(id,newCount);
        if(output===null){
            toast.error("couldn't remove item, please try again");
        }else{
            toast.success('Product removed successfully');
            updateCartCount(output);
        }
    }
    return (
        <Button onClick={handleChangeCount} disabled={newCount==0} className="cursor-pointer bg-green-600 hover:bg-green-800">
            {isIncrement?'+':'-'}
        </Button>
    )
}
