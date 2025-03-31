'use client';

import { CartProvider } from '@/context/CartContext';
import { MenuProvider } from '@/context/MenuContext';
import { UserProvider } from '@/context/UserContext';

export default function ContextProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MenuProvider>
      <CartProvider>
        <UserProvider>{children}</UserProvider>
      </CartProvider>
    </MenuProvider>
  );
}
