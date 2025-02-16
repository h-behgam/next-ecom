import Image from 'next/image';
import Link from 'next/link';

export default function MobileNavbar() {
  return (
    <div className='block h-full md:hidden'>
      <header className='flex justify-between items-center p-4'>
        <Image className='block' src={'/assets/images/menu-hamburger.svg'} alt='logo' width={30} height={30} />
        <Image className='block' src={'/assets/images/user.svg'} alt='logo' width={30} height={30} />
      </header>
      <div>
        <ul className='flex gap-x-3'>
          <li>
            <Link href={'/'} className='block p-4'>
              خانه
            </Link>
          </li>
          <li>
            <Link href={'/products'} className='block p-4'>
              محصولات
            </Link>
          </li>
          <li>
            <Link href={'/'} className='block p-4'>
              تماس باما
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
