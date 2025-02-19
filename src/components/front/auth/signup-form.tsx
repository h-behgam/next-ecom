import Link from 'next/link';
import CustomInput from '../custom-input';
import ClientButton from '../client-button';

export default function SignupTemplate() {
  const formHandler = async (formData: FormData) => {};

  return (
    <div className='mx-auto w-full max-w-md'>
      <div className='mb-6 text-center'>
        <h2 className='text-xl font-bold'>ابتدا ثبت نام کنید.</h2>
        <p>لطفا فیلد ها رو به صورت صحیح وارد کنید</p>
      </div>
      <form
        className=''
        // action={formHandler}
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
        <div className='mb-2 p-1'>
          <CustomInput
            name='confirmPassword'
            type='text'
            placeholder='تکرار رمز عبور'
            labalName='confirmPassword'
            labelTitle='تکرار رمز عبور'
            labelClassName='mb-1 block'
          />
        </div>
        <div>
          <ClientButton
            className='w-full rounded-md bg-slate-50 p-3 font-bold'
            disabled={false}
          >
            ثبت نام
          </ClientButton>
        </div>
      </form>
      <p className='mt-4 text-center'>
        از قبل اکانت دارید؟{' '}
        <span className='font-semibold text-blue-800'>
          <Link href={'/signin'}>ورود</Link>
        </span>
      </p>
    </div>
  );
}
