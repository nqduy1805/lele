import Image from 'next/image';
import Link from 'next/link';

const products = [
    { title: 'Dairy & Eggs', href:"/category/dairy-eggs",image:"/product/dairy-and-eggs-category-image.webp", descript: 'Freshly sourced from grass-fed cows and free-range hens for optimal nutrition.'},
    { title: 'Meat & Poultry', href:"/category/meat-poultry",image:"/product/meat-and-poultry-category-image.webp", descript: 'Raised humanely without antibiotics or hormones for superior taste and quality.'},
    { title: 'Grains & Legumes', href:"/category/grains-legumes",image:"/product/grains-and-legumes-category-image.webp", descript: 'Wholesome and packed with fiber and protein for hearty and nutritious meals.'},
    { title: 'Fruits & Vegetables', href:"/category/fruits-vegetables",image:"/product/fruits-and-vegetables-category-image.webp", descript: 'Harvested at peak ripeness for unbeatable flavor and health benefits.'},
    { title: 'Snacks & Pantry', href:"/category/snacks-pantry-staples",image:"/product/organic-snacks-and-pantry-category-image.webp", descript: 'Tasty and perfect for healthy, convenient eating and cooking every day.'},
  ];

export default async function Page() {
  return (
    <main>
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[30px] gap-y-[30px] p-3vw grid-cols-2  sm:grid-cols-3 lg:grid-cols-5">
            {products.map((product,idx) => {
              return (
                <div key={idx} className="flex flex-col justify-start items-center h-full border rounded-[10px] transition-colors duration-200 bg-white border-dark-beige relative overflow-hidden">
                <Link 
                    href={product.href}
                >
                    <div className=" w-full">
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
                        <h3 className="text-[24px] text-caribbean-blue font-normal leading-[110%] my-2.5">{product.title}</h3>
                        <p className="font-light mb-2.5">{product.descript}</p>
                    </div>
                </Link>
                <div className="pt-2.5 px-2.5 pb-3.5">
                    <Link
                    className="rounded-[5px] text-center border-2 border-mango-yellow text-mango-yellow text-center mt-0 py-2.5 px-5 text-base leading-none transition-colors duration-200 block hover:text-[#414040] hover:border-[#414040]"
                        href={product.href}
                    >
                        View Products
                    </Link>
                </div>
                </div>
                );
            })}
        </div>
    </main>
  );
}