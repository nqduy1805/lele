'use client';
import Image from 'next/image';
import { ProductsTable } from '@/lib/definitions';
import {  formatCurrency } from '@/lib/utils';
import { addToCart, setTotal } from "@/lib/redux/slice/cartSlice";
import { useDispatch } from 'react-redux';


export default async function page({
    product,
  }: {
    product: ProductsTable;
  }) {
    const dispatch = useDispatch();
    const addCartHandle = () => {
      dispatch(
        addToCart({
          _id: product.id,
          title: product.name,
          quantity: 1,
          price: product.price,
          img: product.image_url,
        })
      );
      dispatch(setTotal());
    };
  return (
        <div className="grid auto-cols-fr grid-rows-[auto] gap-x-[45px] grid-cols-1 md:grid-cols-2  py-[3vw] px-[3vw]     border-b border-dark-beige">
           <Image
                src={product.image_url}
                alt="logo"
                layout="responsive"
                width={600}
                height={600} 
                className="object-cover max-h-[80vh] rounded-[15px] static md:sticky top-[75px] "
            />
            <div>
                <h1 className="text-[6rem] mb-[10px] text-left text-onyx-gray leading-[100%] font-[700]">{product.name}</h1>
                <p className="my-[20px]">{product.descript}</p>
                <div>
                    <div className="h-[1px] bg-dark-beige"></div>
                    <h3 className="text-caribbean-blue mt-[20px] mb-[10px] text-[1.5rem] font-[400] leading-[110%]">nutrition facts</h3>
                    <p className="flex flex-col">
                            {product.descript}
                    </p>
                    <div className="h-[1px] bg-dark-beige"></div>
                </div>
                <div>
                    <form>
                        <h3  className="text-caribbean-blue mt-[20px] mb-[10px] text-[1.5rem] font-[400] leading-[110%]">price</h3>
                        <div className="mb-[10px]">
                            {/* <div>
                                <input className="bg-[#fafafa] boder boder-[#ddd] rounded-[3px] w-[45px] h-[30px]" type="number" pattern="^[0-9]+$"   min="1" value={product.amount}/>
                                <label className="text-grey leading-[120%] ml-[10px]" >Quantity</label>
                            </div> */}
                            <span className="mr-[5px] text-[12px] leading-[150%] line-through">
                                {formatCurrency(product.price_sale)}
                            </span>
                            <span className="text-onyx-gray font-[400] mr-[5px] leading-[120%]">
                            {formatCurrency(product.price)}
                            </span>
                            <span className="text-gray  leading-[120%]">/kg</span>
                        </div>
                        <div><input  onClick={addCartHandle} className="min-w-[200px] bg-mango-yellow border border-mango-yellow border-[2px]   text-center p-[10px] leading-[1] cursor-pointer text-[#fff] rounded-[5px] w-full" type="submit" value="add to cart"/></div>
                    </form>
                </div>
            </div>
        </div>
  );
}