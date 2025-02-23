import { Product } from '@/types/products-type';
import Image from 'next/image';

type ProductImageProps = Omit<
  Product,
  'id' | 'stock' | 'features' | 'rate' | 'enName' | 'description' | 'price'
>;
export default function ProductImage({ name, image }: ProductImageProps) {
  return (
    /* product image */
    <div className='basis-4/12'>
      <Image src={image} alt={name} width={500} height={500} priority />
    </div>
  );
}
