"use client";

import React from "react";

export default function HomePage() {
  return (
    <main className="relative mx-auto flex max-w-10xl flex-col items-center justify-center gap-10 px-2 py-16 md:flex-row md:gap-12">
      {/* Product section */}
      <section className="relative flex w-full items-center justify-center md:w-1/2">
        <img
          src="https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png"
          alt="Mazola Oil Bottles"
          width={700}
          height={600}
          priority
          className="h-auto w-4/5 max-w-[420px]"
        />
      </section>

      {/* Text section */}
      <section className="relative w-full md:w-1/2">
        {/* Watermark background text */}
        <h2
          className="pointer-events-none select-none absolute -top-8 left-0 -z-10 
                     text-6xl font-extrabold leading-none text-neutral-100 
                     md:-top-10 md:text-8xl"
          aria-hidden="true"
        >
          Cooking Oil
        </h2>

        <p className="mt-24 text-sm leading-7 text-neutral-600 md:mt-28 md:max-w-[520px]">
          Experience delicious cooking every time and more with Mazola Heart-Healthy™️
          cooking spray and oils. You can help improve heart health and reduce cholesterol
          levels by replacing butter, margarine, or oils higher in saturated fat.
        </p>

        <button
          className="mt-5 inline-flex items-center rounded-full bg-emerald-700 px-6 py-3 
                     text-sm font-medium text-white transition hover:bg-emerald-800 focus:outline-none 
                     focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          type="button"
        >
          Learn More
        </button>
      </section>
    </main>
  );
}