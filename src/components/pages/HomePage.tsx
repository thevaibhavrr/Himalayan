import Hero from '../Hero';
import ProductShowcase from '../home/produdtdata';
import { useRouter } from '../Router';
import OurProductPage from '../home/ourproduct';
import PhilosophyPage from '../home/homeproduct';
import LatestUpdates from '../home/latestupdate';
import BrandStory from '../home/BrandStory';
import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const { navigate } = useRouter();

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Mustard Oil",
      image: "https://images.unsplash.com/photo-1755598603202-f6c6e02aa16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwc2VlZHMlMjBvaWx8ZW58MXx8fHwxNzU3NDg1Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: ["Cold Pressed", "Heart Healthy", "Rich in Omega-3"],
      description: "Traditional cold-pressed mustard oil with authentic taste"
    },
    {
      id: 2,
      name: "Pure Sunflower Oil",
      image: "https://images.unsplash.com/photo-1656711781745-ba68661d06b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBvaWwlMjBjb29raW5nfGVufDF8fHx8MTc1NzQ4NTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: ["Vitamin E", "Light Taste", "High Smoke Point"],
      description: "Premium sunflower oil perfect for all cooking methods"
    },
    {
      id: 3,
      name: "Natural Groundnut Oil",
      image: "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc0ODUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: ["Cold Pressed", "Aromatic", "Traditional Taste"],
      description: "Pure groundnut oil with rich flavor and nutrition"
    }
  ];

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

  const sectionVariants = {
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

  const slideInVariants = {
    hidden: { 
      opacity: 0, 
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRightVariants = {
    hidden: { 
      opacity: 0, 
      x: 100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleInVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>

      {/* Product Showcase Section */}
      <motion.div 
        variants={scaleInVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <ProductShowcase />
      </motion.div>

      {/* Our Products Section */}
      <motion.div 
        variants={slideInVariants}
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      >
        <OurProductPage/>
      </motion.div>

      {/* Philosophy Section */}
      <motion.div 
        variants={slideInRightVariants}
        whileHover={{ x: -10 }}
        transition={{ duration: 0.3 }}
      >
        <PhilosophyPage/>
      </motion.div>

      {/* Latest Updates Section */}
      <motion.div 
        variants={sectionVariants}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <LatestUpdates/>
      </motion.div>

      {/* Brand Story Section */}
      <motion.div 
        variants={sectionVariants}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <BrandStory/>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;