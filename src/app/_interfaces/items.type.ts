import { ProductType } from "./products";

export type ItemType = {
  count: number;
  _id: string;
  price: number;
  product: ProductType;
};

export type CartResponseType = {
  numOfCartItems: number;
  products: ItemType[];
  totalCartPrice: number;
  cartId: string;
};
