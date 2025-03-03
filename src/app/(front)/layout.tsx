import './../globals.css';

import type { Metadata } from 'next';

import ContextProvidersLayout from '@/providers/ContextProviders';

import FrontLayout from '@/components/layout/FrontLayout';

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
        <ContextProvidersLayout>
          <FrontLayout>{children}</FrontLayout>
        </ContextProvidersLayout>
      </body>
    </html>
  );
}
