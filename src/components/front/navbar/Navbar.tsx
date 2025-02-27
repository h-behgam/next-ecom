import { Providerse } from '@/providers/SessionProvider';
import { getAllMenus } from '@/actions/menu-action';
import ResponsiveNavbar from './ResponsiveNavbar';

export default async function Navbar() {
  const { menus, error } = await getAllMenus();
  if (error) {
    return <p className='text-red-500'>منو یافت نشد</p>;
  }

  return (
    <>
      <Providerse>
        <ResponsiveNavbar menus={menus} />
      </Providerse>
    </>
  );
}
