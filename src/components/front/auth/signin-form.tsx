import Link from 'next/link';
import CustomInput from '../custom-input';
import ClientButton from '../client-button';

export default function SigninTemplate() {
  const formHandler = async (formData: FormData) => {};
  return (
    <div className='mx-auto w-full max-w-md'>
      <div className='mb-6 text-center'>
        <h2 className='text-3xl font-bold'>ورود</h2>
        <p>لطفا نام کاربری و رمز عبور خود را وارد کنید.</p>
      </div>
      <form
        className=''
        //   action={formHandler}
      >
        <div className='mb-2 p-1'>
          <CustomInput
            name='username'
            type='text'
            placeholder='نام کاربری'
            labalName='username'
            labelTitle='نام کاربری'
            autoComplete='autoComplete'
            labelClassName='mb-1 block'
          />
        </div>
        <div className='mb-2 p-1'>
          <CustomInput
            name='password'
            type='text'
            placeholder='رمز عبور'
            labalName='password'
            labelTitle='رمز عبور'
            labelClassName='mb-1 block'
          />
        </div>
        {/* <div className='mb-2 text-right'>
          <Link
            href={'/forgot-password'}
            className='text-sm text-indigo-700 hover:text-indigo-600'
          >
            رمز عبور خود را فراموش کردید
          </Link>
        </div> */}
        <div>
          <ClientButton className='w-full rounded-md bg-slate-50 p-3 font-bold' disabled={false}>ورود</ClientButton>
        </div>
      </form>
      <p className='mt-4 text-center'>
        حساب کاربری ندارید ؟ <span className='font-semibold text-blue-800'><Link href={'/signup'}>ثبت نام</Link></span>
      </p>
    </div>
  );
}
