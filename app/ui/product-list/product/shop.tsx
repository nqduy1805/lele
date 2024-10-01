'use client';

import Image from 'next/image';
import Link from 'next/link';
import {  formatCurrency } from '@/lib/utils';
import { addToCart } from "@/lib/redux/slice/cartSlice";
import { useDispatch } from 'react-redux';
import { ProductsTable } from '@/lib/definitions';
import { addProductToCart } from '@/services/cart';
import {checkAuthen} from '@/lib/helper/checkAuthen';
import { setCartAffterLogin } from '@/lib/model/local-cache'
import {  useRouter } from 'next/navigation';
import { clearAllGoalieToken } from '@/lib/model/save-jwt'
import { toast } from 'react-toastify';
export default function Top({
    product,
  }: {
    product: ProductsTable;
  }) {

    const dispatch = useDispatch();
    const { push } = useRouter()

     const addCartHandle =async () => {
        const cart = { product_id:product.id,quantity:1}
        const authen = checkAuthen();
        if(authen){
          const result = await addProductToCart(cart);
          dispatch(addToCart(cart));
          toast.success("Thêm sản phẩm thành công!");
        }else{
          setCartAffterLogin(JSON.stringify(cart));
          clearAllGoalieToken();
          push('/signin');
        }
    };

    let hidden_sale = product.price_sale ? false : true; 
    return (
    <div className="relative flex items-center flex-col h-full border rounded-[10px] border-dark-beige overflow-hidden bg-white hover:bg-[#fff0]">
        <Link className=" h-full "  href={"/shop/detail/"+product.id}>
        <div className="w-full">
            <Image
            src={product.image_url}
            alt="logo"
            width={700} // Chiều rộng gốc của hình ảnh
            height={500} // Chiều cao gốc của hình ảnh
            className="w-full h-auto" // Tailwind CSS cho width 100% và height auto
            loading="lazy"
            />
        </div>
        <div className="py-[10px] px-[15px] text-center">
            <h3 className="text-[24px] text-caribbean-blue font-normal leading-[110%] my-2.5">
                {product.name}
            </h3>
            <p className="font-light mb-[10px] ">
                {product.descript}
            </p>
        </div>
        </Link>
        <div className="mb-[15px]">
          <span className="mr-[5px] text-[12px] leading-[150%] line-through">
              {formatCurrency(product.price_sale) ? formatCurrency(product.price) : ""}
          </span>
          <span className="text-onyx-gray font-[400] mr-[5px] leading-[120%]">
            {formatCurrency(product.price_sale) ??formatCurrency(product.price) }
          </span>
          <span className="text-gray  leading-[120%]">/kg</span>
        </div>
        <div className="w-full mb-[15px] py-0 px-[20px]">
        <div onClick={addCartHandle} className="cursor-pointer flex justify-center w-full rounded-[5px] bg-mango-yellow hover:bg-onyx-gray transition-bg duration-200 leading-[1] font-[400] p-[12px]">
            <span className="text-[#fff]">Thêm sản phẩm</span>
        </div>
        </div>
    </div>
  );
}