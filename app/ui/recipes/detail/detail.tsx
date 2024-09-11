import Link from 'next/link';
import Image from 'next/image';
import { RecipeDetail } from '@/lib/definitions/recipes';


export default async function page({
    item,
  }: {
    item: RecipeDetail;
  }) {

    const ingredients = item.ingredients.split("@");
    const steps_to_follow = item.steps_to_follow.split("@");

  return (
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[45px] grid-cols-2  py-[3vw] px-[3vw]     border-b border-dark-beige">
           <Image
                src={item.image_url}
                alt="logo"
                layout="responsive"
                width={600}
                height={600} 
                className="object-cover max-h-[80vh] rounded-[15px] sticky top-[75px] "
            />
            <div>
                <h1 className="text-[6rem] mb-[10px] text-left text-onyx-gray leading-[100%] font-[700]">{item.name}</h1>
                <p className="my-[20px]">{item.descript}</p>
                <div>
                    <div className="h-[1px] bg-dark-beige"></div>
                    <h3 className="text-caribbean-blue mt-[20px] mb-[10px] text-[1.5rem] font-[400] leading-[110%]">Thời gian thực hiện</h3>
                    <p className="flex flex-col">
                            {item.prep_time} phút
                    </p>
                    <div className="h-[1px] bg-dark-beige"></div>
                </div>
                <div>
                    <h3  className="text-caribbean-blue mt-[20px] mb-[10px] text-[1.5rem] font-[400] leading-[110%]">Nguyên liệu</h3>
                    <div className="mb-[10px]">
                        <ul >
                        {ingredients.map((item, idx) => {
                            return (
                                <li key={idx}>{item}</li>
                            );
                        })}
                        </ul>
                    </div>
                </div>
                <div>
                    <h3  className="text-caribbean-blue mt-[20px] mb-[10px] text-[1.5rem] font-[400] leading-[110%]">Các thực hiện</h3>
                    <div className="mb-[10px]">
                        <ul >
                        {steps_to_follow.map((item, idx) => {
                            return (
                                <li key={idx}>{idx+1}.{item}</li>
                            );
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}