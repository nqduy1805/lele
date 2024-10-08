import Product  from '@/app/ui/product-list/product/top';
import { fetchFilteredProductsTop } from '@/lib/api/product';



export default async function ProductsTop() {
  const products = await fetchFilteredProductsTop();

  return (
    <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] gap-y-[3vw] p-3vw grid-cols-2 md:grid-cols-3 ">
        {products.map((product, idx) => {
            return (
                <Product key={idx} product={product}/>
            );
        })}
    </div>
  );
}