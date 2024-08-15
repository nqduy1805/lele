import Product  from '@/app/ui/product-list/product/recipe';

  const products2 = [
    { title: 'Dairy & Eggs', href:"/category/dairy-eggs",image:"/product/dairy-and-eggs-category-image.webp", descript: 'Freshly sourced from grass-fed cows and free-range hens for optimal nutrition.'},
    { title: 'Meat & Poultry', href:"/category/meat-poultry",image:"/product/meat-and-poultry-category-image.webp", descript: 'Raised humanely without antibiotics or hormones for superior taste and quality.'},
    { title: 'Lentil and Vegetable Soup', href:"/category/snacks-pantry-staples",image:"/product/organic-snacks-and-pantry-category-image.webp", descript: 'This soup is not only delicious but packed with fiber, protein, and vitamins, making it a comforting and nutritious meal option.'},
  ];

export default async function ProductsRecipe() {
  return (
    <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] gap-y-[30px] p-3vw grid-cols-2 md:grid-cols-3">
        {products2.map((product, idx) => {
            return (
                <Product key={idx} product={product}/>
            );
        })}
    </div>
  );
}