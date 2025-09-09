import React from 'react';
import { Facebook, Twitter, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-900 to-red-950 text-white mt-auto w-full">
      <div className="container mx-auto px-4 py-12">
        {/* Logo and Social */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 mr-3">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-red-400">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Agrace</h2>
          </div>
          <p className="text-red-100 text-sm leading-relaxed mb-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
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
              <p>+1 (234) 567 890 00</p>
              <p>agrace.church@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <div className="text-red-100 text-sm">
              <p>323 New Valley Lane, Austin</p>
              <p className="mt-1">07:00 AM - 19:00 PM</p>
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
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-red-50 rounded-lg p-8 text-center text-gray-800 shadow-lg">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            Living the Gospel, Sharing God's Grace
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut sit tellus, luctus nec.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-medium transition-colors inline-flex items-center">
            Join Us Now
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}