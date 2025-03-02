import PrismaDB from '@/lib/PrismaDB';
import { Product } from '@/types/products-type';

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

export const createProduct = async (formData: FormData) => {
  const { name, enName, description, image, price, rate, stock } =
    Object.fromEntries(formData) as unknown as Omit<Product, 'id'>;

  // const price2 = Number(price);
  // const rate2 = Number(rate);
  // const stock2 = Number(stock);

  try {
    const product = await PrismaDB.products.create({
      data: {
        name,
        enName,
        description,
        image,
        price: Number(price),
        rate: Number(rate),
        stock: Number(stock),
      },
    });
    if (!product)
      return { error: { status: 403, message: 'محصول اضافه نشد !!!' } };

    return { product };
  } catch (error) {
    console.log('error in create product is: ', { error });
    return { error: { status: 500, message: 'خطای سرور' } };
  }
};

export const deleteById = async (id: number) => {
  try {
    const product = await PrismaDB.products.delete({
      where: { id },
    });
    if (!product)
      return { error: { status: 403, message: 'محصول حذف نشد !!!' } };

    return { product };
  } catch (error) {
    console.log('error in product delete is:', error);
  }
};
