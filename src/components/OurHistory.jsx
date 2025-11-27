import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import carousel images
import img1 from '/images/1.jpg';
import img2 from '/images/2.jpg';
import img3 from '/images/3.jpg';
import img4 from '/images/4.jpg';

export default function OurHistory() {
  const carouselImages = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-50 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Image Carousel */}
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
              {/* Sliding animation container */}
              <div className="relative w-full h-full">
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Elim Pentecostal Church history ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      index === currentImageIndex
                        ? 'translate-x-0 opacity-100'
                        : index < currentImageIndex
                        ? '-translate-x-full opacity-0'
                        : 'translate-x-full opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="lg:pl-8">
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Our History Since 1990
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Over 30 Years of<br />
              Faithful Ministry<br />
              in Kenya and Beyond
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Since our founding in 1990, Elim Pentecostal Church of Kenya (EPCK) 
              has been a beacon of hope and faith in the various kenyan communities across the country. 
                For over three decades, we have remained steadfast in our mission to 
                spread the Gospel and serve our neighbors.
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                Our church family has grown from humble beginnings to a vibrant 
                community of believers who gather to worship, fellowship, and support 
                one another. We continue to believe in Jesus Christ as our Savior, 
                Healer, Baptiser with the Holy Spirit, and Soon Coming King.
              </p>

              {/* Church Milestones */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">Our Journey</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>1990:</strong> Elim Pentecostal Church founded</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>2020s:</strong> Expanded to online ministries and live streaming</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Today:</strong> 1,500+ followers and growing community</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional navigation arrows for consistency */}
            <div className="flex space-x-4">
              <button
                onClick={prevImage}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextImage}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Next image"
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