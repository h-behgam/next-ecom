import { Providerse } from '@/providers/SessionProvider';
import { getAllMenus } from '@/actions/menu-action';
import ResponsiveNavbar from './menu';

export default async function Menu() {
  const { menus, error } = await getAllMenus();
  if (error) {
    <p className='text-red-500'>منو یافت نشد</p>;
  }

  return (
    <>
      <Providerse>
        <ResponsiveNavbar menus={menus} />
      </Providerse>
    </>
  );
}
