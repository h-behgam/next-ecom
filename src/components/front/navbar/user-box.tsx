'use client'; // اجباری برای کامپوننت‌های کلاینتی

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
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
    <div className='relative p-2' ref={menuRef}>
      <button
        className='flex items-center justify-end'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          src='/assets/images/user.svg'
          alt='User Icon'
          width={30}
          height={30}
        />
        <Image
          src='/assets/images/icons/chevron-down.svg'
          alt='Chevron'
          width={20}
          height={20}
          className='h-5 w-5 transform transition-transform'
        />
      </button>

      {isOpen && (
        <div className='absolute left-0 w-52 rounded-lg bg-white p-6 shadow-lg'>
          <ul className='divide-y'>
            <li className='pb-3'>{name}</li>
            <li className='py-3'>
              <Link className='flex items-center gap-x-6' href='/dashboard'>
                <Image
                  src='/assets/images/icons/admin.svg'
                  alt='Dashboard'
                  width={24}
                  height={24}
                />
                پنل مدیریت
              </Link>
            </li>
            <li className='pt-3'>
              <button
                className='flex w-full items-center gap-x-6 text-left'
                onClick={() => {
                  setIsOpen(false);
                  signOut();
                }}
              >
                <Image
                  src='/assets/images/icons/signout.svg'
                  alt='Sign Out'
                  width={24}
                  height={24}
                />
                خروج
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

// import { signOut } from 'next-auth/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function UserBox({ name }: { name: string }) {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const router = useRouter()

//   const userBpxHandler = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className='relative p-2'>
//       <a className='flex items-center justify-end' onClick={userBpxHandler}>
//         <Image
//           className='block'
//           src={'/assets/images/user.svg'}
//           alt='logo'
//           width={30}
//           height={30}
//         />
//         <Image
//           src='/assets/images/icons/chevron-down.svg'
//           alt='chevron-down'
//           width={20}
//           height={20}
//           className={`transition-transform} h-5 w-5 transform`}
//         />
//       </a>
//       {isOpen && (
//         <div className='absolute left-0 w-52 rounded-lg p-6 shadow-lg'>
//           <ul className='divide-y'>
//             <li className='pb-3'>{name}</li>
//             <li className='py-3'>
//               <Link
//                 className='flex cursor-pointer items-center gap-x-6'
//                 href={'/dashboard'}
//                 onClick={() => {
//                   setIsOpen(false);
//                 }}
//               >
//                 <Image
//                   src={'/assets/images/icons/admin.svg'}
//                   alt='signOut'
//                   width={24}
//                   height={24}
//                   className='h-6 w-6'
//                 />
//                 پنل مدیریت
//               </Link>
//             </li>
//             <li className='pt-3'>
//               <a
//                 className='flex cursor-pointer items-center gap-x-6'
//                 onClick={() => {
//                   setIsOpen(false);
//                   signOut();
//                 }}
//               >
//                 <Image
//                   src={'/assets/images/icons/signout.svg'}
//                   alt='signOut'
//                   width={24}
//                   height={24}
//                   className='h-6 w-6'
//                 />
//                 <span>خروج</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
