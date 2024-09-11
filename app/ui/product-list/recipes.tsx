import Recipe  from '@/app/ui/product-list/product/recipes';
import { fetchByCategoryId } from '@/lib/api/recipes';


export default async function ProductsTop({id}:{id:string}) {
  const data = await fetchByCategoryId(id);

  return (
    <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] gap-y-[30px] p-3vw grid-cols-2 md:grid-cols-3 ">
      {data.map((item, idx) => {
          return (
            <Recipe key={idx} recipe={item}/>
          );
      })}
    </div>
  );
}