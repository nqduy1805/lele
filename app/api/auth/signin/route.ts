import { NextResponse } from 'next/server';
import JwtProvider from '@/lib/model/jwt-provider'
import type { User } from '@/lib/definitions';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import type { userSigin } from '@/lib/definitions/auth';

async function getUser(email: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }

async function checkUser(data: userSigin): Promise<User |null| undefined> {

    const parsedCredentials = z
    .object({ email: z.string().email(), password: z.string().min(6) })
    .safeParse(data);

    if (parsedCredentials.success) {
        const { email, password } = parsedCredentials.data;
        const user = await getUser(email);

        if (!user) return null;
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) return user;
    }
}
export async function POST(request: Request) {
    try {
        const data = await request.json();
        const user =  await checkUser(data);
        if(user){
            const jwtProvider = new JwtProvider({id:user.id,name:user.name,email:user.email});
            const { token, refreshToken } = jwtProvider.generate()
            const response = NextResponse.json({ status: 200 ,message: 'Success'});
            response.headers.set('Authorization', token);
            response.headers.set('Refreshtoken', refreshToken); 
            return response;
        }else{
            return NextResponse.json({ status: 401 ,message: 'Tên đăng nhập hoặc mật khẩu không đúng'});
        }
    } catch (error) {
        return NextResponse.json({  status: 401 , message: 'Tên đăng nhập hoặc mật khẩu không đúng' }, { status: 500 });
    }
  }