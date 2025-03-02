import './../globals.css';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { auth } from '@/lib/auth/auth';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'فروشگاه گجت و لوازم الکترونیکی جدید',
  description: 'ما بهترین تجربه را برای خرید الکترونیکی ارائه می دهیم',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session?.user) redirect('/signin');

  return (
    <html lang='en' dir='rtl'>
      <body className={`font-iranSans antialiased`}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
