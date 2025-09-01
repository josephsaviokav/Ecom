"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import React from "react";

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="w-full bg-white shadow-md py-3 px-4 sm:px-6 flex items-center justify-between relative z-20">
      <div className="font-mono">
        <Link href="/" className="font-bold text-xl sm:text-2xl text-teal-600 hover:text-teal-800 transition-colors">
          My Ecommerce
        </Link>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex gap-8 items-center">
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
      {/* Cart */}
      <div className="flex items-center">
        <Link href="/cart" className="flex items-center gap-1 text-gray-700 hover:text-rose-600 font-medium transition-colors">
          <span>Cart</span>
          <ShoppingCart size={18} className="ml-1" />
        </Link>
        {/* Hamburger */}
        <button
          className="ml-3 flex md:hidden items-center justify-center p-2 rounded hover:bg-gray-100 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>
      </div>
      {/* Mobile Nav */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 gap-4 md:hidden animate-fade-in z-30">
          <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors w-full text-center" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-teal-600 font-medium transition-colors w-full text-center" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors w-full text-center" onClick={() => setOpen(false)}>
            About
          </Link>
        </div>
      )}
    </nav>
  );
};
