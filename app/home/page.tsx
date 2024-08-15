
import Image from 'next/image';
import Link from 'next/link';
import ProductsTop  from '@/app/ui/product-list/top';
import Contact  from '@/app/ui/home/contact';
import Recipes  from '@/app/ui/home/recipes';
import ProductsHome from '@/app/ui/product-list/home';
import Marquee from '@/app/ui/home/marquee';
import Benefit  from '@/app/ui/home/benefit';


export default async function Page() {
  return (
    <main>
        <ProductsHome/>
        <div className="grid  grid-rows-[auto] gap-x-[0px] gap-y-[0px] border-b border-dark-beige  sm:grid-cols-1 lg:grid-cols-[1fr_2fr] ">
            <div className="p-[3vw] bg-dark-beige min-h-[80px] flex justify-center flex-col">
                <h1 className="leading-[100%] mb-[10px] font-[400] text-onyx-gray text-[3rem] md:text-[4rem]   ">
                    this week’s top picks
                </h1>
            </div>
            <ProductsTop/>
        </div>
        <div className="grid grid-rows-[auto] gap-x-[0px] gap-y-[0px] border-b border-dark-beige sm:grid-cols-1 lg:grid-cols-[2fr_1fr]">
            <div className="p-3vw">
                <ProductsTop />
                <Link
                    className="font-[400] rounded-[5px] text-center border-2 border-mango-yellow text-mango-yellow text-center mt-0 py-2.5 px-5 text-base leading-none transition-colors duration-200 block hover:text-[#414040] hover:border-[#414040]"
                    href="/"
                >
                    see all products
                </Link>
            </div>
            <div className="row-start-1 lg:col-start-2 p-[3vw] bg-dark-beige min-h-[80px] flex justify-center flex-col">
                <h1 className="leading-[100%] mb-[10px] font-[400] text-onyx-gray text-[3rem] md:text-[4rem]   ">
                    this week’s top picks
                </h1>
            </div>
        </div>
        <Benefit/>
        <Marquee/>
        <Recipes/>    
        <Contact/>
    </main>
  );
}