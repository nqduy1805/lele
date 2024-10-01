
import Product  from '@/app/ui/product-list/product/home';
import { categorys  } from '@/lib/placeholder-data';


export default async function Home() {
  return (
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] gap-y-[3vw] p-3vw grid-cols-2  sm:grid-cols-3 lg:grid-cols-5  border-b border-solid border-dark-beige">
            {categorys.map((product, idx) => {
            return (
                <Product key={idx} product={product}/>
            );
            })}
        </div>
  );
}