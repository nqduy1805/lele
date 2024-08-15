import Link from 'next/link';
import ProductsRecipe from '@/app/ui/product-list/recipe';

export default function Recipes() {
    return (
    <div className="grid  grid-rows-[auto] gap-x-[0px] gap-y-[0px] sm:grid-cols-1 lg:grid-cols-[1fr_2fr] bg-onyx-gray">
        <div className="p-[3vw] flex justify-center flex-col items-start">
            <h2 className="text-beige text-[4rem] leading-[100%] font-[400] mb-[30px]">latest recipes from our kitchen</h2>
            <Link
            className="text-mango-yellow rounded-[5px] text-center border-2 border-mango-yellow px-[20px] py-[10px] leading-[1] font-[400] hover:border-light-green hover:text-light-green"
            href="/"
            >
                see all recipes
            </Link>
        </div>
        <ProductsRecipe/>
       
    </div>
    );
  }
  