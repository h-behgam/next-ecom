import Link from 'next/link';
import Image from 'next/image';

import { signOut, useSession } from 'next-auth/react';
import { useContext, useLayoutEffect } from 'react';
import { cn } from '@/lib/tailwind-helper';
import { UserContext } from '@/context/UserContext';

type UserBoxItemsProps = {
  isDesktopMenu: boolean;
};
export default function UserBoxItems({ isDesktopMenu }: UserBoxItemsProps) {
  const context = useContext(UserContext);
  if (!context) throw new Error('Menu must be used within an AppProvider');
  const { UserState, UserDispatch } = context;

  const session = useSession();

  // جلوگیری از اسکرول هنگام باز بودن منو با استفاده از useLayoutEffect
  useLayoutEffect(() => {
    if (!isDesktopMenu)
      document.body.classList.toggle('overflow-hidden', UserState.isOpen);
    // پاک‌سازی هنگام خروج از کامپوننت
    return () => {
      if (UserState.isOpen && !isDesktopMenu)
        document.body.classList.remove('overflow-hidden');
    };
  }, [UserState.isOpen]);

  return (
    <div
      className={cn(`absolute left-0 w-52 rounded-lg bg-white p-6 shadow-lg`, {
        'rounded-none': !isDesktopMenu,
        'w-2/3': !isDesktopMenu,
        'h-dvh': !isDesktopMenu,
      })}
    >
      <ul className='divide-y'>
        {session.data?.user ? (
          <>
            <li className='pb-3 dark:text-stone-800'>
              {session.data.user.name}
            </li>
            <li className='py-3 dark:text-stone-800'>
              <Link
                className='flex items-center gap-x-6'
                href='/dashboard'
                onClick={() => {
                  UserDispatch({ type: 'CLOSE_USER_MENU' });
                }}
              >
                <Image
                  src='/assets/images/icons/admin.svg'
                  alt='Dashboard'
                  width={24}
                  height={24}
                />
                پنل مدیریت
              </Link>
            </li>
            <li className='pt-3 dark:text-stone-800'>
              <button
                className='flex w-full items-center gap-x-6 text-left'
                onClick={() => {
                  UserDispatch({ type: 'CLOSE_USER_MENU' });
                  signOut();
                }}
              >
                <Image
                  src='/assets/images/icons/signout.svg'
                  alt='Sign Out'
                  width={24}
                  height={24}
                />
                خروج
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link
              href={'/signin'}
              onClick={() => {
                UserDispatch({ type: 'CLOSE_USER_MENU' });
              }}
            >
              ورود
            </Link>{' '}
          </li>
        )}
      </ul>
    </div>
  );
}
