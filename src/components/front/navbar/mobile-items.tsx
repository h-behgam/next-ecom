import Link from 'next/link';
import { useEffect } from 'react';

export default function MobileItems({ isOpen }: { isOpen: boolean }) {
  console.log(isOpen);
  // جلوگیری از اسکرول هنگام باز بودن منو
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // پاک‌سازی هنگام خروج از کامپوننت
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);
  return (
    <ul className='flex flex-col gap-x-3'>
      <li>
        <Link href={'/'} className='block py-1 px-4'>
          خانه
        </Link>
      </li>
      <li>
        <Link href={'/products'} className='block py-1 px-4'>
          محصولات
        </Link>
      </li>
      <li>
        <Link href={'/'} className='block py-1 px-4'>
          تماس باما
        </Link>
      </li>
    </ul>
  );
}
