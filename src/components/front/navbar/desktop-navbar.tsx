import Link from 'next/link';

export default function DesktopMenu() {
  return (
    <nav className='container-home hidden md:block'>
      <div className='flex justify-between'>
        <div className=''>
          <ul className='flex gap-x-3'>
            <li>
              <Link href={'/'} className='block p-4'>
                خانه
              </Link>
            </li>
            <li>
              <Link href={'/products'} className='block p-4'>
                محصولات
              </Link>
            </li>
            <li>
              <Link href={'/'} className='block p-4'>
                تماس باما
              </Link>
            </li>
          </ul>
        </div>
        <ul className='mr-auto'>
          <li>
            <Link className='block p-4' href={'/'}>
              ورود
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
