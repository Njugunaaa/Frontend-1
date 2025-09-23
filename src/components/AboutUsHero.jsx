import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import Ch_1 from '/images/church-about-img.webp'
import sig from '/images/sig-img.webp'
import BreadCrumb from './BreadCrump';

export default function AboutUsHero() {
  return (
    <section className="bg-gray-50 py-12 lg:py-20">
        <BreadCrumb items={[
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about' },
        ]}/>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to<br />
              Elim Pentecostal<br />
              Church – Tena
            </h1>
            
            <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
              Founded in 1990, Elim Pentecostal Church of Kenya (EPCK) Headquarters 
              has been serving our community in Tena, Nairobi for over three decades. 
              We believe in Jesus Christ as our Savior, Healer, Baptiser with the Holy Spirit, 
              and Soon Coming King. Join our vibrant community of faith as we worship together 
              and grow in God's love.
            </p>

            {/* Meeting Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Join us for worship!</p>
                  <p className="text-amber-600 font-medium">Live services and events regularly streamed online.</p>
                  <p className="text-gray-600 text-sm">Open until 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Tena, Nairobi County<br />
                    Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    +254 726 496396
                  </p>
                  <p className="text-gray-600 text-sm">Call us for more information</p>
                </div>
              </div>
            </div>

            {/* Church Statistics */}
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Community</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-amber-600">1,542+</p>
                  <p className="text-sm text-gray-600">Facebook Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-600">1.9K+</p>
                  <p className="text-sm text-gray-600">Instagram Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-600">263+</p>
                  <p className="text-sm text-gray-600">Church Visits</p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="mb-8">
              <img src={sig} alt='Pastor Signature' />
            </div>
          </div>

          {/* Right Content - Church Image */}
          <div className="order-1 lg:order-2">
              <img 
                src={Ch_1} 
                alt='Elim Pentecostal Church Tena Building' 
                className="w-full h-auto rounded-lg "
              />
          </div>
        </div>

      </div>
    </section>
  );
}