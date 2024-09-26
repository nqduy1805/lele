
import Image from 'next/image';
import Link from 'next/link';
import {RecipeTable} from '@/lib/definitions/recipes';

export default async function Home({
    recipe,
  }: {
    recipe: RecipeTable;
  }) {
  return (
    <div className="bg-white flex flex-col justify-start items-center h-full border rounded-[10px] transition-colors duration-200  border-dark-beige relative overflow-hidden pb-[15px]">
        <Link className=" h-full " href={"/recipes/"+recipe.id}>
            <div className=" w-full ">
            <Image
                src={recipe.image_url}
                alt="logo"
                width={700}
                height={500} 
                className="w-full h-auto"
            />
            </div>
            <div className="py-[10px] px-[15px] text-center ">
            <h3 className="text-[24px] text-caribbean-blue font-normal leading-[110%] my-2.5">
                {recipe.name}
            </h3>
            <p className="font-light text-onyx-gray">{recipe.descript}</p>
            </div>
        </Link>
        <div className="pt-2.5 px-2.5 pb-3.5">
            <Link
            className="font-[400] rounded-[5px] text-center border-2 border-mango-yellow text-mango-yellow text-center mt-0 py-2.5 px-5 text-base leading-none transition-colors duration-200 block hover:border-light-green hover:text-light-green"
            href={"/recipes/"+recipe.id}
            >
            View Recipe
            </Link>
        </div>
    </div>
  );
}