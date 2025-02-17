import { menus } from '@/constants/menus';
import DesktopMenu from './desktop-navbar';
import MobileNavbar from './mobile-navbar';

export default function Menu() {

  return (
    <>
      <DesktopMenu menus={menus}/>
      <MobileNavbar menus={menus}/>
    </>
  );
}
