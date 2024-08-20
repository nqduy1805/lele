import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import {  formatCurrency } from '@/lib/utils';

import { ProductsTable } from '@/lib/definitions';

export default async function Top({
    product,
  }: {
    product: ProductsTable;
  }) {

    let hidden_sale = product.price_sale ? false : true; 
    return (
    <div className="relative flex items-center flex-col h-full border rounded-[10px] border-dark-beige overflow-hidden bg-white hover:bg-[#fff0]">
        <Link className=" h-full "  href={product.id}>
        <div className="w-full">
            <Image
            src={product.image_url}
            alt="logo"
            layout="responsive" // Hoặc "intrinsic"
            width={700} // Chiều rộng gốc của hình ảnh
            height={500} // Chiều cao gốc của hình ảnh
            className="w-full h-auto" // Tailwind CSS cho width 100% và height auto
            />
        </div>
        <div className="py-[10px] px-[15px] text-center">
            <h3 className="text-[24px] text-caribbean-blue font-normal leading-[110%] my-2.5">
                {product.name}
            </h3>
            <p className="font-light mb-[10px] ">
                {product.descript}
            </p>
        </div>
        </Link>
        <div className="mb-[15px]">
          <span className="mr-[5px] text-[12px] leading-[150%] line-through">
              {formatCurrency(product.price_sale) ? formatCurrency(product.price) : ""}
          </span>
          <span className="text-onyx-gray font-[400] mr-[5px] leading-[120%]">
            {formatCurrency(product.price_sale) ??formatCurrency(product.price) }
          </span>
          <span className="text-gray  leading-[120%]">/kg</span>
        </div>
        <div className="w-full mb-[15px] py-0 px-[20px]">
        <div className="flex justify-center w-full rounded-[5px] bg-mango-yellow hover:bg-onyx-gray transition-bg duration-200 leading-[1] font-[400] p-[12px]">
            <span className="text-[#fff]">add to cart</span>
        </div>
        </div>
    </div>
  );
}