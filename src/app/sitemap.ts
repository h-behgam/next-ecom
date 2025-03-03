import { getAllProducts } from '@/actions/product-action';

export default async function sitemap() {
  try {
    const products = (await getAllProducts()).products || [];
    const dynamicRoutes = products.map((product) => ({
      url: `http://localhost:3000/products/${product.id}`,
      lastModified: new Date().toDateString(),
    }));

    const staticRoutes = ['', 'products', 'signin', 'signup'];
    const routes = staticRoutes.map((route) => ({
      url: `http://localhost:3000/${route}`,
      lastModified: new Date().toDateString(),
    }));
    return [...routes, ...dynamicRoutes];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
