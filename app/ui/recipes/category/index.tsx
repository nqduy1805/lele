'use client';
import CategoryItem  from '@/app/ui/recipes/category/category-item';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import clsx from 'clsx';
import { CategorysList } from '@/lib/definitions/categorys';
export default function page({ categorys }: { categorys: CategorysList[] }) {
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const toggleCategory = () => {
    setIsCategoryVisible(!isCategoryVisible);
  };
  return (
    <div className="  sticky top-[0] md:relative z-10 md:pt-[3vw] md:pl-[3vw]">
        <div onClick={toggleCategory} className=" md:hidden cursor-pointer flex relative py-[20px] px-[30px] bg-dark-beige font-[400] text-[20px]">
            <div className="  ">select category</div>
            <ChevronDownIcon  className="absolute top-0 bottom-0 right-0 w-[1em] h-[1em] m-auto mr-auto mr-[20px] font-[500] text-[24px] leading-[1]"/>
        </div>
        <div className={clsx(
                ' sticky top-[3vw] md:gap-y-[10px] flex flex-col ',{
                'hidden md:flex': !isCategoryVisible,
                },
              )}>
            {categorys.map((category, idx) => {
                    return (
                        <CategoryItem key={idx} category={category}/>
                    );
                })}
        </div>
    </div>
    );
  }
  