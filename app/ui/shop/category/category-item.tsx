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
            <Link
            href={category.href}
            className={clsx(
                'px-[20px] py-[15px] pl-[30px]  flex md:justify-center md:rounded-[10px] text-[1rem] lg:text-[1.25rem] font-[400] ',{
                'bg-mango-yellow text-light-beige': pathname === category.href,
                'bg-beige text-onyx-gray hover:text-mango-yellow': pathname != category.href,
                },
              )}
            >
            {category.name}
            </Link>
    );
  }
  