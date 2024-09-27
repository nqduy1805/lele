import { NextResponse } from 'next/server';
import { handler } from '@/services/middleware';
import { requestCustom } from '@/lib/definitions/auth';
import { sql } from '@vercel/postgres';
import {cart} from '@/lib/definitions/order';
  
export const POST = handler(async (request: requestCustom) =>{
  try {
    const data = await request.json();
    const {id:user_id} = request.authen;
    const {product_id, quantity} = data;
    const result = await sql.query(
        'INSERT INTO carts (user_id, product_id, quantity) VALUES ($1, $2, $3) ON CONFLICT (user_id,product_id)  DO UPDATE SET quantity = carts.quantity + EXCLUDED.quantity',
        [user_id, product_id, quantity]
    );
    return NextResponse.json( { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Thêm sản phẩm không thành công' }, { status: 500 });
  }
});
export const GET = handler(async (request: requestCustom) =>{
  try {
    const {id:user_id} = request.authen;
    const { searchParams } = new URL(request.url);
    const inter = searchParams.get('inter') as string;
    let reponse = { status: 201,error: 'Có lỗi xảy ra' } as object;
    switch (inter) {
      case "getCarts":
        reponse = await getCarts(user_id);
        break;
      case "getTotalCarts":
        reponse = await getTotalCarts(user_id);
        break;
      case "getCartsDetail":
        reponse = await getCartsDetail(user_id);
        break;
      default:
        break;
    }

    return NextResponse.json( reponse);
  } catch (error) {
    return NextResponse.json({ error: 'Thêm sản phẩm thất bại' }, { status: 500 });
  }
});
async function getTotalCarts(user_id:string){
  const data =  await sql.query(
        ' SELECT count(id) FROM carts WHERE user_id = $1',
        [user_id]
    );
  return  { status: 200,total:data.rows[0].count };
}
async function getCarts(user_id:string){
  const data =  await sql.query(
        ' SELECT * FROM carts WHERE user_id = $1',
        [user_id]
    );
  return  { status: 200,carts:data.rows };
}
async function getCartsDetail(user_id:string){
  const data =  await sql.query(
        ' SELECT c.quantity,p.name,p.price,p.image_url FROM carts c inner join products p on c.product_id = p.id WHERE user_id = $1',
        [user_id]
    );
  return  { status: 200,carts:data.rows };
}



