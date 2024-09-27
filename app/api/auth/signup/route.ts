import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
async function getCartsDetail(user_id:string){
    const data =  await sql.query(
          ' SELECT c.quantity,p.name,p.price,p.image_url FROM carts c inner join products p on c.product_id = p.id WHERE user_id = $1',
          [user_id]
      );
    return  { status: 200,carts:data.rows };
  }
  
  
export async function POST(request: Request) {
    try {
    const {inter,mobile} = await request.json();
    let reponse = { status: 201,error: 'Có lỗi xảy ra' } as object;
    switch (inter) {
      case "signup":
         reponse = { status: 200,mobile } ;
        // reponse = await getCartsDetail(user_id);
        break;
      default:
        break;
    }
    return NextResponse.json(reponse);
  } catch (error) {
    return NextResponse.json({ error: 'Thêm sản phẩm không thành công' }, { status: 500 });
  }
};

