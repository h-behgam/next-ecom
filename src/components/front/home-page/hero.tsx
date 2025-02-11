import Container from '@/components/ui/container';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <Container>
      <Image
        src={'/assets/images/hero-1.webp'}
        alt='Hero'
        className='inline-block h-full w-full'
        width={1600}
        height={200}
        priority
        // style={object-fit: 'cover', border-radius: '0px}'
      />
    </Container>
  );
}
