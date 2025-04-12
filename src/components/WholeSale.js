import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const WholeSale = () => {
  return (
    <div className="wholeshell-retails-container py-4 px-6 md:px-12 bg-gray-100">
      {/* Container */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-4xl font-bold text-black text-center leading-tight mb-6">
  Wholesale &amp; Retail Chemicals at Best Prices
</h1>



        {/* Main Content */}
        <div className="text-lg mx-w-4xl text-gray-950 mb-6 leading-relaxed text-center md:text-center">
        <span style={{ color: 'green' }} className="font-bold text-xl">Bhagwati Durga Enterprises</span> offers top-quality cleaning chemicals at the best prices for wholesalers and retailers.


          <p>
            Whether you're stocking your store or supplying your business, our eco-friendly solutions have you covered.
          </p>
          <p>
            We aim to make cleaning easier, healthier, and more sustainable!
          </p>
        </div>

        {/* Benefits and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/ 1stwholesale.webp" // Ensure path is correct
                alt="High-Quality Products"
                className="mb-4 rounded-md w-full h-full object-cover"
                width={400}
                height={250}
              />
              <h3 className="text-xl font-semibold text-black">High-Quality Products</h3>
            </div>
            <p className="text-gray-700">
              We provide high-quality, eco-friendly cleaning products that are effective and safe for use in various environments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/3rdwholesale.webp" // External image, ensure correct URL
                alt="Competitive Prices"
                className="mb-4 rounded-md w-full h-full object-cover"
                width={400}
                height={250}
              />
              <h3 className="text-xl font-semibold text-black">Competitive Prices</h3>
            </div>
            <p className="text-gray-700">
              Our wholesale prices are designed to maximize your profit margins, helping you stay competitive in the market.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/3wholesale.jpg" // Ensure path is correct
                alt="Flexible Orders"
                className="mb-4 rounded-md w-full h-full object-cover"
                width={400}
                height={250}
              />
              <h3 className="text-xl font-semibold text-black">Flexible Orders</h3>
            </div>
            <p className="text-gray-700">
              {"We offer flexible order quantities to suit your business needs, whether you're ordering small or large volumes."}
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/4wholesale.webp" // External image, ensure correct URL
                alt="Fast Delivery"
                className="mb-4 rounded-md w-full h-full object-cover"
                width={400}
                height={250}
              />
              <h3 className="text-xl font-semibold text-black">Fast & Reliable Delivery</h3>
            </div>
            <p className="text-gray-700">
              Count on us for fast and reliable delivery, ensuring you always stay stocked and ready to meet customer demands.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/5wholesale.jpg" // Ensure path is correct
                alt="Customer Support"
                className="mb-4 rounded-md w-full h-full object-cover"
                width={400}
                height={250}
              />
              <h3 className="text-xl font-semibold text-black">Customer Support</h3>
            </div>
            <p className="text-gray-700">
              Our dedicated customer support team is always available to help with any queries or specific requirements you have.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <Image
                src="/6wholesale.webp" // Ensure path is correct
                alt="Exclusive Offers"
                className="mb-4 rounded-md w-full h-60 object-cover"
                width={400}
                height={250}
              />
              <h3 className="text-xl font-semibold text-black">Exclusive Offers</h3>
            </div>
            <p className="text-gray-700">
              We offer exclusive deals and discounts for bulk orders, making it more affordable to stock your inventory.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Link href="/contact">
            <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105">
              Contact Us for Bulk Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WholeSale;