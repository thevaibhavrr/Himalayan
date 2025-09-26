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
    title: "Update Title 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7Q2w9s3xsz0KWsYVlXKlROC9qH7JJDH2BQ&s",
  },
  {
    id: 3,
    title: "Update Title 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7Q2w9s3xsz0KWsYVlXKlROC9qH7JJDH2BQ&s",
  },
  {
    id: 4,
    title: "Update Title 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7Q2w9s3xsz0KWsYVlXKlROC9qH7JJDH2BQ&s",
  },
  {
    id: 5,
    title: "Update Title 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7Q2w9s3xsz0KWsYVlXKlROC9qH7JJDH2BQ&s",
  },
];

export default function LatestUpdates() {
  return (
    <section className="py-10 px-4 sm:py-12 md:py-16 lg:py-20 sm:px-6 md:px-8 lg:px-12">
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Our Latest Updates
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-7xl mx-auto sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {updates.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              width={600}
              height={600}
              className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3 sm:p-4 md:p-5">
              <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-lg">
                {item.title}
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-sm mt-1 sm:mt-2">
                {item.desc}
              </p>
              <button className="mt-2 sm:mt-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-600 text-white rounded-md text-xs sm:text-sm hover:bg-green-700 transition w-fit">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
        <button className="px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition text-sm sm:text-base md:text-lg">
          View All
        </button>
      </div>
    </section>
  );
}