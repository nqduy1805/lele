'use server';
import { sql } from '@vercel/postgres';
import {CategorysList } from '@/lib/definitions/categorys';

export async function fetchCategory() {
    try {
      let data;
        data = await sql<CategorysList>`
        SELECT
        *
        FROM categorys
    `;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoice.');
    }
  }
  export async function fetchRecipeCategory() {
    try {
      let data;
        data = await sql<CategorysList>`
        SELECT
        *
        FROM category_recipe
    `;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoice.');
    }
  }
  