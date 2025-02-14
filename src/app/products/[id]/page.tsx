import { e2p } from '@/lib/replace-number';
import Image from 'next/image';
import React from 'react';

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main className='container-home'>
      <h1>SingleProductPage and id is: {(await params).id}</h1>
      <div className="flex">
        <div>
          <Image src={'/assets/images/main-image-product1.webp'} alt='product1' width={500} height={500} />
        </div>


        <div className="flex flex-col grow">
          <div>
            <h1>گوشی موبایل سامسونگ مدل Galaxy A55 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام</h1>
          </div>
          <div></div>
        </div>


        <div className='border rounded-md basis-72 flex flex-col p-3 divide-y'>
          <div className='flex mb-2 items-center'>
            <Image src={'/assets/images/main-image-product1.webp'} alt='product1' width={70} height={70} />
            <p>گوشی موبایل سامسونگ مدل Galaxy A55 دو سیم کارت</p>
          </div>
          <div className='flex flex-col py-2 leading-7'>
            <p>گارانتی ۱۸ ماهه آوات</p>
            <p>موجود در انبار</p>
            <p>{e2p(12000000) }<span className='text-xs'>تومان</span></p>
          </div>
        </div>
      </div>
    </main>
  );
}
