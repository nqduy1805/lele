import Product  from '@/app/ui/product-list/product/top';

  const products2 = [
    { price: "45",priceSale:"50",title: 'Mắn ruốt', href:"/category/dairy-eggs",image:"/product/5.png", descript: 'Mắm ruốt cô Màu phơi'},
    { price: "40",title: 'Chả cá', href:"/category/meat-poultry",image:"/product/12.png", descript: 'Chả cá cô Màu nạo'},
    { price: "47",priceSale:"52",title: 'Khô mực', href:"/category/snacks-pantry-staples",image:"/product/16.png", descript: 'Khô được cô Màu phơi'},
    { price: "47",priceSale:"52",title: 'Khô mực', href:"/category/snacks-pantry-staples",image:"/product/16.png", descript: 'Khô được cô Màu phơi'},

  ];

export default async function page() {
  return (
    <div className="p-3vw  border-b border-dark-beige">
        <div className="p-[3vw] pl-[0]">
            <h3 className="text-onyx-gray font-[400] leading-[100%] text-[3rem] md:text-[4rem]">Sản phẩm tương tự</h3>
        </div>
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[3vw] gap-y-[30px] grid-cols-2 md:grid-cols-4 ">
            {/* {products2.map((product, idx) => {
                return (
                    <Product key={idx} product={product}/>
                );
            })} */}
        </div>

    </div>
    
  );
}