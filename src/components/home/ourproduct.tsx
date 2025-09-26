// app/page.tsx
import React from "react";

type Product = {
  id: string;
  name: string;
  desc: string;
  img: string;
  floatImg?: string; // optional decorative item
};

const PRODUCTS: Product[] = [
  {
    id: "corn",
    name: "Corn Oil",
    desc: "Light taste and high smoke point—great for everyday frying, sautéing, and baking. Naturally cholesterol-free.",
    img: "https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png",
  },
  {
    id: "vegetable",
    name: "Vegetable Oil",
    desc: "Versatile neutral flavor that lets ingredients shine. Ideal for stir-fry, marinades, and baking recipes.",
    img: "https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png",
  },
  {
    id: "canola",
    name: "Canola Oil",
    desc: "Low saturated fat with a smooth, clean finish. Perfect for salads, grilling, and light frying.",
    img: "https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png",
  },
];

export default function OurProductPage() {
  return (
    <main className="min-h-dvh w-full bg-[#fff9f3]">
      {/* Section header */}
      <header className="mx-auto max-w-5xl px-4 pt-10 pb-8 text-center sm:px-6 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12 lg:px-8">
        <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Our Products
        </h1>
      </header>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 space-y-12 pb-16 sm:px-6 sm:space-y-16 sm:pb-20 lg:px-8 lg:space-y-20 lg:pb-24">
        {/* First Product - Left */}
        <article className="flex flex-col items-center justify-start gap-6 md:flex-row md:gap-8 lg:gap-12">
          {/* Image */}
          <div className="flex justify-center order-1 md:order-1 w-full md:w-auto">
            <div className="relative">
              <img
                src={PRODUCTS[0].img}   
                alt={`${PRODUCTS[0].name} bottle`}
                className="h-auto w-[180px] sm:w-[220px] md:w-[300px] lg:w-[360px] xl:w-[400px] drop-shadow-lg"
              />
              {/* Floating decorative item */}
              {PRODUCTS[0].floatImg && (
                <img
                  src={PRODUCTS[0].floatImg}
                  alt="decor"
                  className="absolute -top-4 -right-4 h-12 w-12 sm:-top-6 sm:-right-6 sm:h-16 sm:w-16 md:-top-8 md:-right-8 md:h-20 md:w-20 animate-bounce"
                />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="max-w-lg order-2 md:order-2 text-center md:text-left md:ml-6 lg:ml-8 w-full">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl">
              {PRODUCTS[0].name}
            </h2>
            <p className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 md:mt-4 md:text-xl md:leading-9">
              {PRODUCTS[0].desc}
            </p>
          </div>
        </article>

        {/* Second Product - Right */}
        <article className="flex flex-col items-center justify-end gap-6 md:flex-row md:gap-8 lg:gap-12">
          {/* Text */}
          <div className="max-w-lg order-2 md:order-1 text-center md:text-right md:mr-6 lg:mr-8 w-full">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl">
              {PRODUCTS[1].name}
            </h2>
            <p className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 md:mt-4 md:text-xl md:leading-9">
              {PRODUCTS[1].desc}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 md:order-2 w-full md:w-auto">
            <div className="relative">
              <img
                src={PRODUCTS[1].img}
                alt={`${PRODUCTS[1].name} bottle`}
                className="h-auto w-[180px] sm:w-[220px] md:w-[300px] lg:w-[360px] xl:w-[400px] drop-shadow-lg"
              />
              {/* Floating decorative item */}
              {PRODUCTS[1].floatImg && (
                <img
                  src={PRODUCTS[1].floatImg}
                  alt="decor"
                  className="absolute -top-4 -right-4 h-12 w-12 sm:-top-6 sm:-right-6 sm:h-16 sm:w-16 md:-top-8 md:-right-8 md:h-20 md:w-20 animate-bounce"
                />
              )}
            </div>
          </div>
        </article>

        {/* Third Product - Left */}
        <article className="flex flex-col items-center justify-start gap-6 md:flex-row md:gap-8 lg:gap-12">
          {/* Image */}
          <div className="flex justify-center order-1 md:order-1 w-full md:w-auto">
            <div className="relative">
              <img
                src={PRODUCTS[2].img}
                alt={`${PRODUCTS[2].name} bottle`}
                className="h-auto w-[180px] sm:w-[220px] md:w-[300px] lg:w-[360px] xl:w-[400px] drop-shadow-lg"
              />
              {/* Floating decorative item */}
              {PRODUCTS[2].floatImg && (
                <img
                  src={PRODUCTS[2].floatImg}
                  alt="decor"
                  className="absolute -top-4 -right-4 h-12 w-12 sm:-top-6 sm:-right-6 sm:h-16 sm:w-16 md:-top-8 md:-right-8 md:h-20 md:w-20 animate-bounce"
                />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="max-w-lg order-2 md:order-2 text-center md:text-left md:ml-6 lg:ml-8 w-full">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl">
              {PRODUCTS[2].name}
            </h2>
            <p className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 md:mt-4 md:text-xl md:leading-9">
              {PRODUCTS[2].desc}
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}