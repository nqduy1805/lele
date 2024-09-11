'use client';

import { CategoryField } from '@/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createItem, State } from '@/lib/api/admin/recipes';
import { useActionState } from 'react';

export default function Form({ categorys }: { categorys: CategoryField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createItem, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
         {/* Descript */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Tên công thức
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" maxLength={5000}  name="name" data-name="name" placeholder="Nhập tên sản phẩm" type="text"  required />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          {/* <div id="price-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price &&
              state.errors.price.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>
        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Nhập thời gian
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="prep_time"
                name="prep_time"
                type="number"
                step="1"
                min="0"
                placeholder="Nhập số lượng"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="prep_time-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          {/* <div id="prep_time-error" aria-live="polite" aria-atomic="true">
            {state.errors?.prep_time &&
              state.errors.prep_time.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>
   

        {/* Descript */}
        <div className="mb-4">
          <label htmlFor="descript" className="mb-2 block text-sm font-medium">
            Nhập mô tả
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" maxLength={5000} name="descript" data-name="descript" placeholder="Nhập mô tả sản phẩm"required />
            </div>
          </div>

          {/* <div id="price-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price &&
              state.errors.price.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>

        <div className="mb-4">
          <label htmlFor="descript" className="mb-2 block text-sm font-medium">
            Nhập nguyên liệu
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" maxLength={5000} name="ingredients" data-name="ingredients" placeholder="Nhập mô tả sản phẩm"required />
            </div>
          </div>

          {/* <div id="price-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price &&
              state.errors.price.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>


        <div className="mb-4">
          <label htmlFor="descript" className="mb-2 block text-sm font-medium">
            Nhập công thức
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" maxLength={5000} name="steps_to_follow" data-name="steps_to_follow" placeholder="Nhập mô tả sản phẩm"required />
            </div>
          </div>

          {/* <div id="price-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price &&
              state.errors.price.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>



        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Nhập hình ảnh
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
            <input 
              type="file" 
              name="image" 
              accept="image/*" 
              required 
            />
            </div>
          </div>

          {/* <div id="price-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price &&
              state.errors.price.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>

        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Hủy
        </Link>
        <Button type="submit">Tạo sản phẩm</Button>
      </div>
    </form>
  );
}
