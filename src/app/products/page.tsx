import SingleSlide from '@/components/front/single-slide';
import ProductsTemplate from '@/components/front/products';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'all posts',
  description: 'You can see all posts here',
};
export default function ProductsPage() {
  return (
    <>
      <SingleSlide src='/assets/images/samsung.webp' alt='single product' />
      <main className='container-home flex w-full flex-col items-center gap-8'>
        <ProductsTemplate />
      </main>
    </>
  );
}
