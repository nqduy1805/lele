
import Image from 'next/image';
import Link from 'next/link';
interface Product {
    href: string;
    image: string;
    title: string;
    descript: string;

  }
export default async function Home({
    product,
  }: {
    product: Product;
  }) {
  return (
    <div className="bg-white flex flex-col justify-start items-center h-full border rounded-[10px] transition-colors duration-200  border-dark-beige relative overflow-hidden pb-[15px]">
        <Link className=" h-full " href={product.href}>
            <div className=" w-full ">
            <Image
                src={product.image}
                alt="logo"
                layout="responsive"
                width={700}
                height={500} 
                className="w-full h-auto"
            />
            </div>
            <div className="py-[10px] px-[15px] text-center ">
            <h3 className="text-[24px] text-caribbean-blue font-normal leading-[110%] my-2.5">
                {product.title}
            </h3>
            <p className="font-light text-onyx-gray">{product.descript}</p>
            </div>
        </Link>
        <div className="pt-2.5 px-2.5 pb-3.5">
            <Link
            className="font-[400] rounded-[5px] text-center border-2 border-mango-yellow text-mango-yellow text-center mt-0 py-2.5 px-5 text-base leading-none transition-colors duration-200 block hover:border-light-green hover:text-light-green"
            href={product.href}
            >
            View Recipe
            </Link>
        </div>
    </div>
  );
}