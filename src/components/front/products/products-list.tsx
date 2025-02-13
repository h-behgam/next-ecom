import { products } from '@/constants/products';
import Cart from '../home-page/cart';

export default function ProductsList() {
  return (
    <div className='mt-5 flex justify-center gap-x-1'>
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
