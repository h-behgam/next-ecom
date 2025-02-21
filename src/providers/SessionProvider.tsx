'use client'; // این فایل باید یک کامپوننت کلاینت باشد

import { SessionProvider } from 'next-auth/react';

export function Providerse({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
