import Pagination from '@/app/ui/admin/recipes/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/admin/recipes/table';
import { CreateItem } from '@/app/ui/admin/recipes/buttons';
import { lusitana } from '@/app/ui/fonts';
import { ProductsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchPages } from '@/lib/api/admin/recipes';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>products</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search products..." />
        <CreateItem />
      </div>
      <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
