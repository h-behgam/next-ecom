import PrismaDB from '@/lib/PrismaDB';

export const getAllCategories = async () => {
  try {
    const categories = await PrismaDB.categories.findMany();

    if (!categories)
      return { error: { status: 403, message: 'Categories not exist !!!' } };

    return { categories };
  } catch (error) {
    console.log('error of getAllMenus is:', error);
    return { error: { status: 500, message: 'خطای سرور' } };
  }
};
