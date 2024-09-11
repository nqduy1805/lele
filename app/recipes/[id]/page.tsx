
import Breadcrumb  from '@/app/ui/product/breadcrumb';
import Detail  from '@/app/ui/recipes/detail/detail';
import { fetchById } from '@/lib/api/admin/recipes';


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const item = await fetchById(id);

  return (
    <main>
        <div className="">
          <Breadcrumb/>
          <Detail item={item}/>
        </div>
        
    </main>
  );
}