

"use client";

import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md flex justify-between items-center px-15 md:px-12 py-4">
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <img
          src="https://res.cloudinary.com/dk3aontez/image/upload/v1757506527/ae182976-a3d4-4bcc-8c56-e65181084dc6-removebg-preview_mcmtjh.png"
          alt="Mazola Logo"
          width={130}
          height={50}
          className="h-22 w-auto"
          priority
        />
      </div>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
        <a href="/" className="hover:text-green-700 transition-colors">
          Home
        </a>
        <a href="/about" className="hover:text-green-700 transition-colors">
          About
        </a>
        <a href="/products" className="hover:text-green-700 transition-colors">
          Products
        </a>
        <a href="/recipes" className="hover:text-green-700 transition-colors">
          Recipes
        </a>
        <a href="/distributor" className="hover:text-green-700 transition-colors">
          Distributor
        </a>
        <a href="/certifications" className="hover:text-green-700 transition-colors">
          Certifications
        </a>
        <a href="/contact" className="hover:text-green-700 transition-colors">
          Contact
        </a>
      </nav>

      {/* Contact Button (Always visible) */}
      <a
        href="/contact"
        className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full font-semibold transition"
      >
        Contact Us
      </a>
    </header>
  );
}
