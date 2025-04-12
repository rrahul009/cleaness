import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, Company XYZ',
    quote: 'This cleaning service is incredible! Their team was professional, efficient, and left our office spotless. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Marketing Manager, ABC Corp',
    quote: 'A fantastic experience! They were punctual, friendly, and did an outstanding job cleaning our space. Will use again!',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Robert Green',
    title: 'Founder, CleanCo',
    quote: 'I am thoroughly impressed by their attention to detail and the quality of service they provide.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-600 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-4 rounded-2xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-300">
              <div className="flex justify-center mb-6">
                {/* <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md"> */}
                  {/* <Image 
                    src={testimonial.image} 
                    alt={testimonial.name || 'Testimonial author'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  /> */}
                {/* </div> */}
              </div>
              <p className="text-md text-gray-700 italic mb-6 px-2">{`"${testimonial.quote}"`}</p>
              {/* <h3 className="text-md font-semibold text-gray-800">{testimonial.name}</h3> */}
              {/* <p className="text-gray-500 text-md">{testimonial.title}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;