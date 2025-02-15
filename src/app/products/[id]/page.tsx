import SubmitFormButton from '@/components/front/submit-form-button';
import { products } from '@/constants/products';
import { e2p, sp } from '@/lib/replace-number';
import Image from 'next/image';
import React from 'react';

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main className='container-home p-main_padding'>
      <div className='flex flex-col items-center gap-y-20 lg:flex-row lg:items-start'>
        {/* product image */}
        <div className='basis-4/12'>
          <Image src={product.image} alt='product1' width={500} height={500} priority/>
        </div>

        {/* product details */}
        <div className='flex basis-5/12 flex-col'>
          <div>
            <h1 className='mb-3 font-semibold lg:text-lg xl:text-xl'>
              {product.name}
            </h1>
            <h3 className='mb-4 text-sm text-slate-600'>{product.enName}</h3>
          </div>
          <div>
            <div className='mb-4 flex items-center'>
              <Image
                src={'/assets/images/star-icon.svg'}
                alt='star'
                className='w-4 h-4'
                width={16}
                height={16}
              />
              <span className='mr-1'>{e2p(product.rate)}</span>
              <p className='mr-1 whitespace-nowrap text-xs text-neutral-300'>
                (امتیاز ۳۵۵۸ خریدار)
              </p>
            </div>
            <p className='mb-4 text-xl font-bold'>
              {sp(product.price)}
              <span className='mr-1 text-xs'>تومان</span>
            </p>
            <div className='mb-4'>
              <h5 className='mb-1 font-semibold'>توضیحات</h5>
              <p className='text-sm leading-7 text-slate-700'>
                {product.description}
              </p>
            </div>
            <div className='box-border p-2'>
              <h5 className='mb-3 font-semibold'>ویژگی ها</h5>
              <ul className='flex flex-wrap gap-3 lg:grid lg:grid-cols-3'>
                {product.features.map((item) => {
                  return (
                    <li
                      key={item.title}
                      className='rounded-md bg-neutral-100 p-2'
                    >
                      <p className='mb-1 text-sm text-slate-600'>
                        {item.title}
                      </p>
                      <p className='text-sm font-semibold'>
                        {item.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* product price */}
        <div className='flex h-full min-w-80 basis-3/12 flex-col rounded-md border bg-slate-50 p-5'>
          <div className='flex items-center border-b pb-6 leading-8'>
            <Image src={product.image} alt='product1' width={70} height={70} />
            <p>{product.name.slice(0, 30)}</p>
          </div>
          <div className='flex flex-col py-4 leading-9'>
            <p className='text-slate-600'>گارانتی ۱۸ ماهه آوات</p>
            <p className='text-slate-600'>موجود در انبار</p>
            <p className='text-left text-xl font-bold'>
              {sp(product.price)}
              <span className='mr-1 text-xs'>تومان</span>
            </p>
          </div>
          <p className='py-4 text-green-500'>۱۰۰۰+ فروش در هفته گذشته</p>
          <div className='pt-5'>
            <SubmitFormButton classname={'bg-rose-500 w-full'}>
              افزودن به سبد
            </SubmitFormButton>
          </div>
        </div>
      </div>
    </main>
  );
}
