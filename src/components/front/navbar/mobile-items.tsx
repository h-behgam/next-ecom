import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import { MobileMenu } from './mobile-navbar';
import { Imenu } from '@/types/menu-type';

export default function MobileItems({
  isOpen,
  menus,
  setIsOpen,
  isRoot = true,
}: MobileMenu & { isRoot?: boolean }) {
  // کنترل اسکرول فقط در سطح ریشه
  useLayoutEffect(() => {
    if (isRoot) {
      if (isOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
      return () => document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen, isRoot]);

  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const toggleSubMenu = (id: number) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  return (
    <ul className='flex flex-col gap-x-3 divide-y'>
      {menus?.map((menu) => (
        <li key={menu.id} className='bg-slate-50'>
          {menu.subMenu ? (
            <div
              className='flex cursor-pointer justify-between p-3'
              onClick={() => toggleSubMenu(menu.id)}
            >
              {menu.name}
              <Image
                src='/assets/images/icons/chevron-down.svg'
                alt='chevron-down'
                width={20}
                height={20}
                className={`h-5 w-5 transform transition-transform ${activeMenu === menu.id ? 'rotate-180' : ''}`}
              />
            </div>
          ) : (
            <Link
              href={menu.link}
              onClick={() => setIsOpen(false)}
              className='flex cursor-pointer justify-between p-3'
            >
              {menu.name}
            </Link>
          )}
          {menu.subMenu && activeMenu === menu.id && (
            <MobileItems
              isOpen={isOpen}
              menus={menu.subMenu as unknown as Imenu[]}
              setIsOpen={setIsOpen}
              isRoot={false}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
