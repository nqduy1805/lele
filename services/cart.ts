import { httpDel, httpGet, httpPost, httpPut,httpPatch } from './_req'
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
export const updateCart = (id:string,quantity:number) => {
  return httpPatch(`/api/cart`, {id,quantity})
}
export const deleteCart = (id:string) => {
  return httpDel(`/api/cart`,{params: {id} } )
}



