
import Breadcrumb  from '@/app/ui/product/breadcrumb';
import Detail  from '@/app/ui/product/detail';
import Similar  from '@/app/ui/product/similar';
import Recipe  from '@/app/ui/product/recipe';
import { fetchProductById, fetchCategorys } from '@/lib/data';


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [product, categorys] = await Promise.all([
    fetchProductById(id),
    fetchCategorys()
  ]);
  return (
    <main>
        <div className="">
          <Breadcrumb/>
          <Detail product={product}/>
          {/* <Similar/> */}
          <Recipe/>
        </div>
        
    </main>
  );
}