import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function OurHistoryFixed() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 3 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? 3 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-50 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg overflow-hidden">
              {/* Placeholder for the hands and dove image */}
              <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                🕊
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="lg:pl-8">
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Our History
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Live to Glorify<br />
              God in All We Do
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Founded in 1990, Elim Pentecostal Church of Kenya (EPCK) has been a beacon of faith in many communities across Kenya. We believe Jesus Christ is our Savior, Healer, Baptiser with the Holy Spirit, and Soon Coming King. Our church family continues to grow and serve the community with dedication and love.
            </p>

            {/* Navigation arrows */}
            <div className="flex space-x-4">
              <button
                onClick={prevImage}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextImage}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
