import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import Image from 'next/image'; // Import Image from next/image

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-amber-500 py-20 px-6 md:px-12 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Bhagwati Durga Enterprises
        </h1>
        <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-4xl mx-auto animate__animated animate__fadeIn animate__delay-1.5s">
          Bhagwati Durga Enterprises is a cutting-edge startup dedicated to eco-friendly housekeeping solutions. Founded in 2025, we are committed to providing innovative cleaning products and services that transform the cleaning experience.
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Our team has over 10 years of experience, and our commitment to excellence aims to make cleaning healthier, sustainable, and effortless using Bhagwati Durga chemicals.
        </p>
      </div>

      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed max-w-3xl mx-auto">
              We strive to deliver eco-friendly cleaning solutions that make your space cleaner and healthier. Whether you&apos;re a wholesaler, retailer, or a business, our products provide efficient results from the very first use.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed max-w-3xl mx-auto">
              We are also working to expand our network and connect with corporate facilities, building management, malls, shopping complexes, and hospitals to offer our sustainable products to a wider audience.
            </p>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-teal-500 p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Join Us on Our Journey
            </h3>
            <p className="text-lg text-white mb-6 leading-relaxed max-w-3xl mx-auto">
              We&apos;re passionate about making a difference in the cleaning industry, and we need your support! Help us create a cleaner, healthier, and more sustainable world with our innovative cleaning solutions.
            </p>
            <button
              className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105"
              style={{ backgroundColor: 'black' }}
            >
              Contact Us Today
            </button>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default AboutUs;