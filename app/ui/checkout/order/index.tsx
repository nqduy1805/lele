'use client';
import Item  from '@/app/ui/checkout/order/item';
import Summary  from '@/app/ui/checkout/order/summary';
import React, { useEffect ,useState} from "react";
import {  useAppDispatch,useAppSelector } from "@/lib/redux/hooks";
import {checkout} from "@/services/cart";
import { setFixLoading }  from '@/components/Loading';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {checkProtectPage} from '@/lib/helper/checkAuthen';
import {addAllToCart} from "@/lib/redux/slice/cartSlice";
import styles from '@/app/ui/checkout/style.module.css';

export default function page() {
    checkProtectPage();
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const { push } = useRouter()
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useAppDispatch();
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
          let validate = true;
          if(!phone){
            validate=false;
            toast.error("Bạn chưa nhập số điện thoại!");
          }
          if(!address){
            validate=false;
            toast.error("Bạn chưa nhập địa chỉ!");
          }
        if(validate){
            let orderCreate = {totalPrice,phone,address};
            checkout(cart,orderCreate).then(res => {
                push("/home");
                dispatch(addAllToCart([]));
                toast.success("Đặt hàng thành công!");
            })
            .catch(err => {
                
            })
            .finally(() => {
            // setLoading(false)
            });
        }
        setTimeout(() => {
            setFixLoading(false)
            }, 1000)

    };
  
    
    return (
        <form className="flex items-start flex-col md:flex-row max-w-[940px] ">
            <div className={`${styles.infor} md:sticky  top-[3vw] w-full`}>
                <div className="bg-beige border border-dark-beige rounded-lg mb-5 w-full">
                    <div className="bg-[#fff0] border-none border  border-[#e6e6e6] flex justify-between items-baseline p-[4px] px-[20px]">
                        <h3 className="text-caribbean-blue mt-5 mb-2.5 text-[1.5rem] font-normal leading-[110%]">
                        Thông tin giao hàng
                        </h3>
                    </div>
                    <fieldset className="p-[20px]">
                        <label className="mb-[5px] mb-1.25 font-[400]  block">Số điện thoại<span className="text-[#f87666]">*</span></label>
                        <input className="focus:outline-none focus:border-transparent outline-none appearance-none bg-[#fafafa] border border-[#ddd] rounded-sm w-full h-[38px] mb-0 p-[8px] px-[12px] leading-[20px] mb-[16x]block" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={5000}  name="email" data-name="Email" placeholder="Nhập số điện thoại" type="text"  required />
                        <label className="mb-[5px] mb-1.25 font-[400]  block">Địa chỉ<span className="text-[#f87666]">*</span></label>
                        <input className="focus:outline-none focus:border-transparent outline-noneappearance-none bg-[#fafafa] border border-[#ddd] rounded-sm w-full h-[38px] mb-0 p-[8px] px-[12px] leading-[20px] block" value={address} onChange={(e) => setAddress(e.target.value)} maxLength={5000}  name="email" data-name="Email" placeholder="Nhập địa chỉ" type="text"  required />
                    </fieldset>
                </div>
            </div>
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
    </form>
    );
  }
  