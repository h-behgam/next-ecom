// import { menus } from '@/constants/menus';
import DesktopMenu from './desktop-navbar';
import MobileNavbar from './mobile-navbar';
import { getAllMenus } from '@/actions/menu-action';

export default async function Menu() {
  const allMenus = await getAllMenus();
  const { error, menus } = allMenus;
  if (error) {
    <p className='text-red-500'>منو یافت نشد</p>;
  }

  return (
    <>
      <DesktopMenu menus={menus!} />
      <MobileNavbar menus={menus!} />
    </>
  );
}
