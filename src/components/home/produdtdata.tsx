
"use client";

import React from "react";

export default function ProductShowcase() {
  return (
    <main className="relative mx-auto flex max-w-8xl h-200 flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:flex-row md:gap-12 lg:gap-16 lg:px-8 lg:py-20 xl:max-w-10xl">
      {/* Dark Green Circle */}
      <div className="absolute -top-15 -left-20 w-50 h-50 bg-green-800 rounded-full z-0"></div>
      <div className="absolute top-8 left-15 w-100 h-50 bg-white-800 z-0 text-4xl font-extrabold leading-none text-black ">Heart-Healthy</div>

      {/* Product section */}
      <section className="relative flex w-full items-center justify-center md:w-1/2">
        <img
          src="https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png"
          alt="Mazola Oil Bottles"
          width={900}
          height={900}
          priority
          className="h-auto w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[550px] xl:max-w-[600px]"
        />
      </section>

      {/* Text section */}
      <section className="relative w-full md:w-1/2">
        {/* Watermark background text */}
        <h2
          className="pointer-events-none select-none absolute -top-4 left-0 -z-10 
                     text-4xl font-extrabold leading-none text-neutral-100 
                     sm:-top-6 sm:text-5xl md:-top-8 md:text-6xl lg:-top-10 lg:text-7xl xl:text-8xl"
          aria-hidden="true"
        >
          Cooking Oil
        </h2>

        <p className="mt-16 text-base leading-7 text-neutral-600 sm:mt-20 sm:text-lg sm:leading-8 md:mt-24 lg:mt-28 lg:max-w-[520px] lg:text-lg xl:text-xl">
          Experience delicious cooking every time and more with Mazola Heart-Healthy™️
          cooking spray and oils. You can help improve heart health and reduce cholesterol
          levels by replacing butter, margarine, or oils higher in saturated fat.
        </p>

        <button
          className="mt-6 inline-flex items-center rounded-full bg-emerald-700 px-6 py-3 
                     text-sm font-medium text-white transition hover:bg-emerald-800 focus:outline-none 
                     focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
                     sm:px-7 sm:py-3.5 sm:text-base lg:mt-8 lg:px-8 lg:py-4"
          type="button"
        >
          Learn More
        </button>
      </section>
    </main>
  );
}