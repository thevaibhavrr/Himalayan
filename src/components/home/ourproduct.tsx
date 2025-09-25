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
      <header className="mx-auto max-w-5xl px-6 pt-14 pb-12 text-center">
        <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl">
          Our Products
        </h1>
      </header>

      {/* Products */}
      <section className="mx-30 max-w-8xl px-6 space-y-16 pb-24">
        {/* First Product - Left */}
        <article className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-6">
          {/* Image */}
          <div className="flex justify-center order-1 md:order-1">
            <div className="relative">
              <img
                src={PRODUCTS[0].img}   
                alt={`${PRODUCTS[0].name} bottle`}
                className="h-auto w-[200px] md:w-[360px] drop-shadow-lg"
              />
              {/* Floating decorative item */}
              {PRODUCTS[0].floatImg && (
                <img
                  src={PRODUCTS[0].floatImg}
                  alt="decor"
                  className="absolute -top-8 -right-8 h-20 w-20 animate-bounce"
                />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="max-w-md order-2 md:order-2 text-left md:ml-8">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
              {PRODUCTS[0].name}
            </h2>
            <p className="mt-3 text-[18px] leading-8 text-neutral-600 md:text-[20px]">
              {PRODUCTS[0].desc}
            </p>
          </div>
        </article>

        {/* Second Product - Right */}
        <article className="flex flex-col md:flex-row items-center justify-end gap-4 md:gap-6">
          {/* Text */}
          <div className="max-w-md order-2 md:order-1 text-left md:text-right md:mr-8">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
              {PRODUCTS[1].name}
            </h2>
            <p className="mt-3 text-[18px] leading-8 text-neutral-600 md:text-[20px]">
              {PRODUCTS[1].desc}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative">
              <img
                src={PRODUCTS[1].img}
                alt={`${PRODUCTS[1].name} bottle`}
                className="h-auto w-[200px] md:w-[360px] drop-shadow-lg"
              />
              {/* Floating decorative item */}
              {PRODUCTS[1].floatImg && (
                <img
                  src={PRODUCTS[1].floatImg}
                  alt="decor"
                  className="absolute -top-8 -right-8 h-20 w-20 animate-bounce"
                />
              )}
            </div>
          </div>
        </article>

        {/* Third Product - Left */}
        <article className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-6">
          {/* Image */}
          <div className="flex justify-center order-1 md:order-1">
            <div className="relative">
              <img
                src={PRODUCTS[2].img}
                alt={`${PRODUCTS[2].name} bottle`}
                className="h-auto w-[200px] md:w-[360px] drop-shadow-lg"
              />
              {/* Floating decorative item */}
              {PRODUCTS[2].floatImg && (
                <img
                  src={PRODUCTS[2].floatImg}
                  alt="decor"
                  className="absolute -top-8 -right-8 h-20 w-20 animate-bounce"
                />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="max-w-md order-2 md:order-2 text-left md:ml-8">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
              {PRODUCTS[2].name}
            </h2>
            <p className="mt-3 text-[18px] leading-8 text-neutral-600 md:text-[20px]">
              {PRODUCTS[2].desc}
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}