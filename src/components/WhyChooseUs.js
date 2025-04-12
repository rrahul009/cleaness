'use client'

import Head from 'next/head';
import Image from 'next/image'; // Use Next.js Image component
import Link from 'next/link';
import { useState } from 'react';

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Handling hover state for card animations
  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  return (
    <>
      <Head>
        <meta name="description" content="Learn why you should choose us for the best cleanliness and chemical products." />
        <title>Why Choose Us?</title> {/* Added a title for better SEO */}
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-400">
            Why Choose Us?
          </h1>
        </div>

        {/* Key Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* High-Quality Cleaning Products */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 0 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/whychooseus1.jpeg"
              alt="High-Quality Cleaning Products"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">High-Quality Cleaning Products</h3>
              <p className="mt-2 text-gray-600">
                Our products are formulated to provide deep cleaning and long-lasting freshness.
              </p>
            </div>
          </div>

          {/* Eco-Friendly Solutions */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 1 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/whychooseus2.jpeg"
              alt="Eco-Friendly Solutions"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Eco-Friendly Solutions</h3>
              <p className="mt-2 text-gray-600">
                Our cleaning solutions are biodegradable and safe for the environment.
              </p>
            </div>
          </div>

          {/* Industrial-Strength Formulas */}
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${hoveredCard === 2 ? 'scale-105' : 'scale-100'} hover:shadow-xl`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/whychooseus3.jpeg"
              alt="Industrial-Strength Formulas"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Industrial-Strength Formulas</h3>
              <p className="mt-2 text-gray-600">
                Powerful chemical solutions for heavy-duty cleaning and sanitation.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <footer className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-gray-800">Ready for a Cleaner Future?</h2>
          <p className="mt-4 text-xl text-gray-600">Choose our premium cleaning and chemical products today!</p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}