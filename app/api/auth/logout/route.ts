import { NextResponse } from 'next/server';
import JwtProvider from '@/lib/model/jwt-provider'
import { verifyRefreshToken,decodeToken } from '@/lib/model/jwt';
import { JWTPayload } from '@/lib/definitions/auth';

export async function POST(request: Request) {
    try {
        const {refreshToken} = await request.json();
        if(!refreshToken){
            return NextResponse.json({status: 401, message: 'Refresh Token Failed' });
        }
        const validToken = await verifyRefreshToken(refreshToken);
        if (validToken) {   
            const authorization = request.headers.get('authorization') as string;       
            const  {id,name,username} =  decodeToken(authorization) as JWTPayload;
            const jwtProvider = new JwtProvider({id,name,username});
            const { token:newAuthorization, refreshToken:newRefreshToken } = jwtProvider.generate()
            const response = NextResponse.json({status: 200, message: 'Refresh Token Success' });
            response.headers.set('Authorization', newAuthorization);
            response.headers.set('Refreshtoken', newRefreshToken); 
            return response;
        }
        return NextResponse.json({status: 402, message: 'Refresh Token Failed' });
    } catch (error) {
        return NextResponse.json({ status: 403, message: 'Refresh Token Failed' }, { status: 500 });
    }
  }