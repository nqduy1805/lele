
import { sql } from '@vercel/postgres';
import {
  CategorysTable,
  ProductForm
} from '@/lib/definitions/categorys';
const ITEMS_PER_PAGE = 6;

export async function fetchProductById(id: string) {
    try {
      const data = await sql<ProductForm>`
        SELECT
        *
        FROM products
        WHERE id = ${id} limit 1;
      `;
  
      const invoice = data.rows;
  
      return invoice[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoice.');
    }
  }
export async function fetchCategorysPages(query: string) {
    try {
      const count = await sql`SELECT COUNT(*)
      FROM categorys
    `;
      const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
      return totalPages;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of invoices.');
    }
}

export async function fetchFilteredCategorys(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await sql<CategorysTable>`
      SELECT *
      FROM categorys
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categorys.');
  }
}