
import Breadcrumb  from '@/app/ui/product/breadcrumb';
import Detail  from '@/app/ui/product/detail';
import Similar  from '@/app/ui/product/similar';
import Recipe  from '@/app/ui/product/recipe';
import { fetchProductById } from '@/lib/api/product';


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await fetchProductById(id);

  return (
    <main>
        <div className="">
          <Breadcrumb/>
          <Detail product={product}/>
          <Similar category_id={product.category_id} id={product.id} />
          <Recipe id={product.id}/>
        </div>
        
    </main>
  );
}