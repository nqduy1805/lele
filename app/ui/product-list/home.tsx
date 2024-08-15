
import Product  from '@/app/ui/product-list/product/home';

const products = [
    { title: 'Dairy & Eggs', href:"/category/dairy-eggs",image:"/product/dairy-and-eggs-category-image.webp", descript: 'Freshly sourced from grass-fed cows and free-range hens for optimal nutrition.'},
    { title: 'Meat & Poultry', href:"/category/meat-poultry",image:"/product/meat-and-poultry-category-image.webp", descript: 'Raised humanely without antibiotics or hormones for superior taste and quality.'},
    { title: 'Grains & Legumes', href:"/category/grains-legumes",image:"/product/grains-and-legumes-category-image.webp", descript: 'Wholesome and packed with fiber and protein for hearty and nutritious meals.'},
    { title: 'Fruits & Vegetables', href:"/category/fruits-vegetables",image:"/product/fruits-and-vegetables-category-image.webp", descript: 'Harvested at peak ripeness for unbeatable flavor and health benefits.'},
    { title: 'Snacks & Pantry', href:"/category/snacks-pantry-staples",image:"/product/organic-snacks-and-pantry-category-image.webp", descript: 'Tasty and perfect for healthy, convenient eating and cooking every day.'},
  ];
export default async function Home() {
  return (
    <main>
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[30px] gap-y-[30px] p-3vw grid-cols-2  sm:grid-cols-3 lg:grid-cols-5  border-b border-solid border-dark-beige">
            {products.map((product, idx) => {
            return (
                <Product key={idx} product={product}/>
            );
            })}
        </div>
    </main>
  );
}