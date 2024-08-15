import Product  from '@/app/ui/product-list/product/top';

  const products2 = [
    { price: "5.99",priceSale:"5.00",title: 'Dairy & Eggs', href:"/category/dairy-eggs",image:"/product/dairy-and-eggs-category-image.webp", descript: 'Freshly sourced from grass-fed cows and free-range hens for optimal nutrition.'},
    { price: "5.99",title: 'Meat & Poultry', href:"/category/meat-poultry",image:"/product/meat-and-poultry-category-image.webp", descript: 'Raised humanely without antibiotics or hormones for superior taste and quality.'},
    { price: "5.99",priceSale:"5.00",title: 'Snacks & Pantry', href:"/category/snacks-pantry-staples",image:"/product/organic-snacks-and-pantry-category-image.webp", descript: 'Tasty and perfect for healthy, convenient eating and cooking every day.'},
  ];

export default async function ProductsTop() {
  return (
    <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] gap-y-[30px] p-3vw grid-cols-2 md:grid-cols-3 ">
        {products2.map((product, idx) => {
            return (
                <Product key={idx} product={product}/>
            );
        })}
    </div>
  );
}