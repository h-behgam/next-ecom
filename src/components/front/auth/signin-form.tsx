'use client';
import CustomInput from '../custom-input';
import ClientButton from '../client-button';

import { SigninUser } from '@/zod/auth';
import { IsigninError } from '@/types/auth-type';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import { redirect } from 'next/navigation';

export default function SigninTemplate() {
  const [field, setField] = useState(String);
  const [zodError, setZodError] = useState<IsigninError>({
    username: [],
    password: [],
  });

  const formHandler = async (formData: FormData) => {
    // reset zod
    setZodError({ username: [], password: [] });
    setField('');
    // zod validation
    const { data, error } = await SigninUser.safeParseAsync(
      Object.fromEntries(formData),
    );

    // throw error if faced
    if (error) {
      setZodError(error.flatten().fieldErrors);
      setField(formData.get('username') as string);
      return;
    }

    // destructure data
    if (data) {
      const { username, password } = data!;

      const user = await signIn('credentials', {
        username,
        password,
        redirect: false,
        // redirectTo: '/'
      });
      if (user?.error === 'CredentialsSignin') {
        toast.error('اطلاعات وارد شده صحیح نمی باشد');
        setField(formData.get('username') as string);
        return;
      }
      toast.success('وارد شدید.');
      redirect('/');
    }
  };
  return (
    <div className='mx-auto w-full max-w-3xl border-zinc-800 dark:rounded-lg dark:border dark:p-4'>
      <ToastContainer />
      <div className='mb-6 text-center'>
        <h2 className='mb-4 text-3xl font-bold'>ورود</h2>
        <p>لطفا نام کاربری و رمز عبور خود را وارد کنید.</p>
      </div>
      <form className='' action={formHandler}>
        <div className='mb-2 p-1'>
          <CustomInput
            name='username'
            type='text'
            placeholder='نام کاربری'
            labalName='username'
            labelTitle='نام کاربری'
            autoComplete='autoComplete'
            labelClassName='mb-1 block'
            defaultValue={field}
          />
          {zodError.username && (
            <p className='text-red-600'>{zodError.username}</p>
          )}
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
          {zodError.password && (
            <p className='text-red-600'>{zodError.password}</p>
          )}
        </div>
        {/* <div className='mb-2 text-right'>
          <Link
            href={'/forgot-password'}
            className='text-sm text-indigo-700 hover:text-indigo-600'
          >
            رمز عبور خود را فراموش کردید
          </Link>
        </div> */}
        <div className='mt-10 p-1'>
          <ClientButton
            className='w-full rounded-md bg-slate-50 p-3 font-bold dark:text-slate-800'
            disabled={false}
          >
            ورود
          </ClientButton>
        </div>
      </form>
      <p className='my-4 text-center'>
        حساب کاربری ندارید ؟{' '}
        <span className='font-semibold text-blue-800 dark:text-sky-500'>
          <Link href={'/signup'}>ثبت نام</Link>
        </span>
      </p>
    </div>
  );
}
