import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';

import { sp } from '@/lib/replace-number';
import { CartContext } from '@/context/CartContext';

import AddToCartButton from '../product/AddToCartButton';
import { IoCartOutline } from 'react-icons/io5';

export default function DesktopCart() {
  // get cCartContext
  const context = useContext(CartContext);
  if (!context) throw new Error('CartContext must be used within CartProvider');
  const { cartState } = context;

  return (
    <div className='invisible absolute left-0 w-full rounded-md border bg-neutral-50 p-2 pb-0 group-hover/cart:visible md:w-96'>
      {cartState.map((item) => {
        const { id, name, price, image } = item;
        return (
          <div
            key={item.id}
            className='flex gap-x-4 border-b bg-neutral-50 p-2 last:border-b-0'
          >
            <div className='w-1/3'>
              <div className='mb-4'>
                <Image src={item.image} alt='' width={150} height={150} />
              </div>
              <div>
                <AddToCartButton props={{ id, name, price, image }}>
                  d
                </AddToCartButton>
              </div>
            </div>
            <div className='w-2/3'>
              <h4 className='mb-10'>{item.name}</h4>
              <p className='text-lg font-bold'>
                {sp(item.price)} <span className='text-[10px]'>تومان</span>{' '}
              </p>
            </div>
          </div>
        );
      })}
      <div className='flex border-t py-2'>
        <div className='flex flex-col'>
          <p className='text-center text-xs'>مبلغ قابل پرداخت</p>
          <p className='text-center text-base font-bold'>
            {sp(
              cartState.reduce((acc, item) => acc + item.price * item.qty!, 0),
            )}{' '}
            <span className='text-[10px]'>تومان</span>
          </p>
        </div>
        <Link
          href={'/cart'}
          className='mr-auto flex w-fit items-center justify-center gap-x-2 rounded-md bg-rose-500 px-4 py-2 text-center text-white duration-300 hover:bg-rose-600'
        >
          <IoCartOutline size={20} />
          <span>مشاهده سبد خرید</span>
        </Link>
      </div>
    </div>
  );
}
