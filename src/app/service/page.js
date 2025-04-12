import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-amber-500 py-20 px-6 md:px-12 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Our Premium Services
        </h1>
        <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-4xl mx-auto animate__animated animate__fadeIn animate__delay-1.5s">
          Discover our range of high-quality, eco-friendly cleaning solutions tailored for businesses, homes, and large facilities.
        </p>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Service 1 */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="relative">
              <Image
                src="/service1.jpg"
                alt="Housekeeping Service"
                width={500} // Add width
                height={300} // Add height
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-black mb-4">Housekeeping Services</h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                We provide comprehensive housekeeping services to keep your office and residential spaces clean, hygienic, and organized. Our team uses top-quality, eco-friendly cleaning solutions to ensure your space stays fresh and sanitized.
              </p>
              <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </section>

          {/* Service 2 */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-black mb-4">Commercial Cleaning</h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                Our commercial cleaning services are perfect for offices, malls, hospitals, and other large facilities. We specialize in providing high-quality cleaning solutions that are both eco-friendly and effective in keeping your business premises spotless.
              </p>
              <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
            <div className="relative">
              <Image
                src="/service2.webp"
                alt="Housekeeping Service"
                width={500} // Add width
                height={300} // Add height
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Service 3 */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="relative">
              <Image
                src="/service3.avif"
                alt="Eco-Friendly Products"
                width={500} // Add width
                height={300} // Add height
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-black mb-4">Eco-Friendly Products</h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                We offer a range of eco-friendly cleaning products that are safe for both the environment and your health. From floor cleaners to disinfectants, our products provide powerful cleaning without the harmful chemicals.
              </p>
              <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-teal-600 py-16 text-center text-white">
        <h3 className="text-3xl font-semibold mb-6">Get in Touch with Us Today</h3>
        <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
          Whether you&apos;re interested in our housekeeping services, commercial cleaning, or eco-friendly products, our team is here to provide the best solutions for your needs. Contact us today to learn more!
        </p>
        <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105">
          Contact Us Now
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Services;