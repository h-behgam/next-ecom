import SignupTemplate from '@/components/front/auth/signup-form';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ثبت نام',
};

export default function Signup() {
  return (
    <div className='container-home flex items-center justify-center py-20'>
      <SignupTemplate />
    </div>
  );
}
