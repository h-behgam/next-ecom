import { sp } from '@/lib/replace-number';
import Image from 'next/image';
import { AddToCartProps } from '@/types/products-type';
import AddToCartButton from './AddToCartButton';

export default function AddToCart({ id, name, image, price }: AddToCartProps) {
  return (
    /* product price */
    <div className='flex h-full min-w-80 basis-3/12 flex-col rounded-md border bg-slate-50 p-5'>
      <div className='flex items-center border-b pb-6 leading-8'>
        <Image src={image} alt='product1' width={70} height={70} />
        <p className='dark:text-slate-500'>{name.slice(0, 30)}</p>
      </div>
      <div className='flex flex-col py-4 leading-9'>
        <p className='text-slate-600'>گارانتی ۱۸ ماهه آوات</p>
        <p className='text-slate-600'>موجود در انبار</p>
        <p className='text-left text-xl font-bold dark:text-slate-500'>
          {sp(price)}
          <span className='mr-1 text-xs'>تومان</span>
        </p>
      </div>
      <p className='py-4 text-green-500'>۱۰۰۰+ فروش در هفته گذشته</p>
      <div className='pt-5'>
        <AddToCartButton id={id} classname={'bg-rose-500 w-full'}>
          افزودن به سبد
        </AddToCartButton>
      </div>
    </div>
  );
}
