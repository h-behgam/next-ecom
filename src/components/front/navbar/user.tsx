'use client';
import UserBox from './user-box';
import UserSkeleton from './user-skeleton';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function UserSection() {
  const session = useSession();

  return (
    <div className='mr-auto mt-2 block h-10 w-32'>
      {session.status === 'loading' && <UserSkeleton />}
      {session.status == 'authenticated' && (
        <UserBox name={session.data.user?.name as string} />
      )}
      {session.status == 'unauthenticated' && (
        <div className='flex h-10 w-32 items-center justify-center rounded-md border '>
          <Link className='text-sm' href={'/signin'}>
            ورود | ثبت نام
          </Link>
        </div>
      )}
    </div>
  );
}
