'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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
      const amountInCents = amount * 100;
      const created_date = new Date().toISOString().split('T')[0];
      const updated_date = new Date().toISOString().split('T')[0];
      const image_url = "/product/1.png";
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
  export async function deleteInvoice(id: string) {
    try {
        await sql`DELETE FROM products WHERE id = ${id}`;
        revalidatePath('/admin/products');
        return { message: 'Deleted Invoice.' };
      } catch (error) {
        return { message: 'Database Error: Failed to Delete Invoice.' };
      }
  }