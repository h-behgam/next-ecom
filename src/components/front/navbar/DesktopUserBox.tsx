'use client';
import UserBoxItems from './UserBoxItems';
import UserBoxIcons from './UserBoxIcons';

import { usePathname } from 'next/navigation';

import { useEffect, useState, useRef, useCallback } from 'react';

export default function UserBox({ name }: { name: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // گرفتن مسیر فعلی

  // تابع برای بستن منو هنگام کلیک خارج از آن
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    // بستن منو هنگام تغییر مسیر
    setIsOpen(false);

    // اضافه کردن و حذف رویداد کلیک خارج از منو
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [pathname, handleClickOutside]);

  return (
    <div className='relative p-1' ref={menuRef}>
      <UserBoxIcons setIsOpen={setIsOpen} />

      {isOpen && <UserBoxItems name={name} setIsOpen={setIsOpen} />}
    </div>
  );
}
