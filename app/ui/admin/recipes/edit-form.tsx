'use client';

import { RecipeAdmin } from '@/lib/definitions/recipes';
import { CategorysList } from '@/lib/definitions/categorys';

import {

  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateItem, State } from '@/lib/api/admin/recipes';
import { useActionState } from 'react';

export default function page({
  recipe,
  categorys,
}: {
  recipe: RecipeAdmin;
  categorys: CategorysList[];
}) {
  const initialState: State = { message: null, errors: {} };
  const updateRecipeWithId = updateItem.bind(null, recipe.id);
  const [state, formAction] = useActionState(updateRecipeWithId, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Tên công thức
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" maxLength={5000} defaultValue={recipe.name} name="name"  placeholder="Nhập tên sản phẩm" type="text"  required />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="category_id" className="mb-2 block text-sm font-medium">
            Chọn danh mục
          </label>
          <div className="relative">
            <select
              id="category_id"
              name="category_id"
              // defaultValue={recipe.category_id}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="category_id-error"
            >
              <option value="" disabled>
                Chọn danh mục
              </option>
              {categorys.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>

          {/* <div id="category_id-error" aria-live="polite" aria-atomic="true">
            {state.errors?.category_id &&
              state.errors.category_id.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>

        {/* Thời gian chế biến */}
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
                defaultValue={recipe.prep_time}
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
              <textarea className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"   defaultValue={recipe.descript} maxLength={5000} name="descript" data-name="descript" placeholder="Nhập mô tả sản phẩm"required />
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
              <textarea className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" defaultValue={recipe.ingredients} maxLength={5000} name="ingredients" data-name="ingredients" placeholder="Nhập mô tả sản phẩm"required />
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
              <textarea className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" defaultValue={recipe.steps_to_follow}  maxLength={5000} name="steps_to_follow" data-name="steps_to_follow" placeholder="Nhập mô tả sản phẩm"required />
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
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/recipes"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit recipe</Button>
      </div>
    </form>
  );
}
