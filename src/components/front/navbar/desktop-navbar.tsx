import { Imenu } from '@/types/menu-type';
import Link from 'next/link';

export default function DesktopMenu({ menus }: { menus: Imenu[] }) {
  return (
    <nav className='container-home hidden md:block'>
      <div className='flex justify-between'>
        <div className=''>
          <ul className='flex gap-x-3'>
            {menus?.map((menu) => {
              return (
                <li key={menu.id}>
                  <Link href={menu.link} className='block p-4'>
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link className='mr-auto block p-4' href={'/signin'}>
          ورود
        </Link>
      </div>
    </nav>
  );
}
