 
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CorporateBuilding = () => {
    return (
        <div className="py-16 px-6 md:px-12 bg-gray-100">
            {/* Container */}
            <div className="max-w-7xl mx-auto text-center space-y-8">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                    Premium Cleaning Solutions for Corporate &amp; Building Facilities
                </h1>

                {/* Main Content */}
                <p className="text-lg text-gray-800 mb-6 leading-relaxed max-w-3xl mx-auto">
                    At Bhagwati Durga Enterprises, we offer eco-friendly cleaning chemicals tailored for corporate offices, shopping malls, hospitals, and other commercial buildings. Keep your environment clean and hygienic with our sustainable and effective solutions.
                </p>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 relative overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="/corporate.webp"
                                alt="Corporate Office"
                                fill
                                className="object-cover rounded-t-xl"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-black mb-4 mt-6">Designed Just for You</h3>
                        <p className="text-gray-700">
                            Customized cleaning solutions designed to meet the unique needs of your facility, ensuring efficiency and cleanliness in every corner.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 relative overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="/mall2.webp"
                                alt="Shopping Mall"
                                fill
                                className="object-cover rounded-t-xl"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-black mb-4 mt-6">Eco-Friendly Products</h3>
                        <p className="text-gray-700">
                            Our products are not only powerful but also environmentally friendly, ensuring a clean space without harming the planet.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 relative overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="/hospital.jpg"
                                alt="Hospital"
                                fill
                                className="object-cover rounded-t-xl"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-black mb-4 mt-6">Comprehensive Coverage</h3>
                        <p className="text-gray-700">
                           {"Whether it's a corporate office, shopping mall, or healthcare facility, we have the perfect solution to meet your cleaning requirements."} 
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-8">
                  
                </div>
            </div>
        </div>
    );
};

export default CorporateBuilding;