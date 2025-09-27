import { ProductType } from "./_interfaces/products";

export default async function Home() {


  async function getAllProducts():Promise<ProductType[]|null>{
        try{
            const res = await fetch('https://ecommerce.routemisr.com/api/v1/products',{
              cache:'force-cache'
            });
            const finalRes = await res.json();
            return finalRes.data;
        }catch(error){
            console.log('Erorr Found', error);
            return null;
        }
    }

    const allProducts = await getAllProducts();
    console.log(allProducts);

  return (
    <>
      <div>
        {allProducts?.map((product) => 
        <div key={product.id}>
            <img src={product.imageCover} className="w-full" alt={product.title} />
            <h2>{product.title}</h2>
            <h5>Price:{product.price}</h5>
        </div>
      )}
      </div>
    </>
  );
}
