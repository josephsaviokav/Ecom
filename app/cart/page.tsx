"use client";
import { useCartStore } from "@/store/cart";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const { items, clearCart } = useCartStore();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (total === 0 || items.length === 0) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Your cart is empty</h2>
          <p className="mb-6 text-gray-500">Looks like you haven't added anything yet.</p>
          <Button asChild className="px-8 py-2 text-base rounded-full">
            <Link href="/products">Shop Products</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[60vh] bg-gradient-to-b from-white to-gray-50 py-10 px-2 sm:px-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">Checkout</h2>
        <ul className="divide-y divide-gray-200 mb-6">
          {items.map((item) => (
            <li key={item.id} className="flex flex-col sm:flex-row items-center gap-4 py-4">
              {item.imageUrl && (
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-xl border object-cover w-20 h-20"
                />
              )}
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
                  <span className="font-semibold text-lg text-gray-800">{item.name}</span>
                  <span className="text-gray-600 text-base">${item.price} x {item.quantity}</span>
                </div>
              </div>
              <span className="font-bold text-blue-700 text-lg">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6">
          <div className="text-xl font-bold text-gray-900">Total: <span className="text-blue-700">${total.toFixed(2)}</span></div>
          <div className="flex gap-2">
            <Button
              className="px-8 py-2 text-base rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              onClick={async () => {
                const res = await fetch("/api/create-checkout-session", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ items }),
                });
                const data = await res.json();
                if (data.url) {
                  window.location.href = data.url;
                }
              }}
            >
              Proceed to Payment
            </Button>
            <Button variant="outline" className="px-8 py-2 text-base rounded-full" onClick={clearCart}>Clear Cart</Button>
          </div>
        </div>
      </div>
    </main>
  );
}