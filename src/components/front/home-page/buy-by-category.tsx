import { getAllCategories } from '@/actions/category-action';
import Container from '@/components/ui/container';

// import { categories } from '@/constants/categories';

import Image from 'next/image';
import Link from 'next/link';

export default async function BuyByCategory() {
  const allCategories = await getAllCategories();
  const { categories, error } = allCategories;
  return (
    <Container>
      <div className='flex flex-col gap-4'>
        <h2 className='mb-2 text-center text-xl font-bold text-slate-700 md:text-2xl md:font-medium lg:mb-6'>
          خرید بر اساس دسته بندی
        </h2>
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))] place-content-center gap-16 sm:gap-4 md:place-content-between'>
          {error && <p className='text-red-600'>دسته بندی یافت نشد!!</p>}
          {categories?.map((category) => (
            <Link
              href={category.link}
              key={category.id}
              className='flex flex-col items-center text-slate-700'
            >
              <Image
                src={category.image}
                alt={category.name}
                className=''
                width={100}
                height={100}
              />
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
