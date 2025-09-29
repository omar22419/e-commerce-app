import ProductDetails from "_/app/productDetails/[id]/page";
import { ProductCardProps } from "./ProductCard.types";
import Link from "next/link";

export default function ProductCard({product}:ProductCardProps) {
  return (
    <>
      <Link href={`/productDetails/${product.id}`}>
      
      
      <div className=" text-center bg-gray-900 rounded-3xl">
        <img src={product.imageCover} className="w-full" alt={product.title} />
        <h2>{product.title.split(" ", 2).join(" ")}</h2>
        <h5>Price: {product.priceAfterDiscount?<>
            <span className="line-through me-3 text-red-500">{product.price}</span>
            <span>{product.priceAfterDiscount}</span>
        </>: <span>{product.price}</span>}</h5>
        <p>{product.ratingsAverage} <i className="fa-solid fa-star text-yellow-400"></i></p>
      </div>
      
      </Link>
    </>
  );
}
