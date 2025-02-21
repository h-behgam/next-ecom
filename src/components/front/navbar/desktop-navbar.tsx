import Link from 'next/link';

import { Providerse } from '@/providers/SessionProvider';

import UserSection from './user';

import { Imenu } from '@/types/menu-type';

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
        <Providerse>
          <UserSection />
        </Providerse>
      </div>
    </nav>
  );
}
