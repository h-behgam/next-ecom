import { Product } from '@/types/products-type';
import AddToCart from './add-to-cart';
import ProductImage from './product-image';
import ProductDetails from './product-details';

//{description,enName,features,id,image,name,price,rate,stock}
export default function ProductTemplate({ props }: { props: Product }) {
  return (
    <>
      <ProductImage image={props.image} name={props.name} />
      <ProductDetails
        name={props.name}
        price={props.price}
        enName={props.enName}
        rate={props.rate}
        description={props.description}
        features={props.features}
      />
      <AddToCart image={props.image} name={props.name} price={props.price} />
    </>
  );
}
