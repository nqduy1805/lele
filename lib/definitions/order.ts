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