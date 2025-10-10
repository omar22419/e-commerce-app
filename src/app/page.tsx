import CategoriesSlider from "./_Components/CategoriesSlider/CategoriesSlider";
import HomeSlider from "./_Components/HomeSlider/HomeSlider";
import ProductCard from "./_Components/ProductCard/ProductCard";
import { getAllProducts } from "./_services/products.service";


export default async function Home() {


    const allProducts = await getAllProducts();
    // console.log(allProducts);

  return (
    <>
      <HomeSlider/>
      <CategoriesSlider/>

      <div className="md:grid grid-cols-4 gap-6 w-3/4 my-9 mx-auto">
        {allProducts?.map(product => 
        <ProductCard key={product.id} product={product}/>
        )}
        
      </div>
    </>
  );
}
