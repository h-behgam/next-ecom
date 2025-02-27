'use client';
import UserBox from './UserBox';
import MobileItems from './MobileItems';

import Image from 'next/image';
import { useContext, useLayoutEffect } from 'react';

import { cn } from '@/lib/tailwind-helper';
import { Imenu } from '@/types/menu-type';
import { useSession } from 'next-auth/react';
import { MenuContext } from '@/context/MenuContext';
import { UserContext } from '@/context/UserContext';

export default function MobileNavbar({ menus }: { menus: Imenu[] }) {
  // set MenuContext
    const menuContext = useContext(MenuContext);
    if (!menuContext) throw new Error('Menu must be used within an AppProvider');
    const { menuState, menuDispatch } = menuContext;
    // set UserContext
    const userContext = useContext(UserContext);
    if (!userContext) throw new Error('Menu must be used within an AppProvider');
    const { UserState, UserDispatch } = userContext;

  // get session
  const session = useSession();

  // جلوگیری از اسکرول هنگام باز بودن منو با استفاده از useLayoutEffect
  useLayoutEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuState.isOpen);
    // پاک‌سازی هنگام خروج از کامپوننت
    return () => {
      if (menuState.isOpen) document.body.classList.remove('overflow-hidden');
    };
  }, [menuState.isOpen]);

  return (
    <div className='relative block h-full md:hidden ssss' >
      <div
        className={cn(
          'fixed left-0 top-[64] h-dvh w-dvw -translate-x-full transform bg-zinc-800/80 transition-transform duration-500 ease-in-out',
          { 'translate-x-0': menuState.isOpen },
        )}
      ></div>
      <header className='flex items-center justify-between p-4'>
        <a onClick={() => {
          UserDispatch({type:'CLOSE_USER_MENU'})
          menuDispatch({ type: 'TOGGLE_MENU' })}}>
          <Image
            className='block dark:invert'
            src={'/assets/images/menu-hamburger.svg'}
            alt='logo'
            width={30}
            height={30}
          />
        </a>
        <UserBox isDesktopMenu={false} />
      </header>

      <div
        className={cn(
          `fixed left-0 h-dvh w-2/3 -translate-x-full transform bg-white shadow-lg transition-transform duration-500 ease-in-out`,
          { 'translate-x-0': menuState.isOpen },
        )}
      >
        {menuState.isOpen && <MobileItems menus={menus} />}
      </div>
    </div>
  );
}
