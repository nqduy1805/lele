'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './style.module.css';

const links = [
  { name: 'Home', href: '/dashboard' },
  { name: 'our story',href: '/dashboard/invoices'},
  { name: 'shop', href: '/dashboard/customers' },
  { name: "recipes", href: '/dashboard/customers' },
  { name: 'contact', href: '/dashboard/customers' },

];

export default function Menu() {
  const pathname = usePathname();
    return (
        <nav className="hidden lg:flex transition-all transform bg-light-beige float-right relative" >
          {links.map((link) => {
              return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'text-mango-yellow items-center p-5 text-xl font-normal transition-colors transition-opacity duration-200 flex hover:text-onyx-gray',{
                        'bg-sky-100 text-blue-600': pathname === link.href,
                      },
                    )}
                  >
                  <div className={`${styles.custom} bg-mango-yellow flex`}></div>
                  <p className="leading-150 hidden md:block">{link.name}</p>
                </Link>
              );
            })}
        </nav>
    );
  }
  