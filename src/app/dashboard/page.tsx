import DashboardTemplate from '@/components/dashboard';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مدیریت',
};

export default function DashboardPage() {
  return (
    <div className='container-home'>
      <DashboardTemplate />
    </div>
  );
}
