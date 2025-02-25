import './globals.css';

import HeaderLayout from '@/components/layout/header';
import FooterLayout from '@/components/layout/footer';

import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';

import ContextProvidersLayout from '@/providers/ContextProviders';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-iranSans antialiased`}
      >
        <ContextProvidersLayout>
          <HeaderLayout />
          {children}
          <FooterLayout />
        </ContextProvidersLayout>
      </body>
    </html>
  );
}
