import Container from '@/components/ui/container';
import Cart from '../cart';

import Link from 'next/link';
import Image from 'next/image';

// import { products } from '@/constants/products';
import { getAllProducts } from '@/actions/product-action';

export default async function Amazings() {
  const allProducts = await getAllProducts();
  const { products, error } = allProducts;
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
          {error && <p className='text-red-600'>محصولی یافت نشد</p>}
          {products?.map((product) => {
            return (
              <Cart
                id={product.id}
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
