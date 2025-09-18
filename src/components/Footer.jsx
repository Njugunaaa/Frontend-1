import React from 'react';
import { Facebook, Twitter, Mail, Linkedin } from 'lucide-react';
import Logo from '../assets/logo-white.svg';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-900 to-red-950 text-white mt-auto w-full">
      <div className="container mx-auto px-4 py-12">
        {/* Logo and Social */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 mr-3">
              <img src={Logo} alt="Elim Pentecostal Church of Kenya Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-2xl font-bold">Elim Pentecostal Church of Kenya</h2>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="#" className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded flex items-center justify-center transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded flex items-center justify-center transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded flex items-center justify-center transition-colors">
              <Mail size={16} />
            </a>
            <a href="#" className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded flex items-center justify-center transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Contact, Address, Explore, Support - Row on Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-red-100 text-sm">
              <p>0726 496396</p>
              <p>elimtenachurch@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <div className="text-red-100 text-sm">
              <p>Manyanja Road - A few metres after Gertrudes Hospital, Nairobi, Kenya</p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-red-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ministries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-red-100 text-sm">
              <li>Elim Pentecostal Church of Kenya - HQ, was found in 1990.</li>
              <li>We believe in Jesus Christ as the SAVIOR, HEALER, BAPTISER with the HOLYSPIRIT and SOON COMING KING.</li>
              <li>The Name ELIM is from Exodus 15:27... a place Nourishment and Shading from the heat of Life.</li>
              <li>Page · Religious organisation</li>
            </ul>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-red-50 rounded-lg p-8 text-center text-gray-800 shadow-lg">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            Living the Gospel, Sharing God's Grace
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Manyanja Road- A few metres after Gertrudes Hospital, Nairobi, Kenya
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-medium transition-colors inline-flex items-center">
            Call Us Now
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
