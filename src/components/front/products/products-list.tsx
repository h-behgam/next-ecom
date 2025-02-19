import Cart from '../cart';

import { getAllProducts } from '@/actions/product-action';

export default async function ProductsList() {
  const allProducts = await getAllProducts();
  const { products, error } = allProducts;
  return (
    <div className='mb-6 mt-5 flex flex-wrap justify-center gap-x-1 sm:mb-0'>
      {error && <p className='text-red-600'>محصولی یافت نشد</p>}
      {products?.map((product) => {
        return (
          <Cart
            id={product.id}
            description={product.description}
            price={product.price}
            image={product.image}
            key={product.id}
            isHomePage={false}
          />
        );
      })}
    </div>
  );
}
