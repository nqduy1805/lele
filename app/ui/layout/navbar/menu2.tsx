'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './style.module.css';
import Image from 'next/image';
import { navLinks  } from '@/lib/placeholder-data';

const linkSocial = [
    { name: "phone", href: '/dashboard/customers', icon:"/nav/social/phone-icon.svg"},
    { name: 'mail', href: '/dashboard/customers' ,icon:"/nav/social/mail-icon.png"},
    { name: 'instagram',href: '/dashboard/invoices',icon:"/nav/social/instagram-icon.svg"},
    { name: 'x', href: '/dashboard/customers' ,icon:"/nav/social/x-logo.svg"},
  
  ];
  

export default function Menu2({toggleMenu}:{toggleMenu: () => void}) {
  const pathname = usePathname();
    return (
        <div onClick={toggleMenu} className="h-[7031.31px] w-full absolute top-full left-0 right-0 overflow-hidden">
            <nav className="bg-light-beige border-b border-onyx-gray rounded-bl-[10px] rounded-br-[10px] overflow-visible" >
                {navLinks.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                        'flex items-center px-8 py-5 border-b border-dark-beige  text-xl font-normal transition-colors duration-200 transition-opacity',{
                            'bg-mango-yellow text-light-beige': pathname === link.href,
                            'text-onyx-gray': pathname !== link.href
                        },
                        )}
                    >
                    <div className={`${styles.custom} `}></div>
                    <p className="">{link.name}</p>
                    </Link>
                );
                })}
                <div className="flex justify-between px-8 py-5 ">
                    {linkSocial.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                            'text-sm p-[5px] rounded-[5px] hover:bg-onyx-gray transition-colors duration-200',{
                                '': pathname === link.href
                            },
                            )}
                        >
                            <Image
                                // className="h-[15px] "
                                src={link.icon}
                                width={21}
                                height={14}
                                alt="card"
                                loading="lazy"
                                />
                        </Link>
                    );
                    })}
                </div>

            </nav>
        </div>

    );
  }
  