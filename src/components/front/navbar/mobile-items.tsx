import Link from 'next/link';
import Image from 'next/image';

import { MenuContext } from '@/context/MenuContext';
import { useContext, useLayoutEffect, useState } from 'react';

import { Imenu } from '@/types/menu-type';

export default function MobileItems({
  menus,
  isRoot = true,
}: { menus: Imenu[] } & { isRoot?: boolean }) {
  // set useContext
  const context = useContext(MenuContext);
  if (!context) throw new Error('Menu must be used within an AppProvider');
  const { menuState, menuDispatch } = context;

  // set useState
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  // کنترل اسکرول فقط در سطح ریشه
  useLayoutEffect(() => {
    if (isRoot) {
      if (menuState.isOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
      return () => document.body.classList.remove('overflow-hidden');
    }
  }, [menuState.isOpen, isRoot]);

  // toggle sub menu
  const toggleSubMenu = (id: number) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  return (
    <ul className='flex flex-col gap-x-3 divide-y'>
      {menus?.map((menu) => (
        <li key={menu.id} className='bg-slate-50'>
          {menu.subMenu ? (
            <div
              className='flex cursor-pointer justify-between p-3 dark:text-slate-800'
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
              onClick={() => menuDispatch({ type: 'CLOSE_MENU' })}
              className='flex cursor-pointer justify-between p-3 dark:text-slate-800'
            >
              {menu.name}
            </Link>
          )}
          {menu.subMenu && activeMenu === menu.id && (
            <MobileItems
              menus={menu.subMenu as unknown as Imenu[]}
              isRoot={false}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
