'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Close menu when an item is clicked

  return (
    <nav className="text-white shadow-md p-3" style={{ backgroundColor: '#005f73' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center">
        {/* Logo */}
        <Link href="/">
          <div className="text-3xl font-semibold font-custom text-teal-400 flex-shrink-0">
            <Image
              src="/gradient-carpet-cleaning-logo-design_23-2150713888.jpg"
              alt="Chemical Cleaners Logo"
              width={100}  // Set the width of the logo
              height={100} // Set the height of the logo
              className="w-16 h-16 object-cover"  // Optional: For custom sizing
            />

          </div></Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-start justify-center flex-grow">
          <Link href="/" className="text-white hover:text-teal-300 transition-all duration-300 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-teal-300 transition-all duration-300 font-medium">
            About Us
          </Link>
          <Link href="/service" className="text-white hover:text-teal-300 transition-all duration-300 font-medium">
            Services
          </Link>
          <Link href="/industryserved" className="text-white hover:text-teal-300 transition-all duration-300 font-medium">
            Industries Served
          </Link>
          <Link href="/contact" className="text-white hover:text-teal-300 transition-all duration-300 font-medium">
            Contact
          </Link>

        </div>

        {/* Email and Phone */}
        <div className="hidden md:flex text-white">
          <p> bhagwatidurgaenterprises2711@gmail.com, 9868986705</p>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-teal-800 rounded-b-lg shadow-lg transition-all duration-300 ease-in-out`}
      >
        <Link href="/" className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium" onClick={closeMenu}>
          About Us
        </Link>
        <Link href="/service" className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium" onClick={closeMenu}>
          Services
        </Link>
        <Link href="/industryserved" className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium" onClick={closeMenu}>
          Industries Served
        </Link>
        <Link href="/contact" className="block text-white hover:text-teal-300 py-4 px-6 transition-all duration-300 font-medium" onClick={closeMenu}>
          Contact
        </Link>
        <Link href="/contact" className="block text-white bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300" onClick={closeMenu}>
          Get a Quote
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;