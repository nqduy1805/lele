import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
// import { invoices, customers, revenue, users } from '../lib/placeholder-data';

const client = await db.connect();
async function seedProducts() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL ,
        amount INT NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        price_sale INT,
        is_sale VARCHAR(255),
        category_id uuid NOT NULL, 
        created_date DATE,
        updated_date DATE,
        descript TEXT NOT NULL,
        FOREIGN KEY (category_id) REFERENCES categorys(id)
      );
    `;
}

async function seedRecipes() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS recipes (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL,
      descript TEXT NOT NULL,
      prep_time INT NOT NULL,
      ingredients TEXT NOT NULL,
      steps_to_follow TEXT NOT NULL,
      created_date DATE,
      updated_date DATE
    );
  `;
}
async function seedProductRecipe() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS product_recipe (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      product_id uuid NOT NULL,
      recipe_id uuid NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(id),
      FOREIGN KEY (recipe_id) REFERENCES recipes(id),
      UNIQUE (product_id, recipe_id)
    );
  `;
}
async function seedCategory() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS categorys (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        tag VARCHAR(255) 
      );
    `;
}
// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;

  // const insertedUsers = await Promise.all(
  //   users.map(async (user) => {
  //     const hashedPassword = await bcrypt.hash(user.password, 10);
  //     return client.sql`
  //       INSERT INTO users (id, name, email, password)
  //       VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
  //       ON CONFLICT (id) DO NOTHING;
  //     `;
  //   }),
  // );

//   return insertedUsers;
// }

// async function seedInvoices() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       customer_id UUID NOT NULL,
//       amount INT NOT NULL,
//       status VARCHAR(255) NOT NULL,
//       date DATE NOT NULL
//     );
//   `;

//   const insertedInvoices = await Promise.all(
//     invoices.map(
//       (invoice) => client.sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedInvoices;
// }

// async function seedCustomers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS customers (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       image_url VARCHAR(255) NOT NULL
//     );
//   `;

//   const insertedCustomers = await Promise.all(
//     customers.map(
//       (customer) => client.sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedCustomers;
// }

// async function seedRevenue() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS revenue (
//       month VARCHAR(4) NOT NULL UNIQUE,
//       revenue INT NOT NULL
//     );
//   `;

//   const insertedRevenue = await Promise.all(
//     revenue.map(
//       (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedRevenue;
// }
// const categorys = [
//   { name: 'Mắm trong',tag:'mam-trong'},
//   { name: 'Cá',tag:'ca'},
//   { name: 'Mắm các loại',tag:'mam-cac-loai'},
//   { name: 'Khô',tag:'kho'},
//   { name: 'Chả',tag:'cha'}
// ];
// await Promise.all(
//   categorys.map(async (user) => {
//     return client.sql`
//       INSERT INTO categorys (name, tag)
//       VALUES (${user.name}, ${user.tag})
//     `;
//   }),
// );
export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {

    await client.sql`BEGIN`;
    // await seedCategory();
    // await seedProducts();
    // await seedRecipes();
    await seedProductRecipe();
    await client.sql`COMMIT`;
    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
