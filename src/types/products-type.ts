export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;
};

export interface IBestSellingProducts {
  id: number;
  name: string;
  image: string;
  link: string;
}
