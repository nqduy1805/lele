import { NextResponse } from 'next/server';
import { handler } from '@/services/middleware'


export const POST = handler(
    async (request: Request) => {

        return NextResponse.json( { status: 201 });
      }
);


export const GET = handler(
    async (request: Request) => {
        
        return NextResponse.json( { status: 201 });
      }
);


