'use client';

import { MenuProvider } from '@/context/MenuContext';

export default function ContextProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MenuProvider>{children}</MenuProvider>;
}
