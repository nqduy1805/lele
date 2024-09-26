import { httpDel, httpGet, httpPost, httpPut } from './_req'
import {cart} from '@/lib/definitions/order';
  

export const addProductToCart = (cart:cart) => {
  return httpPost(`/api/cart`, {
    params: cart
  })
}

