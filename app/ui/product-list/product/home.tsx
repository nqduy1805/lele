
import Image from 'next/image';
import Link from 'next/link';
interface Product {
    href: string;
    image: string;
    name: string;
    descript: string;

  }
export default async function Home({
    product,
  }: {
    product: Product;
  }) {
  return (
    <div className="flex flex-col justify-start items-center h-full border rounded-[10px] transition-colors duration-200 bg-white border-dark-beige relative overflow-hidden">
        <Link className=" h-full "  href={product.href}>
            <div className=" w-full">
            <Image
                src={product.image}
                alt="logo"
                layout="responsive"
                width={700}
                height={500} 
                className="w-full h-auto"
            />
            </div>
            <div className="py-[10px] px-[15px] text-center">
            <h3 className="text-[24px] text-caribbean-blue font-normal leading-[110%] my-2.5">
                {product.name}
            </h3>
            <p className="font-light mb-2.5">{product.descript}</p>
            </div>
        </Link>
        <div className="pt-2.5 px-2.5 pb-3.5">
            <Link
            className="font-[400] rounded-[5px] text-center border-2 border-mango-yellow text-mango-yellow text-center mt-0 py-2.5 px-5 text-base leading-none transition-colors duration-200 block hover:text-[#414040] hover:border-[#414040]"
            href={product.href}
            >
            Xem sản phẩm
            </Link>
        </div>
    </div>
  );
}