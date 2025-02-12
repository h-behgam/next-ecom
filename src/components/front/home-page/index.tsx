import Amazings from './amazings';
import BestSellingProducts from './best-selling-products';
import BuyByCategory from './buy-by-category';

export default function HomePageTemplate() {
  return (
    <>
      <Amazings />
      <BuyByCategory />
      <BestSellingProducts />
    </>
  );
}
