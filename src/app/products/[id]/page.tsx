import SubmitFormButton from '@/components/front/submit-form-button';
import { e2p, sp } from '@/lib/replace-number';
import Image from 'next/image';
import React from 'react';

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main className='container-home p-main_padding'>
      <h1>SingleProductPage and id is: {(await params).id}</h1>
      <div className='flex flex-col items-center gap-y-20 lg:flex-row lg:items-start'>
        {/* product image */}
        <div className='basis-4/12'>
          <Image
            src={'/assets/images/main-image-product1.webp'}
            alt='product1'
            width={500}
            height={500}
          />
        </div>

        {/* product details */}
        <div className='flex basis-5/12 flex-col'>
          <div>
            <h1 className='mb-3 font-semibold lg:text-lg xl:text-xl'>
              گوشی موبایل سامسونگ مدل Galaxy A55 دو سیم کارت ظرفیت 256 گیگابایت
              و رم 8 گیگابایت - ویتنام
            </h1>
            <h3 className='mb-4 text-sm text-slate-600'>
              Samsung Galaxy A55 Dual SIM 256GB And 8GB RAM Mobile Phone
            </h3>
          </div>
          <div>
            <div className='mb-4 flex items-center'>
              <Image
                src={'/assets/images/star-icon.svg'}
                alt='star'
                className=''
                width={16}
                height={16}
              />
              <span className='mr-1'>{e2p(4.36)}</span>
              <p className='mr-1 whitespace-nowrap text-xs text-neutral-300'>
                (امتیاز ۳۵۵۸ خریدار)
              </p>
            </div>
            <p className='mb-4 text-xl font-bold'>
              {sp(14000000)}
              <span className='mr-1 text-xs'>تومان</span>
            </p>
            <div className='mb-4'>
              <h5 className='mb-1 font-semibold'>توضیحات</h5>
              <p className='text-sm leading-7 text-slate-700'>
                وشی موبایل سامسونگ مدل Galaxy A55 نسخه‌ی به روزشده‌ی میان‌رده‌ی
                محبوب A54 محسوب می‌شود. این گوشی با بهره‌مندی از نمایشگر 6.6
                اینچی Super AMOLED با کیفیت با نرخ تازه‌سازی 120 فریم برثانیه
              </p>
            </div>
            <div className='box-border p-2'>
              <h5 className='mb-3 font-semibold'>ویژگی ها</h5>
              <ul className='flex flex-wrap gap-3 lg:grid lg:grid-cols-3'>
                <li className='rounded-md bg-neutral-100 p-2'>
                  <p className='mb-1 text-sm text-slate-600'>
                    فناوری صفحه‌ نمایش
                  </p>
                  <p className='text-sm font-semibold'>Super AMOLED</p>
                </li>
                <li className='rounded-md bg-neutral-100 p-2'>
                  <p className='mb-1 text-sm text-slate-600'>نسخه سیستم عامل</p>
                  <p className='text-sm font-semibold'>Android 14</p>
                </li>
                <li className='rounded-md bg-neutral-100 p-2'>
                  <p className='mb-1 text-sm text-slate-600'>
                    رزولوشن دوربین اصلی
                  </p>
                  <p className='text-sm font-semibold'>50 مگاپیکسل</p>
                </li>
                <li className='rounded-md bg-neutral-100 p-2'>
                  <p className='mb-1 text-sm text-slate-600'>اندازه</p>
                  <p className='text-sm font-semibold'>6.6</p>
                </li>
                <li className='rounded-md bg-neutral-100 p-2'>
                  <p className='mb-1 text-sm text-slate-600'>اقلام همراه</p>
                  <p className='text-sm font-semibold'>
                    دفترچه‌ راهنما، کابل USB
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* product price */}
        <div className='flex h-full min-w-80 basis-3/12 flex-col rounded-md border bg-slate-50 p-5'>
          <div className='flex items-center border-b pb-6 leading-9'>
            <Image
              src={'/assets/images/main-image-product1.webp'}
              alt='product1'
              width={70}
              height={70}
            />
            <p>گوشی موبایل سامسونگ مدل Galaxy A55 دو سیم کارت</p>
          </div>
          <div className='flex flex-col py-4 leading-9'>
            <p className='text-slate-600'>گارانتی ۱۸ ماهه آوات</p>
            <p className='text-slate-600'>موجود در انبار</p>
            <p className='text-left text-xl font-bold'>
              {sp(12000000)}
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
