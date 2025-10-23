import { ProductCardProps } from "./ProductCard.types";
import Link from "next/link";
import AddProductBtn from "../AddProductBtn/AddProductBtn";

export default function ProductCard({product}:ProductCardProps) {
  return (
    <>
      
      <div className="text-white hover:scale-95 duration-500">
      <Link href={`/productDetails/${product.id}`}>
        <img src={product.imageCover} className="w-full" alt={product.title} />
        <div className=" bg-blue-950 p-4">
            <h2 className="text-center font-bold">{product.title.split(" ", 2).join(" ")}</h2>
            <h5 className="text-orange-300 py-3 ">{product.category.name}</h5>
            <h5 >Price: {product.priceAfterDiscount?<>
                <span className="line-through me-3 text-red-500">{product.price}</span>
                <span>{product.priceAfterDiscount}</span>
            </>: <span>{product.price}</span>}</h5>
            <p className="text-xl">{product.ratingsAverage} <i className="fa-solid fa-star text-yellow-400"></i></p>
        </div>
      </Link>
          <AddProductBtn id={product.id}/>
      </div>
    </>
  );
}
