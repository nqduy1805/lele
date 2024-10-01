'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import CartItem  from '@/app/ui/layout/navbar/cart/cart-item';
import {  formatCurrency } from '@/lib/utils';
import React, { useEffect ,useState} from "react";
import {checkAuthen} from '@/lib/helper/checkAuthen';
import {  useAppDispatch,useAppSelector } from "@/lib/redux/hooks";
import Link from 'next/link';


interface MenuButtonProps {
    onClick: () => void;
  }
export default  function Page({ onClick }: MenuButtonProps) {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useAppSelector((state) => state.cart);
  const  authen = checkAuthen();
  useEffect(() =>  {
        const totalPriceCall: number = cart.reduce((accumulator:number, item:{price:number,quantity:number}) => {
            return accumulator + item.price*item.quantity;
        }, 0);
        setTotalPrice(totalPriceCall);
  },[cart]);

  
  
  return (
    <main>
        <div className="flex flex-row justify-center items-stretch md:flex-col md:justify-center md:items-center  z-[1001] bg-[#000c] fixed inset-0  ">
            <div className="rounded-[10px] flex flex-col w-full min-w-[320px] max-w-[480px] overflow-auto shadow-[0_5px_25px_#00000040] bg-light-beige">
                <div className="border-b border-[#e6e6e6] px-6 py-4 text-[3rem] font-[400] leading-[100%] flex justify-between items-center border-">
                    <h2>Giỏ hàng</h2>
                    <div className="font-[500] cursor-pointer"onClick={onClick}><XMarkIcon className="w-[26px] h-[26px]"strokeWidth={2}/></div>
                </div>
                <div className="border-b border-[#e6e6e6] py-[12px] px-[24px] ">
                {cart.map((item, idx) => {
                return (
                    <CartItem key={idx} cart={item} />
                 );
                })}
                </div> 
                
                <div className="border-t border-gray-300 flex-col flex-none p-4 px-6 pb-6 flex">
                    <div className="flex justify-between mb-[16px]">
                        <p className="text-onyx-gray  leading-[120%]">tổng tiền</p>
                        <p className=" text-onyx-gray  font-[400] leading-[120%]">{formatCurrency(totalPrice)}</p>
                    </div>
                    <Link
                        key="checkout"
                        href="/checkout"
                        className=""
                        onClick={onClick}
                    >
                        <div className="flex justify-center w-full rounded-[5px] bg-mango-yellow hover:bg-onyx-gray transition-bg duration-200 leading-[1] font-[400] p-[12px]">
                            <span className="text-[#fff]">Đặt hàng</span>
                        </div>
                    </Link>
                </div>
           
            </div>
        </div>
        
    </main>
  );
}
