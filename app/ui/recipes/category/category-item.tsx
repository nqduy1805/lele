'use client';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { CategorysList } from '@/lib/definitions/categorys';

export default function Category({
    category,
  }: {
    category: CategorysList;
  }) {
    const [isVisible, setIsVisible] = useState(false);
    const toggleBenefit = () => {
        setIsVisible(!isVisible);
    };
    const pathname = usePathname();
    const href = `/recipes/category/${category.id}`;
    return (
        <div className="">
            <Link
            href={href}
            className={clsx(
                'px-[20px] py-[15px] pl-[30px]  flex md:justify-center md:rounded-[10px] text-[1rem] lg:text-[1.25rem] font-[400] text-onyx-gray',{
                  'bg-light-green ': pathname === href,
                  'bg-beige  hover:text-mango-yellow': pathname != href,

                },
              )}
            >
            {category.name}
            </Link>
        </div>
    );
  }
  