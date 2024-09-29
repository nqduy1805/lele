'use client';
import Image from 'next/image';
import Item  from '@/app/ui/checkout/order/item';
import Summary  from '@/app/ui/checkout/order/summary';
import React, { useEffect ,useState} from "react";
import {checkAuthen} from '@/lib/helper/checkAuthen';
import {  useAppSelector } from "@/lib/redux/hooks";

export default function page() {
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
        <div className="   flex-none w-[320px]">
        <div className="border-none border border-dark-beige rounded-lg mb-5 bg-light-green min-h-[80px]">
            <div className="bg-[#fff0] border-none border border-[#e6e6e6] flex justify-between items-baseline p-[4px] px-[20px]">
                <h3 className="text-caribbean-blue mt-5 mb-2.5 text-[1.5rem] font-normal leading-[110%]">
                    Danh sách sản phẩm
                </h3>
            </div>
            <div className="p-[20px]"> 
            {cart.map((item, idx) => {
                return (
                    <Item key={idx} cart={item} />
                 );
            })}
            </div>
        </div>
             <Summary totalPrice={totalPrice} totalCart={cart.length}/> 
        <div className="flex justify-center w-full rounded-[5px] bg-mango-yellow hover:bg-onyx-gray transition-bg duration-200 leading-[1] font-[400] p-[12px]">
            <span className="text-[#fff]">Đặt hàng</span>
        </div>
    </div>
    );
  }
  