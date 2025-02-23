import { Prisma } from "@prisma/client";

export type Product = {
  id: number;
  name: string;
  enName: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  rate: number;
  features: { title: string; description: string }[]| Prisma.JsonValue;
};

export interface IBestSellingProducts {
  id: number;
  name: string;
  image: string;
  link: string;
}

export interface IBrands {
  id: number;
  name: string;
  image: string;
  link: string;
}

export type ProductImageProps = Omit<
Product,
'id' | 'stock' | 'features' | 'rate' | 'enName' | 'description' | 'price'
>;

export type AddToCartProps = Omit<
Product,
'id' | 'stock' | 'features' | 'rate' | 'enName' | 'description'
>;

export type ProductDetailsProps = Omit<
Product,
'id' | 'stock'   | 'image' 
>;