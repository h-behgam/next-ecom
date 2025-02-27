'use client';
import UserBoxItems from './UserBoxItems';
import UserBoxIcons from './UserBoxIcons';

import { useEffect, useRef, useCallback, useContext } from 'react';
import { cn } from '@/lib/tailwind-helper';
import { UserContext } from '@/context/UserContext';

type UserBoxProps = { isDesktopMenu: boolean }
export default function UserBox({  isDesktopMenu }: UserBoxProps) {
  const context = useContext(UserContext);
    if (!context) throw new Error('Menu must be used within an AppProvider');
    const { UserState, UserDispatch } = context;

    const menuRef = useRef<HTMLDivElement>(null);

  // تابع برای بستن منو هنگام کلیک خارج از آن
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      if (isDesktopMenu)
        UserDispatch({type:'CLOSE_USER_MENU'})
      
      if (UserState.isOpen !== true) {
        console.log(UserState.isOpen);
      }
    }
  }, []);

  useEffect(() => {
    // اضافه کردن و حذف رویداد کلیک خارج از منو
    // if (isDesktopMenu)
      document.addEventListener('mousedown', handleClickOutside);
    return () => {
  // if (isDesktopMenu)
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ handleClickOutside]);
console.log('UserState.isOpen in user box: ', UserState.isOpen);
console.log('isDesktopMenu',isDesktopMenu);
  return ( isDesktopMenu ? 
    
    <div className={cn('relative p-1 h-fit',{'p-0': !isDesktopMenu})} ref={menuRef}>
      <UserBoxIcons isDesktopMenu={isDesktopMenu} />
      {UserState.isOpen && <UserBoxItems isDesktopMenu={true} />}
    </div>
    : 
    <div className={cn('relative p-1 h-fit',{'p-0': !isDesktopMenu})} ref={menuRef}>
      <UserBoxIcons isDesktopMenu={isDesktopMenu} />
      <div className={cn(
        `fixed left-0 h-dvh w-dvw -translate-x-full transform bg-white shadow-lg transition-transform duration-500 ease-in-out bg-zinc-800/80`,
        { 'translate-x-0': UserState.isOpen,'top-[64]':!isDesktopMenu },
      )}>
      {UserState.isOpen && <UserBoxItems isDesktopMenu={false} />}
    </div>
    </div>
  );
}
