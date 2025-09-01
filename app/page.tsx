import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/ui/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 3,
  });

  return (
    <div>
      <section className="rounded bg-neutral-100 py-6 sm:py-10">
        <div className="mx-auto flex flex-col-reverse md:grid md:grid-cols-2 items-center justify-items-center gap-6 sm:gap-10 px-3 sm:px-6 md:px-12">
          <div className="w-full max-w-md space-y-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Welcome to <span className="text-blue-600">My Ecommerce</span>
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg">
              Discover the latest products at the best prices.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 sm:px-6 sm:py-3 bg-black text-white text-base sm:text-lg mt-2"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 sm:px-6 sm:py-3"
              >
                Browse All Products
              </Link>
            </Button>
          </div>

          <div className="flex justify-center items-center w-full mb-4 md:mb-0">
            <Image
              alt="Hero Image"
              src="/ecom1.png"
              className="rounded object-cover w-40 h-40 sm:w-64 sm:h-64 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]"
              width={350}
              height={350}
              priority
            />
          </div>
        </div>
      </section>
      <section className="mt-10 sm:mt-14 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center tracking-tight">
          Featured Products
        </h2>
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-3 sm:p-6 md:p-10 border border-gray-100">
          <Carousel products={products.data} />
        </div>
      </section>
      {/* <section className="py-8">
        <Carousel products={products.data} />
      </section> */}
    </div>
  );
}