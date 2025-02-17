'use client';
import Image from 'next/image';
import { useState } from 'react';
import MobileItems from './mobile-items';
import { cn } from '@/lib/tailwind-helper';

export type MobileMenu = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  menus: Imenu[];
};

export default function MobileNavbar({ menus }: { menus: Imenu[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='relative block h-full md:hidden'>
      <header className='flex items-center justify-between p-4'>
        <a onClick={() => setIsOpen(!isOpen)}>
          <Image
            className='block'
            src={'/assets/images/menu-hamburger.svg'}
            alt='logo'
            width={30}
            height={30}
          />
        </a>
        <a>
          <Image
            className='block'
            src={'/assets/images/user.svg'}
            alt='logo'
            width={30}
            height={30}
          />
        </a>
      </header>
      <div
        className={cn(
          `fixed left-0 h-dvh w-2/3 -translate-x-full transform bg-white shadow-lg transition-transform duration-500 ease-in-out`,
          { 'translate-x-0': isOpen },
        )}
      >
        {isOpen && <MobileItems setIsOpen={setIsOpen} isOpen menus={menus} />}
      </div>
    </div>
  );
}
