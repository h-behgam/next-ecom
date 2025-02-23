import SubmitFormButton from '@/components/front/submit-form-button';

import Image from 'next/image';

import { e2p, sp } from '@/lib/replace-number';

// import { products } from '@/constants/products';
import { getAllProducts, getProductByID } from '@/actions/product-action';
import { Metadata } from 'next';
import ProductTemplate from '@/components/front/product';

type Props = {
  params: Promise<{ id: string }>;
};

// set the metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const data = await getProductByID(+id);
  const { product } = data;

  return {
    title: product?.name,
  };
}

export async function generateStaticParams() {
  try {
    const products = (await getAllProducts()).products || [];
    return products.map((product) => ({ id: String(product.id) }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function SingleProductPage({ params }: Props) {
  const { id } = await params;

  // const product = products.find((product) => product.id === Number(id));

  const data = await getProductByID(+id);
  const { product, error } = data;

  if (error) return <h1>{error.message}</h1>;
  if (!product) return <h1>Product not found</h1>;

  return (
    <main className='container-home p-main_padding'>
      <div className='flex flex-col items-center gap-y-20 lg:flex-row lg:items-start'>
        

        

        <ProductTemplate props={product} />
      </div>
    </main>
  );
}
