
import { getProducts } from '@/lib/getProducts';
import ProductsClient from './products-client';

export default async function ProductsPage() {
  const productsRaw = await getProducts();
  type StripeProduct = {
    id: string;
    name: string;
    default_price?: { unit_amount?: number | null } | number | string | null;
    images: string[];
    description?: string | null;
  };
  const products = productsRaw.map((product: StripeProduct) => {
    const priceObj = product.default_price;
    let default_price: { unit_amount: number } | number = 0;
    if (typeof priceObj === 'object' && priceObj && typeof priceObj.unit_amount === 'number') {
      default_price = { unit_amount: priceObj.unit_amount ?? 0 };
    } else if (typeof priceObj === 'object' && priceObj && priceObj.unit_amount === null) {
      default_price = { unit_amount: 0 };
    } else if (typeof priceObj === 'number') {
      default_price = { unit_amount: priceObj };
    } else if (typeof priceObj === 'string') {
      default_price = { unit_amount: 0 };
    } else {
      default_price = { unit_amount: 0 };
    }
    return {
      id: product.id,
      name: product.name,
      default_price,
      images: product.images,
      description: product.description ?? undefined,
    };
  });
  return <ProductsClient products={products} />;
}

