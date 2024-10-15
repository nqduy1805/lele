
import { sql } from '@vercel/postgres';
import {
  orderTable,
} from '@/lib/definitions/order';
const ITEMS_PER_PAGE = 6;
export async function fetchOrdersPages(query: string) {
    try {
      const count = await sql`SELECT COUNT(*)
      FROM orders
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
    const data = await sql<orderTable>`
      SELECT *
      FROM orders
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categorys.');
  }
}
