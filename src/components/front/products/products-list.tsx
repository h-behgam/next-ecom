import { products } from '@/constants/products';
import Cart from '../cart';

export default function ProductsList() {
  return (
    <div className='mt-5 flex justify-center gap-x-1 flex-wrap mb-6 sm:mb-0'>
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
  );
}
