import { products } from '@/constants/products';
import Cart from '../cart';

export default function ProductsList() {
  return (
    <div className='mb-6 mt-5 flex flex-wrap justify-center gap-x-1 sm:mb-0'>
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
