import Image from 'next/image';

export default function FooterLayout() {
  return (
    <footer className='mt-10'>
      <div className='container-home flex flex-col items-center p-main_padding sm:items-stretch'>
        <div className='grid w-full grid-cols-[repeat(auto-fit,_minmax(10rem,10rem))] place-content-center gap-10 py-10 sm:place-content-between'>
          <p className='flex flex-col items-center text-xs'>
            <Image
              src={'/assets/images/footer/cash-on-delivery.svg'}
              alt='امکان پرداخت در محل'
              width={56}
              height={56}
              className='w-14 h-14'
            />
            امکان پرداخت در محل
          </p>
          <p className='flex flex-col items-center text-xs'>
            <Image
              src={'/assets/images/footer/days-return.svg'}
              alt='هفت روز ضمانت بازگشت کالا'
              width={56}
              height={56}
              className='w-14 h-14'
            />
            هفت روز ضمانت بازگشت کالا
          </p>
          <p className='flex flex-col items-center text-xs'>
            <Image
              src={'/assets/images/footer/express-delivery.svg'}
              alt='اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس'
              width={56}
              height={56}
              className='w-14 h-14'
            />
            اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس
          </p>
          <p className='flex flex-col items-center text-xs'>
            <Image
              src={'/assets/images/footer/original-products.svg'}
              alt='ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ'
              width={56}
              height={56}
              className='w-14 h-14'
            />
            ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ
          </p>
          <p className='flex flex-col items-center text-xs'>
            <Image
              src={'/assets/images/footer/support.svg'}
              alt='۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ'
              width={56}
              height={56}
              className='w-14 h-14'
            />
            ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ
          </p>
        </div>
        <div className='mb-10 flex flex-col items-center gap-y-6 md:justify-between lg:flex-row'>
          <div className='mb-4 max-w-4xl lg:mb-0'>
            <h4 className='mb-4 font-medium text-slate-900 md:text-xl lg:text-2xl'>
              فروشگاه اینترنتی ما بررسی، انتخاب و خرید آنلاین
            </h4>
            <p>
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
          </div>
          <div className='w-full min-w-fit'>
            <ul className='flex flex-wrap justify-center gap-3 lg:justify-end'>
              <li className='rounded-md border p-5'>
                <Image
                  src={'/assets/images/namad/rezi.webp'}
                  alt='logo'
                  width={75}
                  height={75}
                  className='w-[75] h-[75]'
                />
              </li>
              <li className='rounded-md border p-5'>
                <Image
                  src={'/assets/images/namad/kasbokar.webp'}
                  alt='logo'
                  width={75}
                  height={75}
                  className='w-[75] h-[75]'
                />
              </li>
              <li className='rounded-md border p-5'>
                <Image
                  src={'/assets/images/namad/enamad.png'}
                  alt='logo'
                  width={75}
                  height={75}
                  className='w-[75] h-[75]'
                />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className='text-center'>
            All rights reserved | Designed by Hadi Behgam. 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
