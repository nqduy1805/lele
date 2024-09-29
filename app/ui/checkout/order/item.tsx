import Image from 'next/image';
import { Cart } from "@/lib/redux/interface";
import {  formatCurrency } from '@/lib/utils';

export default function page({
    cart,
  }: {
    cart: Cart;
  }) {
  
    return (
        <div className="flex mb-[20px]">
            <Image
                src={cart.image_url}
                alt="logo"
                width={80} 
                height={80}
                className="w-[80px] h-[80px ] rounded-[5px]" 
            />

            <div className="flex-grow ml-4 mr-4">
                <p className="text-[1.25rem] font-medium">{cart.name}</p>
                <p  className="">Số lượng: {cart.quantity}</p>
            </div>
            <div>
                {formatCurrency(cart.price)}
            </div>
        </div>
    );
  }
  