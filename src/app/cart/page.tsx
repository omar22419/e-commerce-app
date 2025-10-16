import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "_/components/ui/table";
import React from "react";
import { Button } from "_/components/ui/button";
import { Input } from "_/components/ui/input";
import { CartResponseType, ItemType } from "../_interfaces/items.type";
import { getUserCart } from "../_services/cart.service";
import RemoveItemBtn from "./RemoveItemBtn";
import ChangeCountBtn from "./ChangeCountBtn";
import RemoveAllItemsBtn from "./RemoveAllItemsBtn";
import Link from "next/link";

export default async function CartPage() {
  async function getUserCartt(): Promise<CartResponseType> {
    const res = await getUserCart();
    return res;
  }
  const { numOfCartItems, products, totalCartPrice } = await getUserCartt();
  return (
    <>
      <div className="w-3/4 mx-auto">
        <h1 className="text-center text-5xl font-bold">User Cart</h1>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Items</TableHead>
              <TableHead className="w-[10px]">Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody >
          {products.map((product: ItemType) => (
            <>            
                <TableRow key={product._id}>
                  <TableCell className="font-medium">
                    <div className="flex">
                      <div className="grid grid-cols-1 mx-2">
                        <img
                          src={`${product.product.imageCover}`}
                          className="w-[90px] h-[90px]"
                          alt={product.product.title}
                        />
                      </div>

                      <div className="grid-cols-11">
                        <h1 className="font-bold text-xl">
                          {product.product.brand.name}
                        </h1>
                        <h2 className="font-bold text-orange-600">
                          {product.product.title.split(" ", 7).join(" ")}
                        </h2>
                        <p className="text-xl">
                          {product.product.ratingsAverage}{" "}
                          <i className="fa-solid fa-star text-yellow-400"></i>
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.price} $</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-center gap-1">
                        <ChangeCountBtn isIncrement id={product.product.id} newCount={product.count + 1}/>
                        <Input value={product.count} className="p-2 w-8 h-8" />
                        <ChangeCountBtn id={product.product.id} newCount={product.count - 1 }/>
                      </div>
                      <RemoveItemBtn id={product.product.id}/>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    ${product.price * product.count}
                  </TableCell>
                </TableRow>
            </>
          ))}
          </TableBody>
        </Table>
        <div className="flex flex-col items-end ">
          <h2 className="font-black">
            You will pay: <span className="font-bold">{totalCartPrice}$</span>
          </h2>
          <h2 className="font-black">
            Number Of iItems:{" "}
            <span className="font-bold">{numOfCartItems}</span>
          </h2>
          <div className="flex gap-3">
            <Link href={'/cart/payment'}>
              <Button className="cursor-pointer bg-green-600 hover:bg-green-800">
                Pay
              </Button>
            </Link>
            <RemoveAllItemsBtn/>
          </div>
        </div>
      </div>
    </>
  );
}
