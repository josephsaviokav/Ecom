
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="font-mono">
        <Link href="/" className="font-bold text-2xl text-teal-600 hover:text-teal-800 transition-colors">
          My Ecommerce
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex gap-50 items-center">
          <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
            About
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <Link href="/cart" className="flex items-center gap-1 text-gray-700 hover:text-rose-600 font-medium transition-colors">
          <span>Cart</span>
          <ShoppingCart size={18} className="ml-1" />
        </Link>
      </div>
    </nav>
  );
};
