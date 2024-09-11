import Recipe  from '@/app/ui/product-list/product/recipe';
import { fetch3Data } from '@/lib/api/recipes';

export default async function ProductsRecipe() {
  const data = await fetch3Data();

  return (
    <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] gap-y-[30px] p-3vw grid-cols-2 md:grid-cols-3">
        {data.map((item, idx) => {
            return (
                <Recipe key={idx} recipe={item}/>
            );
        })}
    </div>
  );
}