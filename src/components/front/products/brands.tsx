import Container from '@/components/ui/container';

import Image from 'next/image';
import Link from 'next/link';

import { brands } from '@/constants/products';

export default function Brands() {
  return (
    <Container>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(10rem,10rem))] place-content-center gap-4 sm:gap-8 md:place-content-center'>
        {brands.map((brand) => (
          <Link
            href={brand.link}
            key={brand.id}
            className='flex flex-col items-center text-slate-700'
          >
            <Image
              src={brand.image}
              alt={brand.name}
              className='rounded-xl'
              width={0}
              height={0}
              sizes='(min-width: 808px) 50vw, 100vw'
              style={{
                objectFit: 'contain',
                width: '100%',
                maxWidth: '160px',
                height: 'auto',
              }}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
}
