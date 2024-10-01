import {  formatCurrency } from '@/lib/utils';

export default function page({totalPrice,totalCart}:{totalPrice:number,totalCart:number}) {
  
    return (
        <div className="border-none border border-dark-beige rounded-lg mb-5 bg-light-green min-h-[80px]">
            <div className="bg-[#fff0] border-none border border-[#e6e6e6] flex justify-between items-baseline p-[4px] px-[20px]">
                <h3 className="text-caribbean-blue mt-5 mb-2.5 text-[1.5rem]  leading-[110%] font-[500]">
                Tổng đơn hàng
                </h3>
            </div>
            <div className="p-[20px] font-[400]">  
                <div className="flex flex-row justify-between mb-2">
                    <div className="">Tổng sản phẩm</div>
                    <div className="">{totalCart}</div>
                </div>
                <div className="flex flex-row justify-between mb-2">
                    <div className="">Tổng tiền</div>
                    <div className="">{formatCurrency(totalPrice)}</div>
                </div>
            </div>
        </div>
    );
  }
  