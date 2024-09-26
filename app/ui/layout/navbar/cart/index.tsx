import Image from 'next/image';
import {  useAppDispatch,useAppSelector } from "@/lib/redux/hooks";
import React, { useEffect } from "react";
import { setTotal ,addAllToCart} from "@/lib/redux/slice/cartSlice";
import Cart  from '@/app/ui/layout/navbar/cart/cart';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { getCarts } from '@/lib/api/carts';
import {checkAuthen} from '@/lib/helper/checkAuthen';

export default function Page() {
  const dispatch = useAppDispatch();
  const { totalQuantity } = useAppSelector((state) => state.cart);
  const loadProducts = async () => {
      const data = await getCarts();
      dispatch(addAllToCart(data));
  };
  const authen = checkAuthen();

  useEffect(() => {
    if(authen){
      loadProducts();
      dispatch(setTotal());
    }
  }, [authen]);
  const [isVisible, setIsVisible] = useState(false);
  const toggleCart = () => {
    setIsVisible(!isVisible);
  };
    return (
      <div className="self-center">
        <div onClick={toggleCart} className="flex font-normal p-5" role="button" aria-haspopup="dialog" aria-label="Open empty cart" data-node-type="commerce-cart-open-link" >
          <ShoppingCartIcon className="w-[25px] h-[25px] text-mango-yellow" strokeWidth={2} />
          <div className="bg-mango-yellow rounded-[9px] h-[18px] leading-[18px] min-w-[18px] text-center text-light-beige font-medium text-[11px] ml-[5px]">{totalQuantity}</div>
        </div>
        {isVisible && <Cart onClick={toggleCart} />}
      </div>
    );
  }
  