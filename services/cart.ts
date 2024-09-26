import { httpDel, httpGet, httpPost, httpPut } from './_req'
import {cart} from '@/lib/definitions/order';
  
export const addProductToCart = (cart:cart) => {
  return httpPost(`/api/cart`,cart)
}
export const getCarts = () => {
  return httpGet(`/api/cart`, {
    params: {inter:"getCarts"}
  })
}
export const getTotalCarts = () => {
  return httpGet(`/api/cart`,{
    params: {inter:"getTotalCarts"}
  })
}
export const getCartsDetail = () => {
  return httpGet(`/api/cart`, {
    params: {inter:"getCartsDetail"}
  })
}


