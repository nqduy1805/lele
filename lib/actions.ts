'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { writeFile } from "fs/promises";
import path from "path";
import fs from 'fs';

import {
  ProductsTable,
} from './definitions';
const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: 'Làm ơn hãy nhập tên sản phẩm.',
  }),
  category_id: z.string({
    invalid_type_error: 'Làm ơn hãy chọn danh mục sản phẩm.',
  }),

  amount: z.coerce
    .number()
    .gt(0, { message: 'Làm ơn hãy nhập số lượng lớn hơn 0.' }),
  is_sale: z.enum(['true', 'false'], {
    invalid_type_error: 'Hãy chọn có sale không.',
  }),
  price: z.coerce
    .number()
    .gt(0, { message: 'Làm ơn hãy nhập giá sản phẩm.' }),
  price_sale: z.coerce
    .number()
    .gt(0, { message: 'Làm ơn hãy nhập giá giảm.' }),
  descript: z.string({
    invalid_type_error: 'Làm ơn hãy nhập mô tả.',
  }),

});
export type State = {
  errors?: {
    name?: string[];
    category_id?: string[];
    amount?: string[];
    price?: string[];
    price_sale?: string[];
    is_sale?: string[];
    descript?: string[];
  };
  message?: string | null;
};

const CreateInvoice = FormSchema.omit({ id: true });
const UpdateInvoice = FormSchema.omit({ id: true });
export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
        name: formData.get('name'),
        category_id: formData.get('category_id'),
        amount: formData.get('amount'),
        price: formData.get('price'),
        price_sale: formData.get('price_sale'),
        is_sale: formData.get('is_sale'),
        descript: formData.get('descript'),
      });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
      const { name, category_id, amount, price, price_sale, is_sale, descript} = validatedFields.data;
      const created_date = new Date().toISOString().split('T')[0];
      const updated_date = new Date().toISOString().split('T')[0];
      const file = formData.get("image")as File;
      const buffer = Buffer.from(await file.arrayBuffer());
      const image_url =  "/product/"+(Math.floor(Math.random() * 10))+"_"+file.name;
      await writeFile(
        path.join(process.cwd(), "public" + image_url),
        buffer
      );
      try {
        await sql`
          INSERT INTO products (name, category_id, amount, price, price_sale, is_sale, descript,created_date,updated_date,image_url)
          VALUES (${name}, ${category_id}, ${amount}, ${price}, ${price_sale}, ${is_sale}, ${descript}, ${created_date}, ${updated_date},${image_url})
        `;
      } catch (error) {
        console.log(error)
        return {
          message: 'Database Error: Failed to Create Invoice.',
        };
      }
    revalidatePath('/admin/products');
    redirect('/admin/products');

}
export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }
 
  // const { customerId, amount, status } = validatedFields.data;
  // const amountInCents = amount * 100;
 
  // try {
  //   await sql`
  //     UPDATE invoices
  //     SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
  //     WHERE id = ${id}
  //   `;
  // } catch (error) {
  //   return { message: 'Database Error: Failed to Update Invoice.' };
  // }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
export async function updateProduct(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = CreateInvoice.safeParse({
    name: formData.get('name'),
    category_id: formData.get('category_id'),
    amount: formData.get('amount'),
    price: formData.get('price'),
    price_sale: formData.get('price_sale'),
    is_sale: formData.get('is_sale'),
    descript: formData.get('descript'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }
      const { name, category_id, amount, price, price_sale, is_sale, descript} = validatedFields.data;
      const updated_date = new Date().toISOString().split('T')[0];
      // const file = formData.get("image")as File;
      // const buffer = Buffer.from(await file.arrayBuffer());
      // const image_url =  "/product/"+(Math.floor(Math.random() * 9))+"_"+file.name;

      // const result = await sql`SELECT image_url FROM products WHERE id = ${id} LIMIT 1`;
      // const products = result.rows  as Product[];
      // if (products.length > 0) {
      //   const product = products[0]
      //   if ( fs.existsSync("public"+product.image_url)) {
      //     fs.unlinkSync("public"+product.image_url);  
      //   }
      // }

      
      // await writeFile(
      //   path.join(process.cwd(), "public" + image_url),
      //   buffer
      // );
      // type Product = {
      //   image_url: string;
      // };

      

      try {
        await sql`
          UPDATE products
          SET name = ${name}, category_id = ${category_id}, amount = ${amount}, price = ${price}, amount = ${amount}, price_sale = ${price_sale}, is_sale = ${is_sale}, descript = ${descript}, updated_date = ${updated_date}
          WHERE id = ${id}
        `;
      } catch (error) {
        return { message: 'Database Error: Failed to Update Invoice.' };
      }
 
  revalidatePath('/admin/products');
  redirect('/admin/products');
}
export async function deleteInvoice(id: string) {
  try {
      type Product = {
        image_url: string;
      };

      const result = await sql`SELECT image_url FROM products WHERE id = ${id} LIMIT 1`;
      const products = result.rows  as Product[];
      if (products.length > 0) {
        const product = products[0]
        if ( fs.existsSync("public"+product.image_url)) {
          fs.unlinkSync("public"+product.image_url);  
        }
      }
      revalidatePath('/admin/products');
      await sql`DELETE FROM products WHERE id = ${id}`;
      return { message: 'Deleted Invoice.' };
    } catch (error) {
      return { message: 'Database Error: Failed to Delete Invoice.' };
    }
}