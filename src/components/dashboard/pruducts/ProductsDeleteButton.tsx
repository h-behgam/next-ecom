'use client';

import { deleteById, productsPageRevalidate } from '@/actions/product-action';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'react-toastify';

interface InfoButtonProps {
  children: ReactNode;
  className?: string;
  dataId: number;
}

export default function ProductsDeleteButton({
  children,
  className,
  dataId,
}: InfoButtonProps) {
  const { pending } = useFormStatus();
  const router = useRouter();

  // handler function delete
  async function deleteHandler(): Promise<void> {
    try {
      const confirmation = confirm('آیا مطمئن هستید می خواهید حذف کنید ؟');
      if (confirmation) {
        const { product, error } = await deleteById(dataId);
        if (error) toast.error('مشکلی پیش آمده!!!');
        if (product) {
          productsPageRevalidate();
          toast.success('حذف شد.');
          router.refresh();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  const defaultClassName =
    'w-full rounded-sm bg-slate-50 px-5 py-2 text-slate-700 duration-300 hover:bg-slate-100';
  return (
    <button
      onClick={deleteHandler}
      disabled={pending}
      className={className ? className : defaultClassName}
    >
      {children}
    </button>
  );
}
