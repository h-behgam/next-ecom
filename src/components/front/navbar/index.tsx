// import { menus } from '@/constants/menus';
import { Providerse } from '@/providers/SessionProvider';
import DesktopMenu from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { getAllMenus } from '@/actions/menu-action';

export default async function Menu() {
  const allMenus = await getAllMenus();
  const { error, menus } = allMenus;
  if (error) {
    <p className='text-red-500'>منو یافت نشد</p>;
  }

  return (
    <>
      <Providerse>
        <DesktopMenu menus={menus!} />
        <MobileNavbar menus={menus!} />
      </Providerse>
    </>
  );
}
