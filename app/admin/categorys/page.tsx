import Pagination from '@/app/ui/admin/categorys/pagination';
import Search from '@/app/ui//search';
import Table from '@/app/ui/admin/categorys/table';
import { CreateInvoice } from '@/app/ui/products/buttons';
import { lusitana } from '@/app/ui/fonts';
import { ProductsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCategorysPages } from '@/lib/api/admin/categorys';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categorys',
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

  const totalPages = await fetchCategorysPages(query);  
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Categorys</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search products..." />
        <CreateInvoice />
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
