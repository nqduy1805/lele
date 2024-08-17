'use client';
import BenefitItem  from '@/app/ui/our-story/introduce-item';
const benefits = [
    {stt:"500+",title:'jobs created',descript:"these are more than mere numbers. they are the lives and livelihoods of families that have been transformed due to ours and your commitment to the natural way of life."},
    {stt:"50+",title:'community events',descript:"we host multiple community engagement events per year across towns, fostering connections, promoting healthy living, and supporting local initiatives."},
    {stt:"80%+",title:'local sourcing',descript:"over 80% of our products are sourced locally from small-scale farmers and producers within a 50-mile radius of our stores, supporting local agriculture and reducing carbon emissions associated"},
  ];
export default function page() {
  
    return (
      <div className="flex relative flex-col">
        <div className="p-[3vw]">
            <h2 className="text-[3rem] md:text-[4rem] font-[400] mb-[10px] leading-[100%]">the difference in numbers</h2>
        </div>
        <div className="p-3vw grid auto-cols-fr grid-rows-[auto] gap-x-[30px] grid-cols-1 md:grid-cols-3  place-items-start place-items-center">
            {benefits.map((benefit, idx) => {
                    return (
                        <BenefitItem key={idx} benefit={benefit}/>
                    );
                })}
        </div>
      </div>
    );
  }
  