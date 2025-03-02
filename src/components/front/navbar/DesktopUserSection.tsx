'use client';
import UserBox from './UserBox';
import UserSkeleton from './DesktopUserSkeleton';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function UserSection({
  isDesktopMenu,
}: {
  isDesktopMenu: boolean;
}) {
  const session = useSession();

  return (
    <div className='ml-2 mr-auto mt-2 flex h-10 w-32 justify-end'>
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
    </div>
  );
}
