import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const CleanesFeature = () => {
    // Array of cleanliness product details
    const products = [
        {
            image: '/cleanesFeature1.jpeg',
            name: 'Eco-Friendly Surface Cleaner',
            description: 'A powerful and safe cleaner for all surfaces, leaving no harmful residues.',
            features: ['Non-toxic', 'Biodegradable', 'Streak-free finish'],
            link: '#',
        },
        {
              image: '/2cleanessfeature.jpeg',
            name: 'Antibacterial Hand Wash',
            description: 'Kills 99.9% of germs while keeping your hands soft and moisturized.',
            features: ['Gentle on skin', 'Alcohol-based', 'Refreshing fragrance'],
            link: '#',
        },
        {
              image: '/3cleanessfeature.jpeg',
            name: 'Disinfectant Spray',
            description: 'Eliminates bacteria and viruses from high-touch surfaces.',
            features: ['Fast-acting', 'Safe for electronics', 'Long-lasting protection'],
            link: '#',
        },
        {
              image: '/4cleanessfeature.jpeg',
            name: 'Air Purifier & Freshener',
            description: 'Removes airborne bacteria and odors for a fresher environment.',
            features: ['HEPA filtration', 'Aromatherapy compatible', 'Low energy consumption'],
            link: '#',
        },
    ];

    return (
        <section className="bg-blue-50 py-6 px-4">
            <p className="text-center text-3xl font-bold">Explore Our Cleanliness Solutions</p>
            <p className="text-md mb-4 text-center">Safe, Effective, and Eco-Friendly</p>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Product Image */}
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}  // Add width
                            height={300} // Add height
                            className="w-full h-72 object-cover p-5"
                        />
                        <div className="p-6">
                            {/* Product Title */}
                            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                            {/* Product Description */}
                            <p className="text-gray-600 mt-2">{product.description}</p>

                            {/* Product Features List */}
                            <ul className="mt-4 space-y-2 text-gray-700">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0z" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Call to Action Button */}
                            <Link href={product.link} className="inline-block mt-4 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CleanesFeature;