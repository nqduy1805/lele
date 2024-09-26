import { sql } from '@vercel/postgres';
import {
  ProductsTable,
  CategoryField,
  ProductForm

} from '@/lib/definitions';
const ITEMS_PER_PAGE = 6;
export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const invoices = await sql<ProductsTable>`
      SELECT *
      FROM products
      ORDER BY created_date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}
export async function fetchFilteredProductsTop(
) {

  try {
    const invoices = await sql<ProductsTable>`
      SELECT *
      FROM products
      ORDER BY created_date DESC
      LIMIT 3
    `;
    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}
export async function fetchProductsSimilar(id:string,category_id:string) {

  try {
    const data = await sql<ProductsTable>`
        SELECT
        *
        FROM products
        WHERE category_id = ${category_id} and id != ${id} limit 3;
      `;
        return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchProductByCategoryId(id: string) {
  try {
    let data;
    if(id=="all"){
       data = await sql<ProductsTable>`
      SELECT
      *
      FROM products
       limit 9;
    `;

    }else{
       data = await sql<ProductsTable>`
        SELECT
        *
        FROM products
        WHERE category_id = ${id} limit 9;
      `;
    }
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}
export async function fetchProductsPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM products
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

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
export async function fetchCategorys() {
  try {
    const data = await sql<CategoryField>`
      SELECT
        id,
        name
      FROM categorys
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

