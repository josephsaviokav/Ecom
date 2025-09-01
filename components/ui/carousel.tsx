'use client'
import React from 'react'
import Stripe from 'stripe'
import { Card,CardContent, CardTitle } from './card'
import Image from 'next/image'
// import { Car } from 'lucide-react'
interface props{
    products: Stripe.Product[],
}
export const Carousel = ({ products }: props) => {
  return (
    <div className="flex gap-6 overflow-x-auto scrollbar-hide py-2">
      {products.map((product) => {
        const price = product.default_price as Stripe.Price | undefined;
        return (
          <Card key={product.id} className="min-w-[320px] max-w-xs flex-shrink-0">
            {product.images && product.images[0] && (
              <Image
                src={product.images[0]}
                alt={product.name}
                width={450}
                height={450}
                className="object-cover rounded-lg -mt-0"
              />
            )}
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              {price && price.unit_amount && (
                <p className="text-lg font-semibold mt-2">
                  ${price.unit_amount / 100} 
                </p>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

