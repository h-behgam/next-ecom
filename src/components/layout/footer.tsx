import Container from "../ui/container";

export default function FooterLayout() {
  return (
    <footer className="">
      <div className="flex flex-col container-home p-main_padding">
        <div className="flex flex-col md:flex-row items-center gap-y-6 md:justify-between mb-10 ">
          <div className="max-w-4xl">
            <h4 className="text-2xl mb-4 text-slate-700">فروشگاه اینترنتی ما بررسی، انتخاب و خرید آنلاین</h4>
            <p>
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در
              مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه
              اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
          </div>
          <div>
            <h4 className="text-xl mb-4">راهنمای خرید</h4>
            <ul className="text-slate-700">
              <li>نحوه ثبت سفارش</li>
              <li>رویه ارسال سفارش</li>
              <li>شیوه‌های پرداخت</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-center">All rights reserved | Designed by Hadi Behgam. 2025</p>
        </div>
      </div>
    </footer>
  );
}
