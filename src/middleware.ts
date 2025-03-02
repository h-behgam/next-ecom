import NextAuth from 'next-auth';
import authConfig from './lib/auth/auth.config';
// import { NextRequest } from 'next/server';

export const { auth: middleware } = NextAuth(authConfig);
// const { auth } = NextAuth(authConfig)
// export default auth(async function middleware(req: NextRequest) {
// })

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
