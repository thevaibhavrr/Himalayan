"use client";

import React from "react";

export default function GreenSection() {
    return (
        <div className="bg-white py-40 d-flex justify-center align-center ">
            <section className="py-16 px-4 bg-green-50 mb-10"
                style={{
                    maxHeight: "65vh"
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Left Side - Image */}
                        <div className="w-full lg:w-1/2 flex justify-evenly items-start align-center">
                            <div className="relative max-w-md"
                            style={{
                                marginTop: "-150px"
                            }}
                            >
                                <img
                                    src="https://i.ibb.co/cSQt16V5/hero-product-removebg-preview-2-removebg-preview.png"
                                    alt="Team collaboration"
                                    width={600}
                                    height={400}

                                    className="w-full h-200 object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">
                            <div className="text-center lg:text-left">
                                <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                                    About Us
                                </span>

                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                    Creating Sustainable Solutions for a Better Tomorrow
                                </h2>

                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    We are committed to developing innovative solutions that address
                                    today's challenges while preserving resources for future generations.
                                    Our team of experts works tirelessly to create sustainable products
                                    that make a positive impact on our world.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Eco-friendly materials and processes</span>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Certified sustainable practices</span>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Community-focused initiatives</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-300 shadow-md">
                                        Learn More
                                    </button>
                                    <button className="px-6 py-3 bg-white text-green-700 border border-green-600 rounded-lg font-medium hover:bg-green-50 transition duration-300">
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