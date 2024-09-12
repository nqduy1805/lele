'use server';
import { sql } from '@vercel/postgres';
import {RecipeTable} from '@/lib/definitions/recipes';
import {CategorysList} from '@/lib/definitions/categorys';

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
  export async function fetchRecipeForProduct(id: string) {
    try {
      let data;
        data = await sql<RecipeTable>`
        SELECT r.* 
        FROM products p 
        inner join product_recipe pr on p.id= pr.product_id 
        inner join recipes r on r.id = pr.recipe_id 
        where p.id=${id} limit 3;`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoice.');
    }
  }
  export async function fetchByCategoryId(id: string) {
    try {
      let data;
      console.log(id);
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
      throw new Error('Failed to fetch recipes.');
    }
  }
  export async function fetchRecipeById(id: string) {
    try {
      const data = await sql<RecipeTable>`
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
  export async function fetchCategorys() {
    try {
      const data = await sql<CategorysList>`
        SELECT
          id,
          name
        FROM category_recipe
        ORDER BY name ASC
      `;
  
      const customers = data.rows;
      return customers;
    } catch (err) {
      console.error('Database Error:', err);
      throw new Error('Failed to fetch all customers.');
    }
  }
  
  