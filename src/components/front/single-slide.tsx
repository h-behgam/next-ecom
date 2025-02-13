import Container from '@/components/ui/container';
import Image from 'next/image';
import React from 'react';

export default function SingleSlide({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Container>
      <Image
        src={src}
        alt={alt}
        className='inline-block h-full w-full'
        width={0}
        height={0}
        sizes='(max-width: 508px) 100vw, (max-width: 1024px) 50vw'
        priority
        style={{
          objectFit: 'cover',
          width: '100%',
          height: 'auto',
          maxHeight: '500px',
        }}
      />
    </Container>
  );
}
