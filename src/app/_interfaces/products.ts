export type ProductType={
    sold:number;
    images:[];
    ratingsQuantity:number
    id:string;
    title:string;
    description:string;
    price:number;
    quantity:number;
    imageCover:string;
    category: CategoryType;
    brand:BrandType;
    priceAfterDiscount?:number;
}

export type CategoryType={
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export type BrandType={
    _id: string;
    name: string;
    slug: string;
    image: string;
}