'use client';
import Item  from '@/app/ui/checkout/order/item';
import Summary  from '@/app/ui/checkout/order/summary';
import React, { useEffect ,useState} from "react";
import {checkAuthen} from '@/lib/helper/checkAuthen';
import {  useAppSelector } from "@/lib/redux/hooks";
import {checkout} from "@/services/cart";
import { setFixLoading }  from '@/components/Loading';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {checkProtectPage} from '@/lib/helper/checkAuthen';

export default function page() {
    checkProtectPage();
    const { push } = useRouter()
    const [totalPrice, setTotalPrice] = useState(0);
    const { cart } = useAppSelector((state) => state.cart);
    useEffect(() =>  {
          const totalPriceCall: number = cart.reduce((accumulator:number, item:{price:number,quantity:number}) => {
              return accumulator + item.price*item.quantity;
          }, 0);
          setTotalPrice(totalPriceCall);
    },[cart]);
    const checkoutHandle =async () => {
        setFixLoading(true, {
            title: 'Đang đặt hàng'
          })
        checkout(cart,totalPrice).then(res => {
            push("/home");
            setTimeout(() => {
            setFixLoading(false)
            }, 1000)
            toast.success("Đặt hàng thành công!");
        })
        .catch(err => {
            setTimeout(() => {
                setFixLoading(false)
                }, 1000)
        })
        .finally(() => {
          // setLoading(false)
        });

    };
  
    
    return (
        <div className=" flex-none w-full md:w-[400px] ">
        <div className="border-none border border-dark-beige rounded-lg mb-5 bg-light-green min-h-[80px]">
            <div className="bg-[#fff0] border-none border border-[#e6e6e6] flex justify-between items-baseline p-[4px] px-[20px]">
                <h3 className="text-caribbean-blue mt-5 mb-2.5 text-[1.5rem] leading-[110%] font-[500]">
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
        <div onClick={checkoutHandle} className="cursor-pointer flex justify-center w-full rounded-[5px] bg-mango-yellow hover:bg-onyx-gray transition-bg duration-200 leading-[1] font-[400] p-[12px]">
            <span className="text-[#fff]">Đặt hàng</span>
        </div>
    </div>
    );
  }
  