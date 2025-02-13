import React from 'react';
import Cart from './cart';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/container';
import { products } from '@/constants/products';

export default function Amazings() {
  return (
    <Container isFullWidth>
      <div className='my-2 flex w-full justify-between rounded-2xl bg-red-500 p-8'>
        <div className='h-60 w-32'>
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
          <Link href={'#'} className='block w-32 text-xl text-slate-100'>
            {'مشاهده همه >'}
          </Link>
        </div>
        <div className='lg:gap-x:6 flex gap-x-1 overflow-x-scroll md:gap-x-3 lg:overflow-x-auto'>
          {products?.map((product) => {
            return (
              <Cart
                description={product.description}
                price={product.price}
                image={product.image}
                key={product.id}
                isHomePage={true}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
