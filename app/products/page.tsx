import React from 'react'
import { stripe } from "@/lib/stripe";
import { Stripe } from 'stripe';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    // Remove limit to show all products
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
          All Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.data.map((product) => {
            const price = product.default_price as Stripe.Price | undefined;
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                {product.images && product.images[0] && (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-48 h-48 object-cover rounded-xl mb-4 border"
                  />
                )}
                <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center line-clamp-2 min-h-[3rem]">
                  {product.name}
                </h2>
                {price && price.unit_amount && (
                  <p className="text-lg font-bold text-blue-600 mb-4">
                    ${price.unit_amount / 100}
                  </p>

                )}
                <div className="flex items-center gap-2 my-2">
                  <Button
                    variant="outline"
                    className="w-9 h-9 rounded-full border-2 border-gray-300 text-lg font-bold hover:bg-gray-100 focus:ring-2 focus:ring-blue-400"
                    aria-label="Decrease quantity"
                  >
                    -
                  </Button>
                  <span className="w-8 text-center text-base font-medium select-none">0</span>
                  <Button
                    variant="outline"
                    className="w-9 h-9 rounded-full border-2 border-gray-300 text-lg font-bold hover:bg-gray-100 focus:ring-2 focus:ring-blue-400"
                    aria-label="Increase quantity"
                  >
                    +
                  </Button>
                </div>
                 <Button className="md:px-14 mt-1">
                <Link href="/">
                  Add to Cart
                </Link>
               </Button>
               <p className='text-sm text-gray-600 mt-4'>
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

