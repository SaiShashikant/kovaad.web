'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Image from "next/legacy/image";
import { footer } from '@/app/lib/AppConstants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-start items-center">
          <Link href="/" className="hover:text-yellow-500">
            <Image src="/full_logo_white.png" alt="Ko-VaaD" width={200} height={200}/>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul>
              {footer.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-yellow-500">
                      {link.title}
                    </a>
                  </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Support</h3>
            <ul>
              {footer.supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-yellow-500">
                      {link.title}
                    </a>
                  </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Contact Us</h3>
            <ul>
              {footer.contactLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-yellow-500">
                      {link.title}
                    </a>
                  </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-yellow-500"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-yellow-500"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-yellow-500"/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-yellow-500"/>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm mt-6">
          <p>&copy; {new Date().getFullYear()} Ko-VaaD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
