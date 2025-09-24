// import { Button } from "./ui/button";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative w-full h-[500px] lg:h-[650px] bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://res.cloudinary.com/dtivafy25/image/upload/v1758021064/Frame_24_wrtcqz.png')",
//       }}
//     >
//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black/20"></div>

//       {/* Content inside container */}
//       <div className="relative z-10 flex items-center h-full px-6 lg:px-8">
//         <div className="max-w-7xl w-full mx-auto">
//           <div className="max-w-xl text-left text-white animate-fade-in-left">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
//               Pure, Premium <br />
//               <span className="font-serif italic">Edible Oils</span>
//             </h1>
//             <p className="mt-4 text-lg md:text-xl opacity-90 drop-shadow-lg">
//               Since 1978, delivering natural, cold-pressed oils extracted using
//               traditional Kolhu methods for authentic taste and nutrition.
//             </p>

//             {/* CTA Buttons */}
//             <div className="mt-8 flex flex-col sm:flex-row gap-4">
//               <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-6 rounded-lg shadow-lg transition transform hover:scale-105">
//                 Explore Products
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-2 border-white text-black px-8 py-6 rounded-lg hover:bg-white hover:text-[#4B2E2B] transition-colors shadow-lg"
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


"use client";

import React from "react";
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white">


      {/* Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-32 md:pt-10 min-h-screen"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dtivafy25/image/upload/v1758021064/Frame_24_wrtcqz.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/60"></div>

        <div className="relative z-10 max-w-xl text-start md:text-left ms-20">
          <h4 className="text-green-700 font-semibold mb-2">
            Straight from the source
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
            World’s First and Favorite Corn Oil <br /> Trusted By Consumers Over
            100 Years
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            100% pure, natural corn oil — healthy, delicious and trusted
            worldwide.
          </p>
          <a
            href="#"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Contact Us
          </a>
        </div>

        <div className="relative z-10  mt-10 md:mt-0">
          <img
            src="https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png"
            alt="Mazola Corn Oil"
            width={500}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
