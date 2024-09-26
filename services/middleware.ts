
import { NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import { extractToken } from '@/lib/model/jwt';
import { JWTPayload } from '@/lib/definitions/auth';
import { requestCustom } from '@/lib/definitions/auth';

const middleware = async (request: requestCustom) => {
    const authorization = request.headers.get('authorization') as string;

    try {
        const validToken = extractToken(authorization);
        if (validToken) {
          const { id, email, name } = validToken as JWTPayload;
          request.authen = { id, email, name };
          // make sure that all tokens cleard
        //   request.setHeader('Authorization', '');
        //   request.setHeader('RefreshToken', '');
          return true;
        }
      } catch (err) {
        console.log('token is INVALID');
      }

    return false;
};
export const handler = (api:Function) =>
    async (request: requestCustom) => {
    let result
    let nextInvoked = false
    const next = async () => {
    nextInvoked = true
    };
    const  checkMiddleware = await middleware(request);
    if(!checkMiddleware){
        return NextResponse.json({ status: 401,message: 'Unauthorized' });
    }
    result = await api(request, next);
    if (result) return result
    if (result instanceof NextResponse) {
        return result;
      }
    return NextResponse.json({ message: 'Default Response' }, { status: 200 });
}
