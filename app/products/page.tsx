
import { getProducts } from '@/lib/getProducts';
import ProductsClient from './products-client';

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductsClient products={products} />;
}

