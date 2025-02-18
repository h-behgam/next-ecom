'use server';

import PrismaDB from '@/lib/PrismaDB';

export const getAllMenus = async () => {
  try {
    const menus = await PrismaDB.menus.findMany();
    if (!menus)
      return { error: { status: 403, message: 'Menu not exist !!!' } };

    return { menus };
  } catch (error) {
    console.log('error of getAllMenus is:', error);
    return { error: { status: 500, message: 'خطای سرور' } };
  }
};
