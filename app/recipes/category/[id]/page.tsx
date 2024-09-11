
import Category  from '@/app/ui/recipes/category';
import Products  from '@/app/ui/product-list/recipes';


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <main>
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[0] gap-y-[0] p-2vw lg:grid-cols-[1fr_3fr] pb-[3vw]">
            <Category/>
            <Products id={id}/>
        </div>
        
    </main>
  );
}