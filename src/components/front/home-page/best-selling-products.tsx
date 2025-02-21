import Container from '@/components/ui/container';
import { bestProducts } from '@/constants/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BestSellingProducts() {
  return (
    <Container>
      <div className='flex flex-col gap-4'>
        <h2 className='mb-2 text-center text-xl font-bold text-slate-700 md:text-2xl md:font-medium lg:mb-6 dark:text-slate-200'>
          خرید بر اساس بهترین ها
        </h2>
        <div className='grid auto-cols-fr grid-cols-1 gap-4 lg:grid-cols-2'>
          {bestProducts.map((product) => (
            <Link
              href={product.link}
              key={product.id}
              className='flex flex-col items-center text-slate-700'
            >
              <Image
                src={product.image}
                alt={product.name}
                className='rounded-xl'
                width={0}
                height={0}
                sizes='(min-width: 808px) 50vw, 100vw'
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
