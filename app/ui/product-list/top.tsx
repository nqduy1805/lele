import Image from 'next/image';
import Link from 'next/link';
  const products2 = [
    { title: 'Dairy & Eggs', href:"/category/dairy-eggs",image:"/product/dairy-and-eggs-category-image.webp", descript: 'Freshly sourced from grass-fed cows and free-range hens for optimal nutrition.'},
    { title: 'Meat & Poultry', href:"/category/meat-poultry",image:"/product/meat-and-poultry-category-image.webp", descript: 'Raised humanely without antibiotics or hormones for superior taste and quality.'},
    { title: 'Snacks & Pantry', href:"/category/snacks-pantry-staples",image:"/product/organic-snacks-and-pantry-category-image.webp", descript: 'Tasty and perfect for healthy, convenient eating and cooking every day.'},
  ];

export default async function ProductsTop() {
  return (
    <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[30px] gap-y-[30px] p-3vw grid-cols-2 md:grid-cols-3">
        {products2.map((product, idx) => {
            return (
            <div key={idx} className="relative flex items-center flex-col h-full border rounded-[10px] border-dark-beige overflow-hidden bg-white hover:bg-[#fff0]">
                <Link href={product.href}>
                <div className="bg-mango-yellow text-center py-[5px] px-[10px] absolute flex justify-center w-full">
                    <span className="text-white font-[400]">on sale!</span>
                </div>
                <div className="w-full">
                    <Image
                    src={product.image}
                    alt="logo"
                    layout="responsive" // Hoặc "intrinsic"
                    width={700} // Chiều rộng gốc của hình ảnh
                    height={500} // Chiều cao gốc của hình ảnh
                    className="w-full h-auto" // Tailwind CSS cho width 100% và height auto
                    />
                </div>
                <div className="py-[10px] px-[15px] text-center">
                    <h3 className="text-[24px] text-caribbean-blue font-normal leading-[110%] my-2.5">
                        {product.title}
                    </h3>
                    <p className="font-light mb-[10px] ">
                        {product.descript}
                    </p>
                </div>
                </Link>
                <div className="mb-[15px]">
                
                <span className="text-onyx-gray font-[400] mr-[5px] leading-[120%]">
                    $ 5.00 USD
                </span>
                <span className="text-gray  leading-[120%]">per 12 oz</span>
                </div>
                <div className="w-full mb-[15px] py-0 px-[20px]">
                <div className="flex justify-center w-full rounded-[5px] bg-mango-yellow hover:bg-onyx-gray transition-bg duration-200 leading-[1] font-[400] p-[12px]">
                    <span className="text-[#fff]">add to cart</span>
                </div>
                </div>
            </div>
            );
        })}
    </div>
  );
}