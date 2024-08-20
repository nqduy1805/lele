
import Breadcrumb  from '@/app/ui/product/breadcrumb';
import Detail  from '@/app/ui/product/detail';
import Similar  from '@/app/ui/product/similar';
import Recipe  from '@/app/ui/product/recipe';


export default async function Page() {
  return (
    <main>
        <div className="">
          <Breadcrumb/>
          <Detail/>
          <Similar/>
          <Recipe/>
        </div>
        
    </main>
  );
}