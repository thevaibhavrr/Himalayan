// import { useState } from 'react';
// import { Menu, Phone, Mail } from 'lucide-react';
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import { useRouter } from './Router';
// import DrawerNav from './DrawerNav';
// // import logoImage from 'figma:asset/97522013f16eaa4be887f4d97c1a166c67008250.png';

// interface HeaderProps {
//   phone?: string;
//   email?: string;
// }

// const Header = ({ 
//   phone = '+91 9876543210', 
//   email = 'info@himalayanoil.com' 
// }: HeaderProps) => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const { navigate, currentPage } = useRouter();

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Products', path: '/products' },
//     { name: 'Recipes', path: '/recipes' },
//     { name: 'Distributor', path: '/distributor' },
//     { name: 'Certifications', path: '/certifications' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const handleNavigation = (path: string) => {
//     navigate(path);
//   };

//   return (
//     <>
//       <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo */}
//             <div 
//               className="flex-shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFD233] rounded-lg p-1" 
//               onClick={() => navigate('/')}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' || e.key === ' ') {
//                   e.preventDefault();
//                   navigate('/');
//                 }
//               }}
//               tabIndex={0}
//               role="button"
//               aria-label="Go to homepage"
//             >
//               <img
//                 src={'https://res.cloudinary.com/dk3aontez/image/upload/v1757506527/ae182976-a3d4-4bcc-8c56-e65181084dc6-removebg-preview_mcmtjh.png'}
//                 alt="Himalayan Oil"
//                 className="h-14 w-auto"
//               />
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex space-x-8" role="navigation" aria-label="Main navigation">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => handleNavigation(item.path)}
//                   className={`font-medium transition-colors duration-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD233] ${
//                     currentPage === item.path
//                       ? 'text-[#FFD233]'
//                       : 'text-[#4B2E2B] hover:text-[#FFD233]'
//                   }`}
//                   aria-current={currentPage === item.path ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </nav>

//             {/* Mobile Menu */}
//             <div className="lg:hidden">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => setIsDrawerOpen(true)}
//                 className="border-[#4B2E2B] text-[#4B2E2B] hover:bg-[#FFF8E1] focus:ring-2 focus:ring-[#FFD233]"
//                 aria-label="Open menu"
//                 aria-expanded={isDrawerOpen}
//                 aria-controls="mobile-drawer"
//               >
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Drawer */}
//       <DrawerNav
//         navItems={navItems}
//         phone={phone}
//         email={email}
//         open={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//       />
//     </>
//   );
// };

// export default Header;


// "use client";

// import React from "react";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const pathname = usePathname();

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Products", href: "/products" },
//     { name: "Recipes", href: "/recipes" },
//     { name: "Distributor", href: "/distributor" },
//     { name: "Certifications", href: "/certifications" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md flex justify-between items-center px-6 md:px-12 py-4">
//       {/* Logo */}
//       <div className="flex items-center cursor-pointer">
//         <img
//           src="https://res.cloudinary.com/dk3aontez/image/upload/v1757506527/ae182976-a3d4-4bcc-8c56-e65181084dc6-removebg-preview_mcmtjh.png"
//           alt="Mazola Logo"
//           width={230}
//           height={100}
//           className="h-22 w-auto"
//         />
//       </div>

//       {/* Navigation (Desktop) */}
//       <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
//         {navItems.map((item) => {
//           const isActive = pathname === item.href;

//           return (
//             <a
//               key={item.href}
//               href={item.href}
//               className={`relative pb-1 transition-colors hover:text-green-700 ${
//                 isActive ? "text-green-700" : ""
//               }`}
//             >
//               {item.name}
//               {isActive && (
//                 <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-600 rounded"></span>
//               )}
//             </a>
//           );
//         })}
//       </nav>

//       {/* Contact Button (Always visible) */}
//       <a
//         href="/contact"
//         className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full font-semibold transition"
//       >
//         Contact Us
//       </a>
//     </header>
//   );
// }

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
