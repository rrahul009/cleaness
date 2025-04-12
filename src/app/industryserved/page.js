import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

const IndustriesWeServe = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-amber-500 py-20 px-6 md:px-12 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Industries We Serve
        </h1>
        <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-4xl mx-auto animate__animated animate__fadeIn animate__delay-1.5s">
          Bhagwati Durga Enterprises offers high-quality cleaning and housekeeping solutions to a wide range of industries. Our eco-friendly and efficient products are designed to meet the unique needs of various sectors.
        </p>
      </div>

      {/* Industries Section */}
      <div className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Industry 1: Corporate Offices */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-black mb-4">Corporate Offices</h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                We provide tailored cleaning solutions for corporate offices, ensuring a clean, organized, and hygienic workspace. Our eco-friendly products are designed to boost employee productivity and create a welcoming environment.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/induscorporate.webp"
                alt="Corporate Office Cleaning"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                layout="responsive"
              />
            </div>
          </section>

          {/* Industry 2: Healthcare Facilities */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="relative">
              <Image
                src="/Healthcare facility projects - ISG.webp"
                alt="Healthcare Facility Cleaning"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                layout="responsive"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-black mb-4">Healthcare Facilities</h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                Our cleaning solutions are safe and effective for healthcare environments. We ensure that hospitals, clinics, and medical facilities maintain high standards of cleanliness and hygiene to prevent cross-contamination and promote patient safety.
              </p>
            </div>
          </section>

          {/* Industry 3: Malls & Shopping Complexes */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-black mb-4">Malls & Shopping Complexes</h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                We provide high-quality cleaning services for malls and shopping complexes. Our eco-friendly cleaning chemicals help keep your retail spaces spotless, promoting a safe and clean environment for shoppers and staff.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/DLF-Mall-of-India-Noida_0_1200.jpg"
                alt="Mall and Shopping Complex Cleaning"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                layout="responsive"
              />
            </div>
          </section>

          {/* Industry 4: Educational Institutions */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="relative">
              <Image
                src="/educational.jpg"
                alt="Educational Institution Cleaning"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                layout="responsive"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-black mb-4">Educational Institutions</h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                Schools, colleges, and universities require regular cleaning to ensure a healthy learning environment. Our specialized cleaning services help maintain cleanliness while keeping the environment safe and eco-friendly for students and staff.
              </p>
            </div>
          </section>

          {/* Industry 5: Hospitality Industry */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-black mb-4">Hospitality Industry</h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                Our cleaning solutions are ideal for hotels, restaurants, and resorts. We help maintain cleanliness and hygiene in all areas, ensuring that guests enjoy a comfortable, safe, and healthy stay.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/hospitalityimages-518494979.webp"
                alt="Hospitality Industry Cleaning"
                width={800}
                height={300}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                layout="responsive"
              />
            </div>
          </section>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-teal-600 py-16 text-center text-white">
        <h3 className="text-3xl font-semibold mb-6">Partner With Us Today</h3>
        <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
          Whether you&apos;re in healthcare, hospitality, education, or any other industry, we have the right cleaning solutions for you. Get in touch with us to learn how we can serve your industry with top-quality, eco-friendly cleaning products and services.
        </p>
        <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105">
          Contact Us Now
        </button>
      </div>

      <Footer />
    </>
  );
};

export default IndustriesWeServe;