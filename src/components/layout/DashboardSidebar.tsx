import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { AiOutlineProduct } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { CgAddR } from 'react-icons/cg';

export default function DashboardSidebar() {
  return (
    <aside className='w-full border-b-4 border-l bg-slate-50/50 md:w-64 md:border-b-0'>
      <Link
        className='flex h-16 items-center gap-x-2 border-b px-2 py-4'
        href={'/'}
      >
        <FaHome size={20} />
        <h2 className='font-medium'>صفحه اصلی</h2>
      </Link>
      <nav className='pt-5'>
        <ul className='divide-yl'>
          <li className='pb-2 pt-1 duration-300 hover:bg-slate-100'>
            <Link
              className='flex items-center gap-x-2 px-2 py-1 text-sm font-semibold'
              href={'/dashboard'}
            >
              <RxDashboard size={20} />
              مدیریت
            </Link>
          </li>
          <li className='pb-2 pt-1 duration-300 hover:bg-slate-100'>
            <Link
              className='flex items-center gap-x-2 px-2 py-1 text-sm font-semibold'
              href={'/dashboard/pruduct'}
            >
              <AiOutlineProduct size={20} />
              محصولات
            </Link>
          </li>
          <li className='pb-2 pt-1 duration-300 hover:bg-slate-100'>
            <Link
              className='flex items-center gap-x-2 px-2 py-1 text-sm font-semibold'
              href={'/dashboard/pruduct/add'}
            >
              <CgAddR size={20} />
              افزودن محصول
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
