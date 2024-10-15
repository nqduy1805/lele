import { NextResponse } from 'next/server';
import { handler } from '@/services/middleware';
import { requestCustom } from '@/lib/definitions/auth';
import { sql } from '@vercel/postgres';
  
export const GET = handler(async (request: requestCustom) =>{
  try {
    const {id:user_id} = request.authen;
    const { searchParams } = new URL(request.url);
    const inter = searchParams.get('inter') as string;
    let reponse = { status: 201,error: 'Có lỗi xảy ra' } as object;
    switch (inter) {
      case "getOrderDetail":
        const orderId = searchParams.get('orderId') as string;
        reponse = await getOrderDetail(orderId);
        break;
      default:
        break;
    }

    return NextResponse.json( reponse);
  } catch (error) {
    return NextResponse.json({ error: 'Get thông tin thất bại' }, { status: 500 });
  }
});
async function getOrderDetail(orderId:string){
  const data =  await sql.query(
        ' SELECT o.*,u.name FROM orders o inner join users u on u.id=o.user_id  WHERE o.id = $1 limit 1',
        [orderId]
    );
  return  { status: 200,data:data.rows[0] };
}


