import Link from 'next/link';


export default async function page() {
    const breadcrumbs = [
        { name: 'home', href:"/"},
        { name: 'shop', href:"/shop"},
        { name: 'Organic Quinoa Pasta', href:"/shop"},
      ];

  return (
        <div className="flex gap-x-[5px] pt-[3vw] px-[3vw]">
            {breadcrumbs.map((breadcrumb, idx) => {
            return (
                <>
                    <Link
                    key={idx}
                    className="font-[400] text-mango-yellow  transition-colors duration-200  hover:text-[#414040] "
                    href={breadcrumb.href}
                    >
                        {breadcrumb.name}
                    </Link>
                    
                    <div>{idx != 3 ? '>' : ""}</div>
                </>
            );
            })}
        </div>
  );
}