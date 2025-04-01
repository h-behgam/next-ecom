'use client';

import { cn } from '@/lib/tailwind-helper';
import { useFormStatus } from 'react-dom';

import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

export default function AddToCartButton({
  classname,
  children,
  onClick,
  existInCart,
  id
}: {
  // classname?: React.CSSProperties;
  classname?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode | string;
  existInCart?: boolean;
  id:number
}) {
  const { pending } = useFormStatus();
  const context = useContext(CartContext)
  if (!context) throw new Error('CartContext must be used within CartProvider')
    const {cartState,cartDispatch} = context
  return (
    existInCart ? (
      <button
        type='submit'
        disabled={pending}
        onClick={onClick}
        className={cn(
          'bg-second_color hover:bg-hover_color flex items-center justify-center gap-x-4 rounded-lg px-7 py-2 text-white duration-300 disabled:bg-gray-400',
          classname,
        )}
      >
        {pending && (
          <svg
            className='-ml-1 mr-3 size-5 animate-spin text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        )}
        {children}
      </button>
    ) : (

      <div className='flex w-28 items-center justify-between rounded-md border p-3'>
        <FaPlus onClick={() => {cartDispatch({type:'ADD_TO_CART',payload:{id}})}} className='cursor-pointer' />
        {cartState.find((item) => item.id === id) ? cartState.find((item) => item.id === id)?.qty : 10}
        {existInCart ? <FaRegTrashAlt /> : <FaMinus />}
      </div>
    )
  );
}
