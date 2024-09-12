
import Category  from '@/app/ui/shop/category';
import Products  from '@/app/ui/product-list/shop';
import { fetchCategory } from '@/lib/api/categorys';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const categorys = await fetchCategory();
  categorys.unshift({id:'all',name:'Tất cả'});

  return (
    <main>
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[0] gap-y-[0] p-2vw md:grid-cols-[1fr_3fr] pb-[3vw]">
            <Category  categorys={categorys}/>
            <Products id={id}/>
        </div>
        
    </main>
  );
}