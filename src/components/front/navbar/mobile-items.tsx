import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useState } from 'react';
import { MobileMenu } from './mobile-navbar';

export default function MobileItems({ isOpen, menus, setIsOpen }: MobileMenu) {
  // جلوگیری از اسکرول هنگام باز بودن منو با استفاده از useLayoutEffect
  useLayoutEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
    // پاک‌سازی هنگام خروج از کامپوننت
    return () => {
      if (isOpen) document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  // مدیریت وضعیت باز/بسته بودن ساب‌منوها
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
              menus={menu.subMenu}
              setIsOpen={setIsOpen}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
