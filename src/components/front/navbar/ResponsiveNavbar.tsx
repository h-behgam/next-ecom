'use client';

import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

import { useEffect, useState } from 'react';

import { Imenu } from '@/types/menu-type';

const ResponsiveNavbar = ({ menus }: { menus: Imenu[] }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // مقدار اولیه
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile ? (
    <MobileNavbar menus={menus} />
  ) : (
    <DesktopNavbar menus={menus} />
  );
};

export default ResponsiveNavbar;
