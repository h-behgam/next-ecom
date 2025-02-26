import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type UserBoxIconsProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export default function UserBoxIcons({ setIsOpen }: UserBoxIconsProps) {
  return (
    <button
      className='flex items-center'
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <Image
        src='/assets/images/user.svg'
        alt='User Icon'
        width={32}
        height={32}
        className='h-8 w-8 dark:invert'
      />
      <Image
        src='/assets/images/icons/chevron-down.svg'
        alt='Chevron'
        width={20}
        height={20}
        className='h-5 w-5 transform transition-transform dark:invert'
      />
    </button>
  );
}
