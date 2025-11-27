import React from 'react';
import { Facebook, Twitter, Mail } from 'lucide-react';
import Logo from '../assets/logo-white.svg';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-900 to-red-950 text-white mt-auto w-full">
      <div className="container mx-auto px-4 py-10">
        {/* Logo and Church Name */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 mr-3">
              <img src={Logo} alt="Elim Pentecostal Church Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-2xl font-bold">Elim Pentecostal Church of Kenya</h2>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4 md:mt-0">
            <a href="#" className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded flex items-center justify-center transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded flex items-center justify-center transition-colors">
              <Twitter size={16} />
            </a>
            <a href="mailto:elimkenya@gmail.com" className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded flex items-center justify-center transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Footer Links and Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-red-100 text-sm">📞 0722693833</p>
            <p className="text-red-100 text-sm">✉ elimkenya@gmail.com</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Navigate</h3>
            <ul className="space-y-1 text-red-100 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="/sermons" className="hover:text-white transition-colors">Sermons</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* ELIM Meaning */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About ELIM</h3>
            <p className="text-red-100 text-sm">
              The Name “ELIM” is taken from Exodus 15:27: “The Israelites came to Elim, where there were twelve springs and seventy palm trees, and they camped there near the water.”  
              <br />
              We preach a message of rest and refreshing, salvation and healing for the body, soul, and spirit in the wilderness of this world.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-red-800 pt-4 text-center text-red-200 text-sm">
          &copy; {new Date().getFullYear()} Elim Pentecostal Church of Kenya. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
