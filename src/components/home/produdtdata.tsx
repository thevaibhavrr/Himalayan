
"use client";

import React from "react";

export default function ProductShowcase() {
  return (
    <main className="relative mx-auto flex max-w-8xl h-200 flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:flex-row md:gap-12 lg:gap-16 lg:px-8 lg:py-20 xl:max-w-10xl bg-white">
      
      {/* Dark Green Circle */}
      <div className="absolute -top-15 -left-20 w-50 h-50 bg-green-800 rounded-full z-20"></div>
      <div className="absolute top-8 left-15 w-100 h-50 bg-white-800 z-20 text-4xl font-extrabold leading-none text-black ">Heart-Healthy</div>

      {/* Product section */}
      <section className="relative flex w-full items-center justify-center md:w-1/2 z-10">
        {/* Grass pattern blob behind the product */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <svg 
            viewBox="0 0 400 300" 
            className="w-96 h-72 sm:w-[28rem] sm:h-80 md:w-[32rem] md:h-96 lg:w-[40rem] lg:h-[28rem] xl:w-[48rem] xl:h-[25rem] opacity-30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grassPattern" patternUnits="userSpaceOnUse" width="100%" height="100%">
                <image 
                  href="https://images.unsplash.com/photo-1533460004989-cef01064af7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZ3Jhc3N8ZW58MHx8MHx8fDA%3D"
                  x="0" 
                  y="0" 
                  width="100%" 
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <path 
              fill="url(#grassPattern)" 
              d="M49.1,-49.8C63.3,-34.9,74.3,-17.5,74.9,0.6C75.4,18.6,65.6,37.1,51.3,48.1C37.1,59,18.6,62.4,-0.3,62.7C-19.2,63,-38.4,60.3,-48.9,49.4C-59.4,38.4,-61.1,19.2,-62.3,-1.2C-63.5,-21.6,-64.1,-43.1,-53.6,-58C-43.1,-72.9,-21.6,-81.1,-2,-79.1C17.5,-77,34.9,-64.7,49.1,-49.8Z" 
              transform="translate(200 150) scale(2.5)"
            />
          </svg>
        </div>
        
        <img
          src="https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png"
          alt="Mazola Oil Bottles"
          width={600}
          height={600}
          priority
          className="h-auto w-full max-w-[280px] sm:max-w-[350px] md:max-w-[200px] lg:max-w-[350px] xl:max-w-[480px] relative z-10"
        />
      </section>

      {/* Text section */}
      <section className="relative w-full md:w-1/2 z-10">
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
          Experience the pure taste of tradition with our premium edible oils. Extracted using 
          traditional Kolhu methods, our oils preserve natural nutrients and authentic flavors. 
          Available in Mustard, Soybean, Sunflower, and Groundnut varieties with multiple packaging options.
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