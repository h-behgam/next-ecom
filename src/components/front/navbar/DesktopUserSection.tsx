'use client';
import UserBox from './UserBox';
import DesktopCart from './DesktopCart';
import UserSkeleton from './DesktopUserSkeleton';
import { IoCartOutline } from 'react-icons/io5';

import Link from 'next/link';
import { useContext } from 'react';
import { useSession } from 'next-auth/react';
import { CartContext } from '@/context/CartContext';

export default function UserSection({
  isDesktopMenu,
}: {
  isDesktopMenu: boolean;
}) {
  const session = useSession();

  // get cCartContext
  const context = useContext(CartContext);
  if (!context) throw new Error('CartContext must be used within CartProvider');
  const { cartState } = context;

  // fetching cart item

  return (
    <div className='ml-2 mr-auto mt-2 flex h-10 w-44 justify-end'>
      {session.status === 'loading' && <UserSkeleton />}
      {session.status == 'authenticated' && (
        <UserBox isDesktopMenu={isDesktopMenu} />
      )}
      {session.status == 'unauthenticated' && (
        <div className='flex h-10 w-32 items-center justify-center rounded-md border'>
          <Link className='text-sm' href={'/signin'}>
            ورود | ثبت نام
          </Link>
        </div>
      )}
      <span className='mx-3 mt-2 hidden h-6 w-px bg-neutral-200 lg:block'></span>
      <div className='group/cart relative'>
        <Link className='' href={'#'}>
          <div className='relative p-2'>
            <IoCartOutline size={25} />
            {cartState.length > 0 && (
              <span className='absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-md bg-red-500 text-xs'>
                {cartState.length}
              </span>
            )}
          </div>
        </Link>
        <DesktopCart />
      </div>
    </div>
  );
}
