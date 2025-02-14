import Image from 'next/image';
import Container from '../ui/container';

export default function FooterLayout() {
  return (
    <footer className='mt-10'>
      <div className='container-home flex flex-col p-main_padding items-center sm:items-stretch'>
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(10rem,10rem))] w-full place-content-center sm:place-content-between py-10 gap-10'>
        <p className='text-xs flex flex-col items-center'><Image src={'/assets/images/footer/cash-on-delivery.svg'} alt='امکان پرداخت در محل' width={56} height={56} />امکان پرداخت در محل</p>
        <p className='text-xs flex flex-col items-center'><Image src={'/assets/images/footer/days-return.svg'} alt='هفت روز ضمانت بازگشت کالا' width={56} height={56} />هفت روز ضمانت بازگشت کالا</p>
        <p className='text-xs flex flex-col items-center'><Image src={'/assets/images/footer/express-delivery.svg'} alt='اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس' width={56} height={56} />اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
        <p className='text-xs flex flex-col items-center'><Image src={'/assets/images/footer/original-products.svg'} alt='ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ' width={56} height={56} />ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
        <p className='text-xs flex flex-col items-center'><Image src={'/assets/images/footer/support.svg'} alt='۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ' width={56} height={56} />۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
        </div>
        <div className='mb-10 flex flex-col items-center gap-y-6 lg:flex-row md:justify-between'>
          <div className='max-w-4xl lg:mb-0 mb-4'>
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
            <ul className='flex gap-3 justify-center lg:justify-end flex-wrap'>
              <li className='border rounded-md p-5'>
                <Image src={'/assets/images/namad/rezi.webp'} alt='logo' width={75} height={75} />
              </li>
              <li className='border rounded-md p-5'>
                <Image src={'/assets/images/namad/kasbokar.webp'} alt='logo' width={75} height={75} />
              </li>
              <li className='border rounded-md p-5'>
                <Image src={'/assets/images/namad/enamad.png'} alt='logo' width={75} height={75} />
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
