import React from 'react';
import Cart from './cart';
import Image from 'next/image';
import Link from 'next/link';

export default function Amazings() {
  return (
    <div className='flex w-full justify-between rounded-2xl bg-red-500 p-8'>
      <div className='h-56 w-32'>
        <Image
          src='/assets/images/Amazings.svg'
          alt='Amazing 1'
          width={88}
          height={88}
          className='mb-4'
        />
        <Image
          src='/assets/images/Amazing.svg'
          alt='Amazing 1'
          width={88}
          height={88}
          className='mb-6'
        />
        <Link href={'#'} className='text-xl text-slate-100'>
          {'مشاهده همه >'}
        </Link>
      </div>
      <div className='flex gap-x-6 overflow-hidden'>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
}
