'use client';
import BenefitItem  from '@/app/ui/home/benefit/benefit-item';

const benefits = [
    {stt:1,title:'You care about your health',descript:"Organic foods are free from synthetic pesticides, herbicides, and genetically modified organisms (GMOs), making them a healthier choice for you and your family. They are also often higher in nutrients such as vitamins, minerals, and antioxidants."},
    {stt:2,title:'you care about the environment',descript:"Organic farming practices prioritize soil health, biodiversity, and water conservation. By choosing organic, you're supporting farming methods that reduce pollution, conserve water, and promote sustainable agriculture for future generations."},
    {stt:3,title:'you care about animals',descript:"Organic farming standards include requirements for humane treatment of animals, such as access to outdoor spaces and a diet free from antibiotics and growth hormones. By choosing organic meat, dairy, and eggs, you're supporting animal welfare and ethical farming."},
    {stt:4,title:'you support your community',descript:"Many organic farms are small, family-owned operations that contribute to the local economy and community. By choosing organic, you're supporting local farmers and businesses, fostering a stronger connection between consumers and the food they eat."},
  ];
export default function benefit() {
  
    return (
      <div className="flex relative flex-col">
        <div className="p-[3vw]">
            <h2 className="text-[4rem] font-[400] mb-[10px]">why go organic?</h2>
        </div>
        <div className="p-3vw grid auto-cols-fr grid-rows-[auto] gap-x-[30px] grid-cols-2 md:grid-cols-4  place-items-start place-items-center">
            {benefits.map((benefit, idx) => {
                    return (
                        <BenefitItem key={idx} benefit={benefit}/>
                    );
                })}
        </div>
      </div>
    );
  }
  