import { NextResponse } from 'next/server';
import { handler } from '@/services/middleware';
import { requestCustom } from '@/lib/definitions/auth';
  
export const POST = handler(async (request: requestCustom) =>{
  try {
    
    const data = await request.json();

    return NextResponse.json( { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Thêm sản phẩm không thành công' }, { status: 500 });
  }
});
