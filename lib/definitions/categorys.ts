export type CategorysTable = {
    id: string;
    name: string;
    descript:string;
  };
export type ProductForm = {
    id: string;
    name: string;
    image_url: string;
    price: number;
    price_sale:number;
    amount:number;
    is_sale:string;
    category_id:string;
    updated_date:string;
    created_date:string;
    descript:string;
  };