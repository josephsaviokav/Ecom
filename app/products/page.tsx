
import { getProducts } from '@/lib/getProducts';
import ProductsClient from './products-client';

export default async function ProductsPage() {
  const productsRaw = await getProducts();
  const products = productsRaw.map((product: any) => {
    let priceObj = product.default_price;
    let default_price: { unit_amount: number } | number = 0;
    if (typeof priceObj === 'object' && priceObj && typeof priceObj.unit_amount === 'number') {
      default_price = { unit_amount: priceObj.unit_amount };
    } else if (typeof priceObj === 'number') {
      default_price = { unit_amount: priceObj };
    }
    return {
      id: product.id,
      name: product.name,
      default_price,
      images: product.images,
      description: product.description,
    };
  });
  return <ProductsClient products={products} />;
}

