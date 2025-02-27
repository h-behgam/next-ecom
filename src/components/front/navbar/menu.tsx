'use client';

import { useEffect, useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

interface Props {
  menus: any;
}

const ResponsiveNavbar = ({ menus }: Props) => {
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
