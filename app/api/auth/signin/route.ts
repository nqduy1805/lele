import { NextResponse } from 'next/server';
import JwtProvider from '@/lib/model/jwt-provider'
import type { User } from '@/lib/definitions';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import type { userSigin,JWTPayload } from '@/lib/definitions/auth';
import { auth } from '@/lib/model/firebase-admin';

async function getUser(email: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }

async function checkUser(data: userSigin): Promise<JWTPayload |null| undefined> {
    const parsedCredentials = z
    .object({ email: z.string().email(), password: z.string().min(6),provider:z.string() })
    .safeParse(data);

    if (parsedCredentials.success) {
        const { email, password, provider } = parsedCredentials.data;
        const user = await getUser(email);
        if(provider=='EMAIL_PASSWORD'){
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }
        if(provider=='GOOGLE'){
          const verifiedUser = await auth.verifyIdToken(password)
          if (verifiedUser) {
            if(!user){
              const {name,email} =verifiedUser;
              const password = '1';
              const newUser = await sql.query(
                'INSERT INTO users (name,email,password) VALUES ($1, $2, $3) ON CONFLICT (id) DO NOTHING RETURNING id',
                [name, email, password]
              );
              return {name,email:email as string ,id:newUser?.rows?.[0]?.id as string};
            }else{
              return user;
            }
            
          }
        }
        return null;
    }
}

export async function POST(request: Request) {
    // try {
        const data = await request.json();
        const user = await checkUser(data);
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
    // } catch (error) {
    //     return NextResponse.json({  status: 401 , message: 'Tên đăng nhập hoặc mật khẩu không đúng' }, { status: 500 });
    // }
  }