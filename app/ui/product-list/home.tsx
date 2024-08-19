
import Product  from '@/app/ui/product-list/product/home';

const products = [
    { title: 'Mắm trong', href:"/category/dairy-eggs",image:"/product/1.png", descript: 'Mắm được cô màu muối trong bình sugar.'},
    { title: 'Cá', href:"/category/meat-poultry",image:"/product/3.png", descript: 'Cá được cô Màu đánh bắt xa bờ đem vào.'},
    { title: 'Mắm các loại', href:"/category/grains-legumes",image:"/product/5.png", descript: 'Mắn ruốt được cô Màu tự tay bắt và làm.'},
    { title: 'Khô', href:"/category/fruits-vegetables",image:"/product/6.png", descript: 'Cá khô được cô Màu phơi ở san banh.'},
    { title: 'Chả', href:"/category/snacks-pantry-staples",image:"/product/11.png", descript: 'Chả cá Phú Yên được làm từ chả.'},
  ];
export default async function Home() {
  return (
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[30px] gap-y-[30px] p-3vw grid-cols-2  sm:grid-cols-3 lg:grid-cols-5  border-b border-solid border-dark-beige">
            {products.map((product, idx) => {
            return (
                <Product key={idx} product={product}/>
            );
            })}
        </div>
  );
}