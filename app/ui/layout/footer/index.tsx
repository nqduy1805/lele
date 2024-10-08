'use client';


import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { navLinks  } from '@/lib/placeholder-data';

  
  const footers2 = [
    { name:"Danh mục sản phẩm",href:"/home"},
    { name:"Sản phẩm đơn",href:"/home"},
    { name:"Danh mục công thức",href:"/home"},
    { name:"Công thức đơn",href:"/home"},
  ];

  const footers = [
    { title:"template pages",footerList:navLinks},
    { title:"e-com & cms pages",footerList:footers2},
  ];
  const linkSocial = [
    { name: "phone", href: '/dashboard/customers', icon:"/nav/social/phone-icon.svg"},
    { name: 'mail', href: '/dashboard/customers' ,icon:"/nav/social/mail-icon.png"},
    { name: 'instagram',href: '/dashboard/invoices',icon:"/nav/social/instagram-icon.svg"},
    { name: 'x', href: '/dashboard/customers' ,icon:"/nav/social/x-logo.svg"},
  
  ];
  

export default function Footer() {

  return (
    <div className="bg-beige">
    <div className="pt-[2vw] pr-[3vw] pb-[3vw] pl-[3vw] grid sm:grid-cols-1 md:grid-cols-2 grid-rows-auto gap-x-[3vw] gap-y-[3vw] items-end  ">
        <div className="self-center sm:place-self-center md:justify-self-start text-center">
            <div className="flex justify-center item-center w-full">
            <Image
                src="/nav/logo.png"
                width={50}
                height={50}
                alt="logo"
            />
            </div>
            <Link
                className="text-left text-[2rem] md:text-[5rem] font-bold leading-[100%] text-light-onyx-gray"
                href="/a/a"
            >
            CÔ MÀU
            </Link>
            <div className="text-[1.25rem] font-light">
            SEAFOOD PHU YEN
            </div>
            <div className="flex justify-center items-start pt-5 pb-0 ">
                {linkSocial.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="rounded-[5px] mr-[5px] p-[5px] transition-colors duration-200 hover:bg-onyx-gray"
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
        </div>
        <div className="grid grid-cols-2 grid-rows-auto gap-4">
            {footers.map((footer,idx) => {
                return (
                    <div key={idx} className={clsx(
                        'self-start justify-self-center',{
                        },
                        )}>
                        <h3 className="text-caribbean-blue mt-5 mb-2.5 text-[1.5rem] font-normal leading-[110%] ">{footer.title}</h3>
                        <div className="flex flex-col ">
                        {footer.footerList.map((item,i) => {
                            return (
                                <Link
                                key={i}
                                    className="mb-2 text-[1.25rem] font-normal transition-colors duration-200 text-mango-yellow hover:text-onyx-gray"
                                    href="/a/a"
                                >
                                    {item.name}
                                </Link>
                                );
                        })}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
    <div className="bg-[#414040] p-[1vw] px-[3vw]">
        <div className="grid grid-rows-[auto] grid-cols-1 gap-y-[16px] md:grid-cols-3  items-end text-light-beige">
            <p className="self-start justify-self-center md:justify-self-start">
                <span>Được tạo bởi </span>
            <Link 
                className="text-mango-yellow hover:text-[#dfe6b3]"
                href="/"
            >
                CÔ MÀU
            </Link>
            </p>
            <p className="self-start justify-self-center">Bản quyền thuộc về Cô Màu</p>
            <p className="self-start justify-self-center md:justify-self-end ">   Powered by Cô Màu       </p>
        </div>
    </div>
    </div>
  );
}
