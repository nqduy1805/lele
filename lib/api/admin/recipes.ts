'use server';

import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { writeFile } from "fs/promises";
import path from "path";
import fs from 'fs';
import {
  RecipeDetail

} from '@/lib/definitions/recipes';
const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: 'Làm ơn hãy nhập tên sản phẩm.',
  }),
  category_id: z.string({
    invalid_type_error: 'Làm ơn hãy chọn danh mục sản phẩm.',
  }),
  prep_time: z.coerce
  .number()
  .gt(0, { message: 'Làm ơn hãy nhập giá giảm.' }),
  descript: z.string({
    invalid_type_error: 'Làm ơn hãy nhập mô tả.',}),
  ingredients: z.string({
    invalid_type_error: 'Làm ơn hãy nhập mô tả.',}),
  steps_to_follow: z.string({
    invalid_type_error: 'Làm ơn hãy nhập mô tả.',}),
});
export type State = {
  errors?: {
    name?: string[];
    descript?: string[];
  };
  message?: string | null;
};
import {
  RecipeTable,
} from '@/lib/definitions/recipes';

const CreateInvoice = FormSchema.omit({ id: true });
const UpdateInvoice = FormSchema.omit({ id: true });


const ITEMS_PER_PAGE = 6;
export async function fetchPages(query: string) {
    try {
      const count = await sql`SELECT COUNT(*)
      FROM recipes
    `;
      const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
      return totalPages;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of invoices.');
    }
}

export async function fetchFiltered(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await sql<RecipeTable>`
      SELECT *
      FROM recipes
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categorys.');
  }
}
export async function createItem(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
        name: formData.get('name'),
        descript: formData.get('descript'),
        prep_time: formData.get('prep_time'),
        ingredients: formData.get('ingredients'),
        steps_to_follow: formData.get('steps_to_follow'),
        category_id: formData.get('category_id'),
      });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
      const { name,category_id,descript,prep_time,ingredients,steps_to_follow} = validatedFields.data;
      const created_date = new Date().toISOString().split('T')[0];
      const file = formData.get("image")as File;

      const buffer = Buffer.from(await file.arrayBuffer());
      const image_url =  "/recipes/"+(Math.floor(Math.random() * 10))+"_"+file.name;
      await writeFile(
        path.join(process.cwd(), "public" + image_url),
        buffer
      );
      try {
        await sql`
          INSERT INTO recipes (name,category_id, image_url, descript, prep_time, ingredients, steps_to_follow, created_date)
          VALUES (${name},${category_id},${image_url},${descript},${prep_time}, ${ingredients}, ${steps_to_follow},${created_date})
        `;
      } catch (error) {
        console.log(error)
        return {
          message: 'Database Error: Failed to Create Invoice.',
        };
      }
    revalidatePath('/admin/recipes');
    redirect('/admin/recipes');

}
export async function updateItem(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = CreateInvoice.safeParse({
        name: formData.get('name'),
        descript: formData.get('descript'),
        prep_time: formData.get('prep_time'),
        ingredients: formData.get('ingredients'),
        steps_to_follow: formData.get('steps_to_follow'),
        category_id: formData.get('category_id'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }
      const { name,category_id,descript,prep_time,ingredients,steps_to_follow} = validatedFields.data;
      const updated_date = new Date().toISOString().split('T')[0];
      try {
        await sql`
          UPDATE recipes
          SET name = ${name}, category_id = ${category_id}, descript = ${descript}, prep_time = ${prep_time}, ingredients = ${ingredients}, steps_to_follow = ${steps_to_follow},  updated_date = ${updated_date}
          WHERE id = ${id}
        `;
      } catch (error) {
        return { message: 'Database Error: Failed to Update recipes.' };
      }
 
  revalidatePath('/admin/recipes');
  redirect('/admin/recipes');
}
export async function deleteItem(id: string) {
  try {
      type Product = {
        image_url: string;
      };
      const result = await sql`SELECT image_url FROM recipes WHERE id = ${id} LIMIT 1`;
      const products = result.rows  as Product[];
      if (products.length > 0) {
        const product = products[0]
        if ( fs.existsSync("public"+product.image_url)) {
          fs.unlinkSync("public"+product.image_url);  
        }
      }
      revalidatePath('/admin/recipes');
      await sql`DELETE FROM recipes WHERE id = ${id}`;
      return { message: 'Deleted Invoice.' };
    } catch (error) {
      return { message: 'Database Error: Failed to Delete Invoice.' };
    }
}
export async function fetchById(id: string) {
  try {
    const data = await sql<RecipeDetail>`
      SELECT
      *
      FROM recipes
      WHERE id = ${id} limit 1;
    `;
    const invoice = data.rows;
    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}
  