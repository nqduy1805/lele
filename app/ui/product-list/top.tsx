import Product  from '@/app/ui/product-list/product/top';

  const products2 = [
    { price: "45",priceSale:"50",title: 'Mắn ruốt', href:"/category/dairy-eggs",image:"/product/5.png", descript: 'Mắm ruốt cô Màu phơi'},
    { price: "40",title: 'Chả cá', href:"/category/meat-poultry",image:"/product/12.png", descript: 'Chả cá cô Màu nạo'},
    { price: "47",priceSale:"52",title: 'Khô mực', href:"/category/snacks-pantry-staples",image:"/product/16.png", descript: 'Khô được cô Màu phơi'},
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