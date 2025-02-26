import Link from 'next/link';
import Image from 'next/image';

import { signOut } from 'next-auth/react';
import { Dispatch, SetStateAction } from 'react';

type UserBoxItemsProps = {
  name: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export default function UserBoxItems({ name, setIsOpen }: UserBoxItemsProps) {
  return (
    <div className='absolute left-0 w-52 rounded-lg bg-white p-6 shadow-lg'>
      <ul className='divide-y'>
        <li className='pb-3 dark:text-stone-800'>{name}</li>
        <li className='py-3 dark:text-stone-800'>
          <Link className='flex items-center gap-x-6' href='/dashboard'>
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
              setIsOpen(false);
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
      </ul>
    </div>
  );
}
