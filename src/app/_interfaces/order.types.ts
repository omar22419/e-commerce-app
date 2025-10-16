import { ProductType } from "./products"

export type OrderType={
    shippingAddress:ShippingAddress,
    shippingPrice:number,
    totalOrderPrice:number,
    isPaid:boolean,
    paymentMethodType:string,
    user:User,
    paidAt: string,
    id:number,
    isDelivered:boolean
    cartItems:ProductType[]
}

export type ShippingAddress={
    details: string,
    city: string,
    phone: string
}

export type User= {
    _id: string,
    name: string,
    email: string,
    phone: string
}

