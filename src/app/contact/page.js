'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    // Simulating form submission
    setFormStatus('Thank you for your message! We will get back to you soon.');
    
    // Clear the form (optional)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-teal-500 mb-4">Contact Us</h2>
      
      {/* Form Submission Status */}
      {formStatus && <p className="text-green-500 mb-4">{formStatus}</p>}

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-3 rounded-md hover:bg-teal-700"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Additional Contact Info */}
      <div className="mt-8 text-center">
        <p className="text-gray-700">Or reach us at:</p>
        <p className="font-medium text-teal-600">Email:bhagwatidurgaenterprises2711@gmail.com</p>
        <p className="font-medium text-teal-600">Phone: 7011881174</p>
        <p className="font-medium text-teal-600" >Address- Talimabad, Sangam Vihar, New Delhi 110080</p>
      </div>
    </div>

    <Footer/>
    </>
  
  );
};

export default ContactPage;