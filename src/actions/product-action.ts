import PrismaDB from '@/lib/PrismaDB';

export const getAllProducts = async () => {
  try {
    const products = await PrismaDB.products.findMany();

    if (!products)
      return { error: { status: 403, message: 'Products not exist !!!' } };

    return { products };
  } catch (error) {
    console.log('error of getAllProducts is:', error);
    return { error: { status: 500, message: 'خطای سرور' } };
  }
};

export const getProductByID = async (id: number) => {
  try {
    const product = await PrismaDB.products.findFirst({ where: { id } });

    if (!product)
      return { error: { status: 403, message: 'product not exist !!!' } };

    return { product };
  } catch (error) {
    console.log('error of getProductByID is:', error);
    return { error: { status: 500, message: 'خطای سرور' } };
  }
};
