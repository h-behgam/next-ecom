import Container from '../ui/container';

export default function FooterLayout() {
  return (
    <footer className='mt-10'>
      <div className='container-home flex flex-col p-main_padding'>
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
          <div>
            <h4 className='mb-4 font-medium text-slate-900 md:text-xl lg:text-2xl'>راهنمای خرید</h4>
            <ul className='text-slate-700'>
              <li>نحوه ثبت سفارش</li>
              <li>رویه ارسال سفارش</li>
              <li>شیوه‌های پرداخت</li>
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
