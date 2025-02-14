import Brands from "./brands";
import ProductsList from "./products-list";


export default function ProductsTemplate() {
  return (
    <>
      <ProductsList />
      <Brands />
      <ProductsList />
    </>
  );
}
