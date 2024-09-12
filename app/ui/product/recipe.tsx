import Recipe  from '@/app/ui/product-list/product/recipes';
import { fetchRecipeForProduct } from '@/lib/api/recipes';


export default async function page({id}:{id:string}) {
  const data = await fetchRecipeForProduct(id);

  return (
    <div className="p-3vw  border-b border-dark-beige">
        <div className="p-[3vw] pl-[0]">
            <h3 className="text-onyx-gray font-[400] leading-[100%] text-[3rem] md:text-[4rem]">Công thức chế biến</h3>
        </div>
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] gap-y-[30px] p-3vw grid-cols-2 md:grid-cols-3">
            {data.map((item, idx) => {
                return (
                    <Recipe key={idx} recipe={item}/>
                );
            })}
        </div>

    </div>
    
  );
}