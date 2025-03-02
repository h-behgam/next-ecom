import Link from 'next/link';

export default function DashboardSidebar() {
  return (
    <aside className='w-64 divide-y bg-slate-50/50 p-2'>
      <Link href={'/dashboard'}>
        <h2 className='mb-4 text-center text-xl'>مدیریت</h2>
      </Link>
      <nav>
        <ul>
          <li className='py-2'>
            <Link className='font-semibold' href={'/dashboard/pruduct/add'}>
              افزودن محصول
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
