'use client';

import { MenuProvider } from '@/context/MenuContext';
import { UserProvider } from '@/context/UserContext';

export default function ContextProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MenuProvider>
      <UserProvider>{children}</UserProvider>
    </MenuProvider>
  );
}
