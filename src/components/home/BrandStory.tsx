
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GreenSection() {
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
            x: -100,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
            }
        }
    };

    const contentVariants = {
        hidden: { 
            opacity: 0, 
            x: 100,
            y: 30
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            x: 20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { 
            opacity: 0, 
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            y: -2,
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
            y: [-5, 5, -5],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div 
            className="bg-white py-40 d-flex justify-center align-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.section 
                className="py-16 px-4 bg-green-500 mb-10"
                style={{
                    maxHeight: "80vh"
                }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Left Side - Image */}
                        <motion.div 
                            className="w-full lg:w-1/2 flex justify-evenly items-start align-center"
                            variants={imageVariants}
                        >
                            <motion.div 
                                className="relative max-w-md"
                                style={{
                                    marginTop: "-150px"
                                }}
                                variants={floatingVariants}
                                animate="animate"
                            >
                                <motion.img
                                    src="https://i.ibb.co/cSQt16V5/hero-product-removebg-preview-2-removebg-preview.png"
                                    alt="Team collaboration"
                                    width={600}
                                    height={400}
                                    className="w-full h-200 object-cover"
                                    whileHover={{ 
                                        scale: 1.1,
                                        rotate: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Content */}
                        <motion.div 
                            className="w-full lg:w-1/2 flex flex-col justify-center"
                            variants={contentVariants}
                        >
                            <div className="text-center lg:text-left">
                                <motion.span 
                                    className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    About Us
                                </motion.span>

                                <motion.h2 
                                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    Creating Sustainable Solutions for a Better Tomorrow
                                </motion.h2>

                                <motion.p 
                                    className="text-lg text-gray-700 mb-6 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    We are committed to developing innovative solutions that address
                                    today's challenges while preserving resources for future generations.
                                    Our team of experts works tirelessly to create sustainable products
                                    that make a positive impact on our world.
                                </motion.p>

                                <motion.div 
                                    className="space-y-4 mb-8"
                                    variants={containerVariants}
                                >
                                    {[
                                        "Eco-friendly materials and processes",
                                        "Certified sustainable practices",
                                        "Community-focused initiatives"
                                    ].map((item, index) => (
                                        <motion.div 
                                            key={index}
                                            className="flex items-center"
                                            variants={itemVariants}
                                            whileHover={{ 
                                                x: 10,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <motion.div 
                                                className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3"
                                                whileHover={{ 
                                                    scale: 1.2,
                                                    rotate: 360,
                                                    transition: { duration: 0.3 }
                                                }}
                                            >
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </motion.div>
                                            <span className="text-gray-700">{item}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div 
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                    variants={buttonVariants}
                                >
                                    <motion.button 
                                        className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium shadow-md"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        Learn More
                                    </motion.button>
                                    <motion.button 
                                        className="px-6 py-3 bg-white text-green-700 border border-green-600 rounded-lg font-medium"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        Contact Us
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
}