'use client';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

const linkSocial = [
    { text:"111-111-111", name: "phone", href: '/dashboard/customers', icon:"/nav/social/phone-icon.svg"},
    { text:"support@vitaleorganics.com", name: 'mail', href: '/dashboard/customers' ,icon:"/nav/social/mail-icon.png"},
    { text:"vitale_organics", name: 'instagram',href: '/dashboard/invoices',icon:"/nav/social/instagram-icon.svg"},
    { text:"vitale.organics", name: 'x', href: '/dashboard/customers' ,icon:"/nav/social/x-logo.svg"},
]
const linkAdress = [
    { name: "phone",text:"123 Main Street, Green Haven, CA 90001", href: '/dashboard/customers', icon:"/nav/social/phone-icon.svg"},
    { name: "phone",text:"456 Orchard Avenue, Harvest Moon, NY 10001", href: '/dashboard/customers', icon:"/nav/social/phone-icon.svg"},

]
export default function page() {
  
    return (
        <div className="border border-dark-beige rounded-[10px] p-[3vw]" >
            <div>
                <h3 className="text-caribbean-blue font-[400] text-[1.5rem] leading-[110%] mt-[20px] mb-[10px]">contact</h3>
                <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[15px] gap-y-[0] grid-cols-2 ">
                {linkSocial.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                            'text-onyx-gray flex justify-start  items-center my-[10px] font-[400]',{
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
                                <div className="ml-[10px] ">{link.text}</div>
                        </Link>
                    );
                    })}
                </div>
            </div>
            <div>
                <h3 className="text-caribbean-blue font-[400] text-[1.5rem] leading-[110%] mt-[20px] mb-[10px]">store locations</h3>
                <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[15px] gap-y-[0] grid-cols-2 ">
                {linkAdress.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                            'text-onyx-gray flex justify-start  items-center my-[10px] font-[400]',{
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
                        <div className="ml-[10px] ">{link.text}</div>
                        </Link>
                    );
                    })}
                </div>
            </div>
       </div>
    );
  }
  