import PrismaDB from '@/lib/PrismaDB';

export const getAllProducts = async () => {
  try {
    const products = await PrismaDB.products.findMany();

    if (!products)
      return { error: { status: 403, message: 'Products not exist !!!' } };

    return products;
  } catch (error) {
    console.log('error of getAllProducts is:', error);
    return { error: { status: 500, message: 'خطای سرور' } };
  }
};
