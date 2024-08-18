
import Contact  from '@/app/ui/contact/contact';
import Form  from '@/app/ui/contact/form';


export default async function Page() {
  return (
    <main>
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] gap-y-[0] p-3vw lg:grid-cols-2 ">
            <Contact/>
            <Form/>
        </div>
        
    </main>
  );
}