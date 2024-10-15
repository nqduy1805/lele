import { NextResponse } from 'next/server';
import { handler } from '@/services/middleware';
import { requestCustom } from '@/lib/definitions/auth';
import { sql } from '@vercel/postgres';
import {cart} from '@/lib/definitions/order';
  
export const POST = handler(async (request: requestCustom) =>{
  try {
    const {cart:cart,orderCreate:{totalPrice,phone,address}} = await request.json();
    const {id:user_id} = request.authen;
    const result = await sql.query(
      'INSERT INTO orders (user_id, order_details,total_price,phone,address) VALUES ($1, $2, $3,$4,$5)',
      [user_id, JSON.stringify(cart),totalPrice,phone,address]
  );
    if(result){
      const cart_ids = cart.map((item:cart) => (item.id)) ;
      const idPlaceholders = cart_ids.map((_:string, index:number) => `$${index + 1}`).join(',');
      const query = `DELETE FROM carts WHERE id IN (${idPlaceholders})`;
      sql.query(query, cart_ids);
    }    
    return NextResponse.json( { status: 200, msg:"success"  });
  } catch (error) {
    return NextResponse.json({ error: 'Thêm sản phẩm không thành công' }, { status: 500 });
  }
});
export const PATCH = handler(async (request: requestCustom) =>{
  try {
    const data = await request.json();
    const {id, quantity} = data;
    const {id:user_id} = request.authen;
    const result = await sql.query(
        'UPDATE carts SET quantity=$1 WHERE id=$2 and user_id=$3 ',
        [quantity,id,user_id]
    );

    return NextResponse.json( { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Thêm sản phẩm không thành công' }, { status: 500 });
  }
});
export const DELETE = handler(async (request: requestCustom) =>{
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id') as string;
    const {id:user_id} = request.authen;
    const result = await sql.query(
        'DELETE FROM carts WHERE id = $1 and user_id=$2  ',
        [id,user_id]
    );
    return NextResponse.json( { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Thêm sản phẩm không thành công' }, { status: 500 });
  }
});
export const GET = async (request: requestCustom) =>{
//   try {
    // const order_details=[
    //     {'product_id': '123',name:"nene",quantity:1,price:200000,image_url:'/product/1.png'},
    //     {'product_id': '123',name:"nene",quantity:1,price:200000,image_url:'/product/1.png'}
    // ];
    // const result = await sql.query(
    //     'INSERT INTO orders (user_id, order_details,total_price) VALUES ($1, $2, $3)',
    //     ['410544b2-4001-4271-9855-fec4b6a6442c', JSON.stringify(order_details),20000  ]
    // );

    const mang = ["002adb24-de97-498b-80a0-3b5af35ca8fc"];

    // Tạo chuỗi cho điều kiện IN
    const idPlaceholders = mang.map((_, index) => `$${index + 1}`).join(', ');

    // Tạo câu lệnh SQL
    const query = `DELETE FROM carts WHERE id IN (${idPlaceholders})`;
    const utcDate1 = Date.now();

    // Thực thi truy vấn
    const result =  sql.query(query, mang);

    const utcDate2 = Date.now();

    return NextResponse.json( { status: 200, msg:"success" ,utcDate1,utcDate2});
//   } catch (error) {
//     return NextResponse.json({ error: 'Thêm sản phẩm thất bại' }, { status: 500 });
//   }
};
async function getCarts(user_id:string){
  const data =  await sql.query(
        ' SELECT count(id) FROM carts WHERE user_id = $1',
        [user_id]
    );
  return  { status: 200,total:data.rows[0].count };
}

async function checkout(user_id:string){
    
    
    // const result = await sql.query(
    //     'INSERT INTO carts (user_id, order_details,status,total_price,created_at) VALUES ($1, $2, $3) ON CONFLICT (user_id,product_id)  DO UPDATE SET quantity = carts.quantity + EXCLUDED.quantity',
    //     [user_id, order_details,'pending']
    // );
    return  { status: 200, message : "message sucess",user_id };
  }
  
  



