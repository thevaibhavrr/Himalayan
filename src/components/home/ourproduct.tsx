// app/page.tsx
import React from "react";
import { motion } from "framer-motion";

type Product = {
  id: string;
  name: string;
  desc: string;
  img: string;
  floatImg?: string; // optional decorative item
};

const PRODUCTS: Product[] = [
  {
    id: "corn",
    name: "Corn Oil",
    desc: "Light taste and high smoke point—great for everyday frying, sautéing, and baking. Naturally cholesterol-free.",
    img: "https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png",
  },
  {
    id: "vegetable",
    name: "Vegetable Oil",
    desc: "Versatile neutral flavor that lets ingredients shine. Ideal for stir-fry, marinades, and baking recipes.",
    img: "https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png",
  },
  {
    id: "canola",
    name: "Canola Oil",
    desc: "Low saturated fat with a smooth, clean finish. Perfect for salads, grilling, and light frying.",
    img: "https://i.ibb.co/SqXfTrW/61l62-OYN9-DL-SL1000-removebg-preview.png",
  },
];

export default function OurProductPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const productVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
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
      x: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.main 
      className="min-h-dvh w-full bg-[#fff9f3]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Section header */}
      <motion.header 
        className="mx-auto max-w-5xl px-4 pt-10 pb-8 text-center sm:px-6 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12 lg:px-8"
        variants={headerVariants}
      >
        <motion.h1 
          className="text-3xl font-bold text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Products
        </motion.h1>
      </motion.header>

      {/* Products */}
      <motion.section 
        className="mx-auto max-w-7xl px-4 space-y-12 pb-16 sm:px-6 sm:space-y-16 sm:pb-20 lg:px-8 lg:space-y-20 lg:pb-24"
        variants={containerVariants}
      >
        {/* First Product - Left */}
        <motion.article 
          className="flex flex-col items-center justify-start gap-6 md:flex-row md:gap-8 lg:gap-12"
          variants={productVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Image */}
          <motion.div 
            className="flex justify-center order-1 md:order-1 w-full md:w-auto"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.img
                src={PRODUCTS[0].img}   
                alt={`${PRODUCTS[0].name} bottle`}
                className="h-auto w-[180px] sm:w-[220px] md:w-[300px] lg:w-[360px] xl:w-[400px] drop-shadow-lg"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              />
              {/* Floating decorative item */}
              {PRODUCTS[0].floatImg && (
                <motion.img
                  src={PRODUCTS[0].floatImg}
                  alt="decor"
                  className="absolute -top-4 -right-4 h-12 w-12 sm:-top-6 sm:-right-6 sm:h-16 sm:w-16 md:-top-8 md:-right-8 md:h-20 md:w-20"
                  variants={floatingVariants}
                  animate="animate"
                />
              )}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            className="max-w-lg order-2 md:order-2 text-center md:text-left md:ml-6 lg:ml-8 w-full"
            variants={textVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {PRODUCTS[0].name}
            </motion.h2>
            <motion.p 
              className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 md:mt-4 md:text-xl md:leading-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {PRODUCTS[0].desc}
            </motion.p>
          </motion.div>
        </motion.article>

        {/* Second Product - Right */}
        <motion.article 
          className="flex flex-col items-center justify-end gap-6 md:flex-row md:gap-8 lg:gap-12"
          variants={productVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Text */}
          <motion.div 
            className="max-w-lg order-2 md:order-1 text-center md:text-right md:mr-6 lg:mr-8 w-full"
            variants={textVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {PRODUCTS[1].name}
            </motion.h2>
            <motion.p 
              className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 md:mt-4 md:text-xl md:leading-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {PRODUCTS[1].desc}
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="flex justify-center order-1 md:order-2 w-full md:w-auto"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.img
                src={PRODUCTS[1].img}
                alt={`${PRODUCTS[1].name} bottle`}
                className="h-auto w-[180px] sm:w-[220px] md:w-[300px] lg:w-[360px] xl:w-[400px] drop-shadow-lg"
                whileHover={{ 
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.3 }
                }}
              />
              {/* Floating decorative item */}
              {PRODUCTS[1].floatImg && (
                <motion.img
                  src={PRODUCTS[1].floatImg}
                  alt="decor"
                  className="absolute -top-4 -right-4 h-12 w-12 sm:-top-6 sm:-right-6 sm:h-16 sm:w-16 md:-top-8 md:-right-8 md:h-20 md:w-20"
                  variants={floatingVariants}
                  animate="animate"
                />
              )}
            </div>
          </motion.div>
        </motion.article>

        {/* Third Product - Left */}
        <motion.article 
          className="flex flex-col items-center justify-start gap-6 md:flex-row md:gap-8 lg:gap-12"
          variants={productVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Image */}
          <motion.div 
            className="flex justify-center order-1 md:order-1 w-full md:w-auto"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.img
                src={PRODUCTS[2].img}
                alt={`${PRODUCTS[2].name} bottle`}
                className="h-auto w-[180px] sm:w-[220px] md:w-[300px] lg:w-[360px] xl:w-[400px] drop-shadow-lg"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              />
              {/* Floating decorative item */}
              {PRODUCTS[2].floatImg && (
                <motion.img
                  src={PRODUCTS[2].floatImg}
                  alt="decor"
                  className="absolute -top-4 -right-4 h-12 w-12 sm:-top-6 sm:-right-6 sm:h-16 sm:w-16 md:-top-8 md:-right-8 md:h-20 md:w-20"
                  variants={floatingVariants}
                  animate="animate"
                />
              )}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            className="max-w-lg order-2 md:order-2 text-center md:text-left md:ml-6 lg:ml-8 w-full"
            variants={textVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {PRODUCTS[2].name}
            </motion.h2>
            <motion.p 
              className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 md:mt-4 md:text-xl md:leading-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {PRODUCTS[2].desc}
            </motion.p>
          </motion.div>
        </motion.article>
      </motion.section>
    </motion.main>
  );
}