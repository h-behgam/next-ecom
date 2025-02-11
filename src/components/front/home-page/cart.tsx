import { e2p, sp } from '@/lib/replace-number';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Cart() {
  return (
    <Link href={'#'}>
      <div className='flex h-64 w-40 flex-col items-center rounded-md bg-slate-100 p-2 text-sm/5'>
        <div className='mb-2 block h-32 w-32'>
          <Image
            className='w-full object-contain'
            src={'/assets/images/product1.webp'}
            alt='product picture'
            width={128}
            height={128}
          />
        </div>
        <div className='h-24'>
          <p className='mb-4 text-slate-700'>
            گوشی موبایل شیائومی مدل 14T دو سیم کارت ...
          </p>
          <div className='flex leading-3'>
            <div className='flex w-full items-center justify-between'>
              <p className='rounded-xl bg-red-700 px-2 pt-0.5 text-base text-slate-100'>
                {'٪ ' + e2p(8)}
              </p>
              <div className='flex items-center'>
                <p className=''>{sp(12000000)}</p>
                <p className='text-xs font-thin'>تومان</p>
              </div>
            </div>
          </div>
          <p className='ml-6 text-left text-slate-500 line-through'>
            {sp(14000000)}
          </p>
        </div>
      </div>
    </Link>
  );
}
