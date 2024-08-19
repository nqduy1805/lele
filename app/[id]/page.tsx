
import Breadcrumb  from '@/app/ui/product/breadcrumb';
import Detail  from '@/app/ui/product/detail';


export default async function Page() {
  return (
    <main>
        <div className="">
          <Breadcrumb/>
          <Detail/>
        </div>
        
    </main>
  );
}