export type Product = {
  id: number;
  name: string;
  enName: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  rate: number;
  features: { title: string; description: string }[];
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
