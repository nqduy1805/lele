import Form from '@/app/ui/products/edit-form';
import Breadcrumbs from '@/app/ui/products/breadcrumbs';
import { fetchProductById, fetchCategorys } from '@/lib/api/product';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [product, categorys] = await Promise.all([
    fetchProductById(id),
    fetchCategorys()
  ]);

  if (!product) {
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
      <Form product={product} categorys={categorys} />
    </main>
  );
}
