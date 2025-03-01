import DashboardLayout from '@/components/layout/DashboardLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فروشگاه گجت و لوازم الکترونیکی جدید',
  description: 'ما بهترین تجربه را برای خرید الکترونیکی ارائه می دهیم',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='rtl'>
      <body className={`font-iranSans antialiased`}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
