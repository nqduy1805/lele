import { NextResponse } from 'next/server';
import JwtProvider from '@/lib/model/jwt-provider'

export async function POST(request: Request) {
    const data = await request.json();

    try {
        // const user =  data;
        // const jwtProvider = new JwtProvider(user);
        // const { token, refreshToken } = jwtProvider.generate()
        // const response = NextResponse.json({ message: 'Hello, World!' ,user});
        // response.headers.set('Authorization', token);
        // response.headers.set('Refreshtoken', refreshToken); 
        return NextResponse.json({ message: '' }, { status: 500 });
    } catch (error) {
        return NextResponse.json({ message: '' }, { status: 500 });
    }
  }