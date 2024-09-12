
import Category  from '@/app/ui/recipes/category';
import Recipes  from '@/app/ui/product-list/recipes';
import { fetchRecipeCategory } from '@/lib/api/categorys';


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const categorys = await fetchRecipeCategory();
  categorys.unshift({id:'all',name:'Tất cả'});

  return (
    <main>
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[0] gap-y-[0] p-2vw lg:grid-cols-[1fr_3fr] pb-[3vw]">
        <Category  categorys={categorys}/>
        <Recipes id={id}/>
        </div>
    </main>
  );
}