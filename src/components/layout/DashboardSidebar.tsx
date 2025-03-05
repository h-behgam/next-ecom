import Link from 'next/link';

export default function DashboardSidebar() {
  return (
    <aside className='w-full md:w-64 divide-y bg-slate-50/50 p-2 border-b-4 md:border-b-0'>
      <Link href={'/'}>
        <h2 className='mb-4 font-medium'>صفحه اصلی</h2>
      </Link>
      <nav className=''>
        <ul className='divide-y'>
          <li className='pt-1 pb-2'>
            <Link className='font-semibold text-sm' href={'/dashboard'}>
            مدیریت
            </Link>
          </li>
          <li className='pt-1 pb-2'>
            <Link className='font-semibold text-sm' href={'/dashboard/pruduct'}>
              محصولات
            </Link>
          </li>
          <li className='pt-1 pb-2'>
            <Link className='font-semibold text-sm' href={'/dashboard/pruduct/add'}>
              افزودن محصول
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
