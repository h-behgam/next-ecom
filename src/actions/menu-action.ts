'use server';

import PrismaDB from '@/lib/PrismaDB';

export const getAllMenus = async () => {
  try {
    const menus = PrismaDB.menus.findMany();
    if (!menus) {
      throw new Error('menus not found !!');
    }
    return menus;
  } catch (error) {
    throw new Error('somting Wrong!!');
  }
};
