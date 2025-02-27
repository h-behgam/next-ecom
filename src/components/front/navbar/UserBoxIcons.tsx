import { MenuContext } from '@/context/MenuContext';
import { UserContext } from '@/context/UserContext';
import Image from 'next/image';
import { useContext } from 'react';

type UserBoxIconsProps = {
  isDesktopMenu: boolean;
};
export default function UserBoxIcons({ isDesktopMenu }: UserBoxIconsProps) {
  // set MenuContext
  const menuContext = useContext(MenuContext);
  if (!menuContext) throw new Error('Menu must be used within an AppProvider');
  const { menuState, menuDispatch } = menuContext;
  // set UserContext
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error('Menu must be used within an AppProvider');
  const { UserState, UserDispatch } = userContext;

  return (
    <button
      className='flex items-center'
      onClick={() => {
        menuDispatch({ type: 'CLOSE_MENU' });
        UserDispatch({ type: 'TOGGLE_USER_MENU' });
        console.log(UserState.isOpen);
      }}
    >
      <Image
        src='/assets/images/user.svg'
        alt='User Icon'
        width={32}
        height={32}
        className='h-8 w-8 dark:invert'
      />
      {isDesktopMenu && (
        <Image
          src='/assets/images/icons/chevron-down.svg'
          alt='Chevron'
          width={20}
          height={20}
          className='h-5 w-5 transform transition-transform dark:invert'
        />
      )}
    </button>
  );
}
