'use client';
import Link from 'next/link';
import CustomInput from '../custom-input';
import ClientButton from '../client-button';
import { addUser } from '@/actions/auth-action';
import { useRef, useState } from 'react';
import { Isignup, IsignupError } from '@/types/auth-type';
import { toast, ToastContainer } from 'react-toastify';

export default function SignupTemplate() {
  const ref = useRef<HTMLFormElement>(null);
  const [field, setField] = useState<
    Omit<Isignup, 'password' | 'confirmPassword'>
  >({ name: '', username: '' });
  const [error, setError] = useState<IsignupError>({
    name: [],
    username: [],
    password: [],
    confirmPassword: [],
    confirm: [],
  });
  const formHandler = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const username = formData.get('username') as string;
    const { id, error } = await addUser(formData);

    // throw error if user not added
    if (error) {
      setField({ name, username });
      toast.error(error.message);
    }
    if (error?.zodMessage) setError(error.zodMessage);

    if (id) {
      toast.success('حساب شما ایجاد شد.');
      ref.current?.reset();
    }
  };

  return (
    <div className='mx-auto w-full max-w-3xl border-zinc-800 dark:rounded-lg dark:border dark:p-4'>
      <ToastContainer />
      <div className='mb-6 text-center'>
        <h2 className='mb-4 text-xl font-bold'>ابتدا ثبت نام کنید.</h2>
        <p>لطفا فیلد ها رو به صورت صحیح وارد کنید</p>
      </div>

      <form className='' action={formHandler} ref={ref}>
        <div className='mb-2 p-1'>
          <CustomInput
            name='name'
            type='text'
            placeholder='نام'
            labalName='name'
            labelTitle='نام'
            autoComplete='autoComplete'
            labelClassName='mb-1 block'
            defaultValue={field.name}
          />
          {error.name && <p className='text-red-600'>{error.name}</p>}
        </div>
        <div className='mb-2 p-1'>
          <CustomInput
            name='username'
            type='text'
            placeholder='نام کاربری'
            labalName='username'
            labelTitle='نام کاربری'
            autoComplete='autoComplete'
            labelClassName='mb-1 block'
            defaultValue={field.username}
          />
          {error.username && <p className='text-red-600'>{error.username}</p>}
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
          {error.password && <p className='text-red-600'>{error.password}</p>}
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
          {error.confirmPassword && (
            <p className='text-red-600'>{error.confirmPassword}</p>
          )}
        </div>
        {error.confirm && <p className='text-red-600'>{error.confirm}</p>}
        <div className='mt-10 p-1'>
          <ClientButton
            className='w-full rounded-md bg-slate-50 p-3 font-bold dark:text-slate-800'
            disabled={false}
          >
            ثبت نام
          </ClientButton>
        </div>
      </form>
      <p className='my-4 text-center'>
        از قبل اکانت دارید؟{' '}
        <span className='font-semibold text-blue-800 dark:text-sky-500'>
          <Link href={'/signin'}>ورود</Link>
        </span>
      </p>
    </div>
  );
}
