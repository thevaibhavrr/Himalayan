"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FoodCard() {
  return (
    <section 
      className="relative flex items-center justify-center py-8 px-4 min-h-[400px] sm:py-12 sm:px-6 md:min-h-[500px] lg:py-16 lg:px-8 xl:px-12"
      style={{
        background: "linear-gradient(to right, white 20%, yellow 0%)"
      }}
    >
      <div className="relative flex flex-col md:flex-row items-center gap-6 max-w-6xl w-full md:gap-8 lg:gap-12 xl:max-w-7xl 2xl:max-w-8xl">
        {/* Image Container */}
        <div className="relative flex-shrink-0 z-10 w-full md:w-auto order-2 md:order-1 xl:-ml-16 2xl:-ml-24">
          <div className="w-full max-w-[280px] mx-auto sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px]">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/021/333/207/small/white-plate-with-food-isolated-on-a-transparent-background-png.png"
              alt="Food"
              width={1800}
              height={1800}
              className="object-contain w-full h-auto scale-110 sm:scale-125 md:scale-150 xl:scale-175 2xl:scale-200"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="relative flex-1 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 w-full order-1 md:order-2 md:ml-auto xl:ml-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 sm:text-3xl sm:mb-4 md:text-4xl lg:text-5xl xl:text-6xl">
            Quick & Easy
          </h2>
          <p className="text-gray-800 text-base leading-relaxed mb-4 sm:text-lg sm:leading-loose sm:mb-6 md:text-xl lg:text-lg lg:leading-8 xl:text-xl xl:leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            feugiat, justo nec elementum faucibus, orci justo suscipit libero,
            non blandit felis sapien non orci. Etiam fringilla, sapien in
            interdum pretium, tortor sem porttitor ex, at varius leo nisi vel
            risus.
          </p>

          <button className="rounded-full bg-green-600 px-5 py-2 text-white font-medium hover:bg-green-700 text-sm transition cursor-pointer sm:px-6 sm:py-2.5 sm:text-base md:px-7 md:py-3 md:text-lg lg:px-8 lg:py-3 xl:px-10 xl:py-4 xl:text-xl">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}