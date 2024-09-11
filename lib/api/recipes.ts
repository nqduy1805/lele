'use server';
import { sql } from '@vercel/postgres';
import {RecipeTable} from '@/lib/definitions/recipes';

export async function fetch3Data() {
    try {
      let data;
        data = await sql<RecipeTable>`
        SELECT
        *
        FROM recipes
        limit 3;
    `;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoice.');
    }
  }
  export async function fetchByCategoryId(id: string) {
    try {
      let data;
      if(id=="all"){
         data = await sql<RecipeTable>`
        SELECT
        *
        FROM recipes
         limit 9;
      `;
  
      }else{
         data = await sql<RecipeTable>`
          SELECT
          *
          FROM recipes
          WHERE category_id = ${id} limit 9;
        `;
      }
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoice.');
    }
  }