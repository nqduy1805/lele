
'use client';

import Image from 'next/image';
import {getOrderDetail} from "@/services/admin/orders";
import React, { useEffect ,useState} from "react";
import { OrderDetail } from '@/lib/definitions/order';
import styles from './style.module.css';
import clsx from 'clsx';

export default function page({orderId}:{orderId:String}) {
    const [order, setOrder] = useState<OrderDetail>();
    const [isDelivered, setIsDelivered] = useState(false);

    useEffect(() =>  {
        getOrderDetail(orderId).then(res => {
          setOrder(res.data.data);
          if(res.data.data.status != 'pending'){
            setIsDelivered(true)
          }
        })
        .catch(err => {
            
        })
    },[orderId]);

    const handleStatusChange = () => {
      setIsDelivered(!isDelivered);
    };
  
    return (
      <>
      {order &&
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Chi tiết đơn hàng</h1>
  
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-gray-600  mb-2"> <span className="font-bold">Mã đơn hàng:</span> {order.id}</h2>
          <h2 className="text-gray-600 mb-2"> <span className="font-bold">Số điện thoại:</span> {order.phone}</h2>
          <h2 className="text-gray-600 mb-2"> <span className="font-bold">Địa chỉ giao:</span> {order.address}</h2>
          <p className="text-gray-600 mb-2"> <span className="font-bold">Tên khách hàng:</span> {order.name}</p>
          <p className="text-gray-600 mb-2"> <span className="font-bold">Trạng thái:</span> <span className={clsx('text-[1.2rem]',{"text-[#0099FF]":isDelivered	,"text-[#00FF00]":!isDelivered,})} >{isDelivered ? 'Đang giao hàng' : 'Đang xử lý'}</span></p>
          <div className="relative">
            <div className={styles.wrapper}>
              <input type="checkbox" checked={isDelivered}
              onChange={handleStatusChange} name="checkbox" className={styles.switch}/>
            </div>
          </div>
          
          <p className="text-gray-600 mb-2"> <span className="font-bold">Ngày đặt hàng:</span> {new Date(order.created_at).toLocaleDateString()}</p>
  
          <h3 className="text-xl font-semibold mt-6 mb-4">Danh sách sản phẩm</h3>
          <div className="space-y-4">
            {order.order_details.map((item, index) => (
              <div key={index} className="flex items-center border-b border-gray-200 pb-4">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-gray-600">Price: {item.price.toLocaleString()} VND</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Tổng tiền: {order.total_price.toLocaleString()} VND</h3>
          </div>
        </div>
      </div>
}
      </>
    );
  }