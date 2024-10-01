
import { NextResponse } from 'next/server';
import { extractToken } from '@/lib/model/jwt';
import { JWTPayload } from '@/lib/definitions/auth';
import { requestCustom } from '@/lib/definitions/auth';

const middleware = async (request: requestCustom) => {

    try {
        const authorization = request.headers.get('authorization') as string;
        const validToken = extractToken(authorization);
        if (validToken) {
          const { id, username, name } = validToken as JWTPayload;
          request.authen = { id, username, name }; 
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
    const response = NextResponse.json({ message: 'Default Response' }, { status: 200 });
    response.headers.set('Authorization', "");
    return response;
}
