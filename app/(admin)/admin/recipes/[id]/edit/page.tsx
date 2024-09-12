import Form from '@/app/ui/admin/recipes/edit-form';
import Breadcrumbs from '@/app/ui/products/breadcrumbs';
import { fetchRecipeById, fetchCategorys } from '@/lib/api/recipes';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [recipe, categorys] = await Promise.all([
    fetchRecipeById(id),
    fetchCategorys()
  ]);

  if (!recipe) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'products', href: '/dashboard/products' },
          {
            label: 'Edit Invoice',
            href: `/admin/products/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form recipe={recipe} categorys={categorys} />
    </main>
  );
}
