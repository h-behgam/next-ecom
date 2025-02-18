// import { menus } from '@/constants/menus';
import DesktopMenu from './desktop-navbar';
import MobileNavbar from './mobile-navbar';
import { getAllMenus } from '@/actions/menu-action';

export default async function Menu() {
  const menuss = await getAllMenus();

  return (
    <>
      <DesktopMenu menus={menuss} />
      <MobileNavbar menus={menuss} />
    </>
  );
}
