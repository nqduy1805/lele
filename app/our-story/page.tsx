
import OurStory  from '@/app/ui/our-story/list';
import Introduce  from '@/app/ui/our-story/introduce';
import IntroduceTop  from '@/app/ui/our-story/introduce-top';
import IntroduceBoss  from '@/app/ui/our-story/introduce-boss';


export default async function Page() {
  return (
    <main>
        <div className=" w-full ">
            <IntroduceTop/>
            <OurStory/>
            <Introduce/>
            <IntroduceBoss/>

        </div>
        
    </main>
  );
}