import { e2p, sp } from '@/lib/replace-number';
import { cn } from '@/lib/tailwind-helper';
import { Product } from '@/types/products-type';
import Image from 'next/image';
import Link from 'next/link';

type CartProps = Omit<
  Product,
  'name' | 'stock' | 'features' | 'rate' | 'enName'
> & {
  isHomePage: boolean;
};
export default function Cart({
  id,
  description,
  price,
  image,
  isHomePage,
}: CartProps) {
  return (
    <Link href={`/products/${id}`}>
      <div
        className={cn(
          'mb-6 flex h-80 w-48 flex-col items-center border-b border-l border-slate-100 p-2 text-sm/5 sm:mb-0 dark:bg-slate-200 dark:text-slate-800',
          {
            'w-40': isHomePage,
            'h-64': isHomePage,
            'rounded-md': isHomePage,
            'border-0': isHomePage,
            'bg-slate-50': isHomePage,
            'mb-0': isHomePage,
          },
        )}
      >
        <div className='mb-2 block h-36 w-36'>
          <Image
            className='mx-auto object-contain'
            src={image}
            alt='product picture'
            width={isHomePage ? 128 : 236}
            height={isHomePage ? 128 : 236}
          />
        </div>

        <div className='h-24'>
          <p className='mb-4 text-slate-700'>
            {description.slice(0, 35)}
            {'...'}
          </p>
          {!isHomePage && (
            <div className='mb-3 flex items-center justify-end'>
              <span className='ml-1'>{e2p(4.36)}</span>
              <Image
                src={'/assets/images/star-icon.svg'}
                alt='star'
                className='w-4 h-4'
                width={16}
                height={16}
              />
            </div>
          )}
          <div className='flex leading-3'>
            <div className='flex w-full items-center justify-between'>
              <p className='rounded-xl bg-red-700 px-2 pt-0.5 text-base text-slate-100'>
                {'٪ ' + e2p(8)}
              </p>
              <div className='flex items-center'>
                <p className=''>{sp(price)}</p>
                <p className='text-xs font-thin'>تومان</p>
              </div>
            </div>
          </div>
          <p className='ml-6 text-left text-slate-500 line-through'>
            {sp(14000000)}
          </p>
        </div>
      </div>
    </Link>
  );
}
