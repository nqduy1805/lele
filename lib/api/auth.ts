'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import type { User } from '@/lib/definitions';
import { sql } from '@vercel/postgres';
import { auth } from '@/auth';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
export async function signInApi(
    formData:{email:string,password:string,redirect:boolean}
  ) {
    try {
      
     await signIn('credentials', formData);
     const user =  getUser(formData.email);
     return {status : 1 , user};
  
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return {status : 0 ,  error:'Username hoặc password không chính xác.'};
          default:
            return {status : 0 ,  error:'Something went wrong.'};
        }
      }
      throw  {status : 0 , error};
    }
  }
