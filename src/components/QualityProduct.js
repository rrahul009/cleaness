import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const QualityProduct = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-gray-100">
      {/* Container */}
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
          Quality Products That Deliver Satisfactory Results
        </h1>

        {/* Main Content */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed max-w-3xl mx-auto">
          At Bhagwati Durga Enterprises, we deal in top-quality products that provide satisfactory results right from the first use. Our range of eco-friendly cleaning chemicals is designed to be effective and reliable, ensuring your spaces are spotless and hygienic with minimal effort.
        </p>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-black mb-4">Immediate Results</h3>
            <p className="text-gray-700">
              Experience visible results from the very first use. Our products are formulated to clean efficiently and quickly, saving you time and effort.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-black mb-4">Eco-Friendly & Safe</h3>
            <p className="text-gray-700">
              We prioritize the environment. Our products are eco-friendly and safe for use in any setting, from residential to commercial spaces.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-black mb-4">Versatile Applications</h3>
            <p className="text-gray-700">
              Our products are designed to be versatile, handling a wide range of cleaning tasks across different environments such as homes, offices, and industries.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
      <Link href="/contact">
      <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105">
            Explore Our Products
          </button></Link>
        </div>
      </div>
    </div>
  )
}

export default QualityProduct;