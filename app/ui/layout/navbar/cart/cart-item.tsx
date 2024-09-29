
import Image from 'next/image';
import {  formatCurrency } from '@/lib/utils';
import { removeCart,changeItem } from "@/lib/redux/slice/cartSlice";
import { useAppDispatch,  } from "@/lib/redux/hooks";
import { Cart } from "@/lib/redux/interface";

export default function page({
    cart,
  }: {
    cart: Cart;
  }) {
    const dispatch = useAppDispatch();

    return (
        <div  className="py-[12px] grid grid-cols-[1fr_3fr_1fr] grid-rows-auto grid-flow-col gap-0 items-end  ">
            <div className="pr-[6px]">
                <Image
                src={cart.image_url}
                alt="logo"
                width={80} 
                height={80}
                className="w-full h-auto rounded-[5px]" 
            />
            </div>
            
            <div className="mx-[16px]">
                <h3 className="text-[24px] text-caribbean-blue font-normal leading-[110%] my-2.5">{cart.name}</h3>
                <p className="text-onyx-gray font-[400] leading-[120%]">{formatCurrency(cart.price)}</p>
                <p onClick={() => {
                        dispatch(removeCart(cart.id));
                      }} className="cursor-pointer text-[#b2b2b2] text-[.8em] font-[300]">remove product</p>
            </div>
            <input
                id="amount"
                name="amount"
                type="number"
                value={cart.quantity}
                onChange={(e) => {
                  if(Number(e.target.value)<=0){
                    e.target.value='1';
                  }
                    dispatch(changeItem({id:cart.id,quantity:e.target.value}));
                  }}
                step="1"
                min={1}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
            />
        </div>
    );
  }
