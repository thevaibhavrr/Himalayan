"use client";

import React from "react";

export default function GreenSection() {
    return (
        <div className="bg-white py-20 md:py-32 lg:py-40 flex justify-center items-center">
            <section className="w-full py-12 px-4 bg-green-50 mb-6 md:py-16 md:px-6 lg:px-8 lg:py-20 lg:mb-10"
                style={{
                    maxHeight: "none",
                    minHeight: "auto"
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                        {/* Left Side - Image */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-start order-2 lg:order-1">
                            <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-0 lg:mt-[-80px] mb-[-40px]">
                                <img
                                    src="https://i.ibb.co/cSQt16V5/hero-product-removebg-preview-2-removebg-preview.png"
                                    alt="Team collaboration"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-2">
                            <div className="text-center lg:text-left">
                                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-3 sm:text-sm sm:px-4 sm:py-1 sm:mb-4 md:text-base">
                                    About Us
                                </span>

                                <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:text-3xl md:text-4xl lg:text-4xl lg:mb-6">
                                    Creating Sustainable Solutions for a Better Tomorrow
                                </h2>

                                <p className="text-base text-gray-700 mb-4 leading-relaxed sm:text-lg sm:mb-6 md:text-lg lg:leading-8">
                                    We are committed to developing innovative solutions that address
                                    today's challenges while preserving resources for future generations.
                                    Our team of experts works tirelessly to create sustainable products
                                    that make a positive impact on our world.
                                </p>

                                <div className="space-y-3 mb-6 sm:space-y-4 sm:mb-8">
                                    <div className="flex items-center justify-center lg:justify-start">
                                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2 sm:w-6 sm:h-6 sm:mr-3 flex-shrink-0">
                                            <svg className="w-2.5 h-2.5 text-white sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-sm sm:text-base">Eco-friendly materials and processes</span>
                                    </div>

                                    <div className="flex items-center justify-center lg:justify-start">
                                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2 sm:w-6 sm:h-6 sm:mr-3 flex-shrink-0">
                                            <svg className="w-2.5 h-2.5 text-white sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-sm sm:text-base">Certified sustainable practices</span>
                                    </div>

                                    <div className="flex items-center justify-center lg:justify-start">
                                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2 sm:w-6 sm:h-6 sm:mr-3 flex-shrink-0">
                                            <svg className="w-2.5 h-2.5 text-white sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-sm sm:text-base">Community-focused initiatives</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start sm:gap-4">
                                    <button className="px-5 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-300 shadow-md text-sm sm:px-6 sm:py-3 sm:text-base">
                                        Learn More
                                    </button>
                                    <button className="px-5 py-2.5 bg-white text-green-700 border border-green-600 rounded-lg font-medium hover:bg-green-50 transition duration-300 text-sm sm:px-6 sm:py-3 sm:text-base">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}