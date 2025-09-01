"use client";
import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useCartStore } from '@/store/cart';
import { Stripe } from 'stripe';


interface ProductType {
  id: string;
  name: string;
  default_price: { unit_amount: number } | number;
  images: string[];
  description?: string;
}

interface ProductsClientProps {
  products: ProductType[];
}

export default function ProductsClient({ products }: ProductsClientProps) {
  const { items, addItem } = useCartStore();
  const [quantities, setQuantities] = React.useState<{ [id: string]: number }>({});

  const handleQuantityChange = (productId: string, delta: number) => {
    setQuantities((prev) => {
      const next = { ...prev, [productId]: Math.max(0, (prev[productId] || 0) + delta) };
      return next;
    });
  };

  const handleAddToCart = (product: { id: string; name: string; default_price: { unit_amount: number } | number; images: string[] }) => {
    const quantity = quantities[product.id] || 0;
    if (quantity > 0) {
      addItem({
        id: product.id,
        name: product.name,
        price: typeof product.default_price === 'object' && product.default_price.unit_amount ? product.default_price.unit_amount / 100 : 0,
        quantity,
        imageUrl: product.images[0] || null,
      });
      setQuantities((prev) => ({ ...prev, [product.id]: 0 }));
    }
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-8 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-10 text-center tracking-tight">
          All Products
        </h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product: ProductType) => {
            const cartItem = items.find((item: { id: string }) => item.id === product.id);
            // const quantity = cartItem?.quantity || 0;
            const price = product.default_price as Stripe.Price | undefined;
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 border border-gray-100 w-full max-w-xs mx-auto"
              >
                {product.images && product.images[0] && (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={192}
                    height={192}
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-xl mb-3 sm:mb-4 border"
                  />
                )}
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 text-center line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                  {product.name}
                </h2>
                {price && price.unit_amount && (
                  <p className="text-base sm:text-lg font-bold text-blue-600 mb-2 sm:mb-4">
                    ${price.unit_amount / 100}
                  </p>
                )}
                <div className="flex items-center gap-2 my-1 sm:my-2">
                  <Button
                    variant="outline"
                    className="w-9 h-9 rounded-full border-2 border-gray-300 text-lg font-bold hover:bg-gray-100 focus:ring-2 focus:ring-blue-400"
                    aria-label="Decrease quantity"
                    onClick={() => handleQuantityChange(product.id, -1)}
                    disabled={(quantities[product.id] || 0) === 0}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center text-base font-medium select-none">{quantities[product.id] || 0}</span>
                  <Button
                    variant="outline"
                    className="w-9 h-9 rounded-full border-2 border-gray-300 text-lg font-bold hover:bg-gray-100 focus:ring-2 focus:ring-blue-400"
                    aria-label="Increase quantity"
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  className="w-full md:px-14 mt-1"
                  onClick={() => handleAddToCart(product)}
                  disabled={(quantities[product.id] || 0) === 0}
                >
                  Add to Cart
                </Button>
                <p className='text-xs sm:text-sm text-gray-600 mt-2 sm:mt-4 text-center'>
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}