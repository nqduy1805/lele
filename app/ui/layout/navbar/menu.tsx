'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { navLinks  } from '@/lib/placeholder-data';

export default function Menu() {
  const pathname = usePathname();
    return (
        <nav className="hidden lg:flex transition-all transform bg-light-beige float-right relative" >
          {navLinks.map((link) => {
              return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'group text-mango-yellow items-center p-5 text-xl font-normal flex hover:text-onyx-gray transition-colors duration-200',{
                      },
                    )}
                  >
                     {/* ${styles.animateNavCircle}  */}
                  <div className={`opacity-0  group-hover:opacity-1  bg-mango-yellow rounded-full w-[5px] h-[5px] mr-[5px] `}></div>
                  <p className="leading-150 hidden md:block ">{link.name}</p>
                </Link>
              );
            })}
        </nav>
    );
  }
  