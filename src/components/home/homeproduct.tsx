// components/FoodCard.tsx
"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PhilosophyPage() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-12 px-4 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]" 
             style={{
               background: "linear-gradient(to right, white 25%, yellow 0%)"
             }}>
      <div className="absolute -top-15 -left-20 w-50 h-50 bg-green-800 rounded-full z-0"></div>
      <div className="absolute top-8 left-15 w-100 h-50 bg-white-800 z-0 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-none text-black">A Fov of Our</div>

      <div className="relative flex flex-col md:flex-row max-w-6xl items-center gap-8 w-full">
        <div className="relative flex-shrink-0 z-10 w-full md:w-auto flex justify-center" 
             style={{ marginLeft: "0", marginTop: "-20px" }}>
          <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[400px]">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/021/333/207/small/white-plate-with-food-isolated-on-a-transparent-background-png.png"
              alt="Food"
              width={1800}
              height={1800}
              className="object-contain scale-100 sm:scale-125 md:scale-150"
            />
          </div>
        </div>

        <div className="relative flex-1 rounded-lg p-6 sm:p-8 md:p-10 w-full text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Quick & Easy</h2>
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            feugiat, justo nec elementum faucibus, orci justo suscipit libero,
            non blandit felis sapien non orci. Etiam fringilla, sapien in
            interdum pretium, tortor sem porttitor ex, at varius leo nisi vel
            risus.
          </p>

          <button className="rounded-full bg-green-600 px-6 py-2 text-white font-medium hover:bg-green-700 text-base sm:text-lg transition cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}