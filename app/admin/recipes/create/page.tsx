import { fetchCategorys } from '@/lib/api/product';
import Form from '@/app/ui/admin/recipes/create-form';
import Breadcrumbs from '@/app/ui/products/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
  const categorys = await fetchCategorys();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Sản phẩm', href: '/admin/recipes' },
          {
            label: 'Tạo sản phẩm',
            href: '/admin/recipes/create',
            active: true,
          },
        ]}
      />
      <Form categorys={categorys} />
    </main>
  );
}
