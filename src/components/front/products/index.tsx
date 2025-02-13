import { products } from '@/constants/products';
import Cart from '../home-page/cart';

export default function ProductsTemplate() {
  return (
    <>
      <div className='flex gap-x-1 justify-center mt-5'>
        {products?.map((product) => {
          return (
            <Cart
              description={product.description}
              price={product.price}
              image={product.image}
              key={product.id}
              isHomePage={false}
            />
          );
        })}
      </div>
    </>
  );
}
