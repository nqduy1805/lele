'use client';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';


interface Category {
  name: string;
  href:string;
}
export default function Category({
    category,
  }: {
    category: Category;
  }) {
    const [isVisible, setIsVisible] = useState(false);
    const toggleBenefit = () => {
        setIsVisible(!isVisible);
    };
    const pathname = usePathname();

    return (
        <div className="">
            <Link
            href={category.href}
            className={clsx(
                'px-[20px] py-[15px] pl-[30px]  flex md:justify-center md:rounded-[10px] text-[1rem] lg:text-[1.25rem] font-[400] text-onyx-gray',{
                  'bg-light-green ': pathname === category.href,
                  'bg-beige  hover:text-mango-yellow': pathname != category.href,

                },
              )}
            >
            {category.name}
            </Link>
        </div>
    );
  }
  