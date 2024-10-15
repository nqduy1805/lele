import { httpDel, httpGet, httpPost, httpPut,httpPatch } from './../_req'

export const getOrderDetail = (orderId:String) => {
  return httpGet(`/api/admin/order`, {
    params: {inter:"getOrderDetail",orderId}
  })
}




