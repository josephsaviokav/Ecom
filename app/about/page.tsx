import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center py-16 px-4">
      <div className="relative max-w-2xl w-full rounded-3xl shadow-2xl border border-gray-200 bg-white/80 backdrop-blur-lg p-10 flex flex-col items-center overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-400/20 to-emerald-400/10 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-emerald-400/20 to-blue-400/10 rounded-full blur-2xl z-0" />
        <h1 className="relative z-10 text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight drop-shadow-lg">
          About Us
        </h1>
        <p className="relative z-10 text-lg text-gray-700 mb-8 text-center max-w-xl">
          Welcome to our e-commerce platform! We are passionate about building modern web experiences with Next.js and Stripe. Our mission is to deliver seamless, beautiful, and high-performance shopping experiences for everyone.
        </p>
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="w-full max-w-md bg-white/90 border border-gray-100 rounded-2xl p-8 shadow-xl flex flex-col items-center backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Connect with me</h2>
            <p className="mb-4 text-gray-600 text-center">Check out my GitHub for more projects and code samples:</p>
            <Link
              href="https://github.com/josephsaviokav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-emerald-600 hover:scale-105 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.302 2.792 7.946 6.653 9.233.486.09.664-.211.664-.47 0-.232-.009-.846-.013-1.66-2.706.588-3.276-1.305-3.276-1.305-.442-1.124-1.08-1.424-1.08-1.424-.883-.604.067-.592.067-.592.977.069 1.492 1.004 1.492 1.004.867 1.486 2.275 1.057 2.832.809.088-.628.34-1.057.618-1.3-2.162-.246-4.437-1.081-4.437-4.814 0-1.063.38-1.933 1.003-2.615-.101-.247-.435-1.24.096-2.586 0 0 .816-.262 2.675 1.001A9.325 9.325 0 0 1 12 6.844c.827.004 1.66.112 2.438.329 1.858-1.263 2.673-1.001 2.673-1.001.533 1.346.199 2.339.098 2.586.624.682 1.002 1.552 1.002 2.615 0 3.742-2.278 4.565-4.447 4.807.35.302.66.897.66 1.808 0 1.306-.012 2.362-.012 2.684 0 .261.176.563.67.468C18.963 19.944 21.75 16.302 21.75 12c0-5.385-4.365-9.75-9.75-9.75z" />
              </svg>
              github.com/josephsaviokav
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}