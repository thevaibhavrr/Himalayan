// components/FoodCard.tsx
"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FoodCard() {
  return (
    <section className="relative flex items-center justify-center py-12 px-4 h-170" 
             style={{
               background: "linear-gradient(to right, white 20%, yellow 0%)"
             }}>
      <div className="relative flex max-w-6xl items-center gap-8">
        <div className="relative flex-shrink-0 z-10" 
             style={{ marginLeft: "-160px" }}>
          <div className="w-100">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/021/333/207/small/white-plate-with-food-isolated-on-a-transparent-background-png.png"
              alt="Food"
              width={1800}
              height={1800}
              className="object-contain scale-150"
            />
          </div>
        </div>

        <div className="relative flex-1 rounded-lg p-10 ml-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick & Easy</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            feugiat, justo nec elementum faucibus, orci justo suscipit libero,
            non blandit felis sapien non orci. Etiam fringilla, sapien in
            interdum pretium, tortor sem porttitor ex, at varius leo nisi vel
            risus.
          </p>

          <button className="rounded-full bg-green-600 px-6 py-2 text-white font-medium hover:bg-green-700 text-1xl transition cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}