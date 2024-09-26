'use server';
import { sql } from '@vercel/postgres';
import {
  cart
  } from '@/lib/definitions/order';
  
  export async function addProductToCart({product_id,quantity}:cart) {
    // console.log(session?.user);

    // try {
    //    await sql.query(
    //         'INSERT INTO carts (user_id, product_id, quantity) VALUES ($1, $2, $3)',
    //         [user_id, product_id, quantity]
    //     );
    //     return {status:1 }
    //   } catch (error) {
    //     console.error('Database Error:', error);
    //     throw new Error('Failed.');
    //   }
}
export async function getCarts(
) {

  // try {
  //   const data =  await sql.query(
  //     ' SELECT * FROM carts WHERE user_id = $1',
  //     [session?.user?.id]
  // );
  //   return data.rows;
  // } catch (error) {
  //   console.error('Database Error:', error);
  //   throw new Error('Failed to fetch invoices.');
  // }
}
