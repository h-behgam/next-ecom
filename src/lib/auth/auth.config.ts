import { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { NextResponse } from 'next/server';

export default {
  providers: [Credentials],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // مسیرهای محافظت‌ شده را تعریف کنید
      const protectedPaths = ['/dashboard'];
      // مسیر های ورود و ثبت نام را تعریف کنید
      const authRoute = ['/signup', '/signin'];
      // بررسی اینکه کاربر وارد شده یا خیر
      const isLoggedIn = !!auth?.user;

      //بررسی اینکه آیا مسیر محافظت شده است یا خیر
      const isProtected = protectedPaths.some((route) =>
        nextUrl.pathname.startsWith(route),
      );

      //بررسی اینکه آیا مسیر ورود و ثبت نام است یا خیر
      const isAuthRoute = authRoute.some((route) =>
        nextUrl.pathname.startsWith(route),
      );

      // انتقال به مسیر صفحه ورود اگز کاربر وارد نشده بود
      if (isProtected && !isLoggedIn)
        return NextResponse.redirect(new URL('/signin', nextUrl.origin));

      // انتقال به داشبورد اگر وارد مسیر ورود و ثبت نام شد
      if (isAuthRoute && isLoggedIn)
        return NextResponse.redirect(new URL('/dashboard', nextUrl.origin));

      return true;
    },
  },
} satisfies NextAuthConfig;
