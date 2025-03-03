import SingleSlide from '@/components/front/single-slide';
import ProductsTemplate from '@/components/front/products';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'محصولات',
  description: 'شما می توانید لیست متنوعی از محصولات را اینجا پیدا کنید',
};
//just for demo
export const revalidate =600
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
