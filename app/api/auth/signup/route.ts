import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import type { userSignup } from '@/lib/definitions/auth';
import bcrypt from 'bcrypt';


  async function signup(user: userSignup) {
    try {
      const {name,username, password} = user;
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await sql.query(
        'INSERT INTO users (name,username,password) VALUES ($1, $2, $3) ON CONFLICT (id) DO NOTHING RETURNING id',
        [name,username, hashedPassword]
      );
      return { status: 200, message: "success" } ;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }
export async function POST(request: Request) {
    try {
    const {inter,user} = await request.json();
    let reponse = { status: 201,error: 'Có lỗi xảy ra' } as object;
    switch (inter) {
      case "signup":
        reponse = await signup(user);
        break;
      default:
        break;
    }
    return NextResponse.json(reponse);
  } catch (error) {
    return NextResponse.json({ error: 'Thêm sản phẩm không thành công' }, { status: 500 });
  }
};

