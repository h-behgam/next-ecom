import { e2p, sp } from "@/lib/replace-number";
import { Product } from "@/types/products-type";
import Image from "next/image";

type ProductDetailsProps = Omit<
  Product,
  'id' | 'stock'   | 'image' 
>;
export default function ProductDetails({ name,enName,rate,price,description,features  }: ProductDetailsProps) {
  return (
    //* product details */
    <div className='flex basis-5/12 flex-col'>
    <div>
      <h1 className='mb-3 font-semibold lg:text-lg xl:text-xl'>
        {name}
      </h1>
      <h3 className='mb-4 text-sm text-slate-600 dark:text-slate-300'>{enName}</h3>
    </div>
    <div>
      <div className='mb-4 flex items-center'>
        <Image
          src={'/assets/images/star-icon.svg'}
          alt='star'
          className='h-4 w-4'
          width={16}
          height={16}
        />
        <span className='mr-1'>{e2p(rate)}</span>
        <p className='mr-1 whitespace-nowrap text-xs text-neutral-300'>
          (امتیاز ۳۵۵۸ خریدار)
        </p>
      </div>
      <p className='mb-4 text-xl font-bold'>
        {sp(price)}
        <span className='mr-1 text-xs'>تومان</span>
      </p>
      <div className='mb-4'>
        <h5 className='mb-1 font-semibold'>توضیحات</h5>
        <p className='text-sm leading-7 text-slate-700 dark:text-slate-400'>
          {description}
        </p>
      </div>
      <div className='box-border p-2'>
        <h5 className='mb-3 font-semibold'>ویژگی ها</h5>
        <ul className='flex flex-wrap gap-3 lg:grid lg:grid-cols-3'>
          {(
            features as [{ title: string; description: string }]
          )?.map((item) => {
            return (
              <li
                key={item.title}
                className='rounded-md bg-neutral-100 p-2'
              >
                <p className='mb-1 text-sm text-slate-600'>
                  {item.title}
                </p>
                <p className='text-sm font-semibold dark:text-slate-500'>
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
  )
}
