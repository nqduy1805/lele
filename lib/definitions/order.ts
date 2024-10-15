export type product = {
    id: string;
    name: string;
    quantity:string;
    amount:number;
    price:number;
  };

  export type cartAdd = {
    product_id:string
    quantity:number;
  };
  export type cart = {
    id:string;
    quantity:number;
    product_id:string;
    name:string;
    price:number;
    image_url:string;
  };
  export type orderTable = {
    id:string;
    user_id:number;
    status:number;
    total_price:string;
    phone:string;
    address:string;

    // created_at:string;
  }
  export type orderCreate = {
    totalPrice:number;
    phone:string;
    address:string;
  }
  interface ProductOrder {
    image_url: string;
    name: string;
    quantity: number;
    price: number;
  }
  
  export interface OrderDetail {
    id: string;
    user_id: string;
    order_details: ProductOrder[];
    status: string;
    total_price: number;
    created_at: string;
    phone: string;
    address: string;
    name: string;

  }