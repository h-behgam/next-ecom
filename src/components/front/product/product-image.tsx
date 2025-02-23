import { ProductImageProps } from '@/types/products-type';
import Image from 'next/image';

export default function ProductImage({ name, image }: ProductImageProps) {
  return (
    /* product image */
    <div className='basis-4/12'>
      <Image src={image} alt={name} width={500} height={500} priority />
    </div>
  );
}
