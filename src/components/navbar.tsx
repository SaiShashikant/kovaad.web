"use client"

import React, {useState} from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

// Placeholder for your logo - replace with actual path
const logoPath = '/logo.png';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50"> {/* Example styling */}
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Hamburger Menu */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor" /* Example styling */
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src={logoPath}
                        alt="Your Company Logo"
                        width={40} // Adjust size as needed
                        height={40}
                    />
                    {/*Optionally add text next to the logo
           <span className="ml-2 text-xl font-bold">Your Company</span>
         */}
                </div>


                {/* Get Started Button - hidden on smaller screens initially */}
                <div className="hidden md:block">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="py-2 px-4">
                        {/* Example menu items */}
                        <li><a href="#" className="block py-1 text-gray-800 hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="block py-1 text-gray-800 hover:text-blue-500">About</a></li>
                        <li><a href="#" className="block py-1 text-gray-800 hover:text-blue-500">Services</a></li>
                        {/* Include Get Started button in the mobile menu */}
                        <li>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-2">
                                Get Started
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};