import Product  from '@/app/ui/product-list/product/top';
import { fetchProductsSimilar } from '@/lib/api/product';


export default async function page({id,category_id}:{id:string,category_id:String}) {
  const products = await fetchProductsSimilar(id,category_id);

  return (
    <div className="p-3vw  border-b border-dark-beige">
        <div className="p-[3vw] pl-[0]">
            <h3 className="text-onyx-gray font-[400] leading-[100%] text-[3rem] md:text-[4rem]">Sản phẩm tương tự</h3>
        </div>
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] gap-y-[30px] grid-cols-2 md:grid-cols-4 ">
            {products.map((product, idx) => {
                return (
                    <Product key={idx} product={product}/>
                );
            })}
        </div>

    </div>
    
  );
}