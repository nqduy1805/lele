import Product  from '@/app/ui/product-list/product/shop';
import { fetchProductByCategoryId } from '@/lib/data';


export default async function ProductsTop({id}:{id:string}) {
  const products = await fetchProductByCategoryId(id);

  return (
    <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] gap-y-[30px] p-3vw grid-cols-2 md:grid-cols-3 ">
      {products.map((product, idx) => {
          return (
              <Product key={idx} product={product}/>
          );
      })}
    </div>
  );
}