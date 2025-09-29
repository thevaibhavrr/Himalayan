

"use client";

import React from "react";
import { useRouter } from './Router';

export default function Header() {
  const { navigate } = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md flex justify-between items-center px-15 md:px-12 py-4">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
        <img
          src="https://res.cloudinary.com/dk3aontez/image/upload/v1757506527/ae182976-a3d4-4bcc-8c56-e65181084dc6-removebg-preview_mcmtjh.png"
          alt="Bharat Agro Oil Logo"
          width={130}
          height={50}
          className="h-22 w-auto"
          priority
        />
      </div>

      {/* Navigation (Desktop) */}
      <nav className="hidden lg:flex gap-4 text-gray-800 font-medium text-sm">
        <button onClick={() => navigate('/')} className="hover:text-green-700 transition-colors px-2 py-1">
          Home
        </button>
        <button onClick={() => navigate('/about')} className="hover:text-green-700 transition-colors px-2 py-1">
          About
        </button>
        <button onClick={() => navigate('/products')} className="hover:text-green-700 transition-colors px-2 py-1">
          Products
        </button>
        <button onClick={() => navigate('/recipes')} className="hover:text-green-700 transition-colors px-2 py-1">
          Recipes
        </button>
        <button onClick={() => navigate('/certifications')} className="hover:text-green-700 transition-colors px-2 py-1">
          Certifications
        </button>
        <button onClick={() => navigate('/distribution')} className="hover:text-green-700 transition-colors px-2 py-1">
          Network
        </button>
        <button onClick={() => navigate('/distributor')} className="hover:text-green-700 transition-colors px-2 py-1">
          Distributor
        </button>
        <button onClick={() => navigate('/blog')} className="hover:text-green-700 transition-colors px-2 py-1">
          Blog
        </button>
        <button onClick={() => navigate('/contact')} className="hover:text-green-700 transition-colors px-2 py-1">
          Contact
        </button>
      </nav>

      {/* Contact Button (Always visible) */}
      <button
        onClick={() => navigate('/contact')}
        className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full font-semibold transition"
      >
        Contact Us
      </button>
    </header>
  );
}
