'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { CategorysList } from '@/lib/definitions/categorys';

export default function Category({
    category,
  }: {
    category: CategorysList;
  }) {
    const pathname = usePathname();
    const href = `/shop/${category.id}`;
    return (
            <Link
            href={href}
            className={clsx(
                'px-[20px] py-[15px] pl-[30px]  flex md:justify-center md:rounded-[10px] text-[1rem] lg:text-[1.25rem] font-[400] ',{
                'bg-mango-yellow text-light-beige': pathname === href,
                'bg-beige text-onyx-gray hover:text-mango-yellow': pathname != href,
                },
              )}
            >
            {category.name}
            </Link>
    );
  }
  