import NextAuth from "next-auth"
import authConfig from "./lib/auth/auth.config"
import { NextRequest } from "next/server"
 
// Use only one of the two middleware options below
// 1. Use middleware directly
export const { auth: middleware } = NextAuth(authConfig)
 
// 2. Wrapped middleware option
// const { auth } = NextAuth(authConfig)
// export default auth(async function middleware(req: NextRequest) {
//   // Your custom middleware logic goes here
// })
export const config = {
  // matcher: ['/dashboard', '/signup'],
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.svg|.png|.ico).*)"],
  // matcher: ["/((?!api|_next/static|_next/image|.png).*)"],
};