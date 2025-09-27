"use client";

import React from "react";
export default function Hero() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 pt-20 md:pt-24 lg:pt-10 min-h-screen"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dtivafy25/image/upload/v1758021064/Frame_24_wrtcqz.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/60"></div>

        {/* Text Content */}
        <div className="relative z-10 w-full lg:max-w-xl text-center lg:text-left lg:ms-10 xl:ms-20 order-2 lg:order-1 mt-8 lg:mt-0">
          <h4 className="text-green-700 font-semibold mb-2 text-sm sm:text-base md:text-lg">
            Straight from the source
          </h4>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-snug mb-4 sm:mb-6">
            World's First and Favorite Corn Oil <br className="hidden sm:block" /> 
            Trusted By Consumers Over 100 Years
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto lg:mx-0">
            100% pure, natural corn oil — healthy, delicious and trusted worldwide.
          </p>
          <a
            href="#"
            className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>

        {/* Image Content */}
        <div className="relative z-10 w-full max-w-md lg:max-w-none order-1 lg:order-2 mt-4 lg:mt-0">
          <img
            src="https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png"
            alt="Mazola Corn Oil"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
            width={800}
            height={900}
          />
        </div>
      </section>
    </div>
  );
}