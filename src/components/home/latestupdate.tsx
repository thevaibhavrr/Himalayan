"use client";

import React from "react";
const updates = [
  {
    id: 1,
    title: "Update Title 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7Q2w9s3xsz0KWsYVlXKlROC9qH7JJDH2BQ&s",
  },
  {
    id: 2,
    title: "Update Title 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7Q2w9s3xsz0KWsYVlXKlROC9qH7JJDH2BQ&s",
  },
  {
    id: 3,
    title: "Update Title 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7Q2w9s3xsz0KWsYVlXKlROC9qH7JJDH2BQ&s",
  },
  {
    id: 4,
    title: "Update Title 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7Q2w9s3xsz0KWsYVlXKlROC9qH7JJDH2BQ&s",
  },
  {
    id: 5,
    title: "Update Title 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7Q2w9s3xsz0KWsYVlXKlROC9qH7JJDH2BQ&s",
  },


  // ... other items
];

export default function LatestUpdates() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold">Our Latest Updates</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 max-w-8xl mx-auto">
        {updates.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              width={600}
              height={600}
              className="object-cover w-full h-64 sm:h-80 md:h-96 group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3 sm:p-4">
              <h3 className="text-white font-semibold text-base sm:text-lg">{item.title}</h3>
              <p className="text-gray-200 text-xs sm:text-sm mt-2">{item.desc}</p>
              <button className="mt-2 sm:mt-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-600 text-white rounded-md text-xs sm:text-sm hover:bg-green-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-10">
        <button className="px-4 py-2 sm:px-6 sm:py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition text-sm sm:text-base">
          View All
        </button>
      </div>
    </section>
  );
}