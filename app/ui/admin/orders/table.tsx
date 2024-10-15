import { fetchFiltered } from '@/lib/api/admin/orders';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/products/buttons';
import Link from 'next/link';

export default async function productsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const data = await fetchFiltered(query, currentPage);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {data?.map((item) => (
              <div
                key={item.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{item.user_id}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                  
                  </div>
                  <div className="flex justify-end gap-2">
                    {/* <UpdateInvoice id={invoice.id} /> */}
                    {/* <DeleteInvoice id={item.id} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Tên
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Số lượng
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Số điện thoại
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Địa chỉ
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Đơn giá 
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Trạng thái
                </th>
        
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((item) => (
                <tr
                  key={item.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <Link
                      href={`order/${item.id}/detail`}
                      >
                      {item.id}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {item.total_price}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {item.phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {item.address}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {item.status}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* {item.created_at} */}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={item.id} />
                      {/* <DeleteInvoice id={item.id} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
