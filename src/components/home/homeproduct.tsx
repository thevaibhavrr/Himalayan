// components/FoodCard.tsx
"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PhilosophyPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      y: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      className="relative flex flex-col md:flex-row items-center justify-center py-12 px-4 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]" 
      style={{
        background: "linear-gradient(to right, white 25%, yellow 0%)"
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div 
        className="absolute -top-15 -left-20 w-50 h-50 bg-green-800 rounded-full z-0"
        variants={floatingVariants}
        animate="animate"
      ></motion.div>
      
      <motion.div 
        className="absolute top-8 left-15 w-100 h-50 bg-white-800 z-0 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-none text-black"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        A Fov of Our
      </motion.div>

      <div className="relative flex flex-col md:flex-row max-w-6xl items-center gap-8 w-full">
        <motion.div 
          className="relative flex-shrink-0 z-10 w-full md:w-auto flex justify-center" 
          style={{ marginLeft: "0", marginTop: "-20px" }}
          variants={imageVariants}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        >
          <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[400px]">
            <motion.img
              src="https://static.vecteezy.com/system/resources/thumbnails/021/333/207/small/white-plate-with-food-isolated-on-a-transparent-background-png.png"
              alt="Food"
              width={1800}
              height={1800}
              className="object-contain scale-100 sm:scale-125 md:scale-150"
              whileHover={{ 
                scale: 1.2,
                transition: { duration: 0.3 }
              }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="relative flex-1 rounded-lg p-6 sm:p-8 md:p-10 w-full text-center md:text-left"
          variants={textVariants}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Quick & Easy
          </motion.h2>
          
          <motion.p 
            className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            feugiat, justo nec elementum faucibus, orci justo suscipit libero,
            non blandit felis sapien non orci. Etiam fringilla, sapien in
            interdum pretium, tortor sem porttitor ex, at varius leo nisi vel
            risus.
          </motion.p>

          <motion.button 
            className="rounded-full bg-green-600 px-6 py-2 text-white font-medium hover:bg-green-700 text-base sm:text-lg transition cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Order Now
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}