import SigninTemplate from '@/components/front/auth/signin-form';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ورود',
};

export default function Signin() {
  return (
    <div className='container-home flex items-center justify-center py-20'>
      <SigninTemplate />
    </div>
  );
}
