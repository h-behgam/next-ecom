'use client';
import UserBox from './UserBox';
import UserSkeleton from './DesktopUserSkeleton';
import { IoCartOutline } from 'react-icons/io5';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function UserSection({
  isDesktopMenu,
}: {
  isDesktopMenu: boolean;
}) {
  const session = useSession();

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
      <div className='p-2'>
        <IoCartOutline size={25} />
      </div>
    </div>
  );
}
