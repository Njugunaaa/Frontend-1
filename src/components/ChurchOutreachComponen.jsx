import React from 'react';

export default function ChurchOutreachComponent() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Main content section */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
        {/* Left side - Geometric design */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative bg-gradient-to-b from-blue-100 to-blue-50 rounded-3xl p-16 w-full max-w-md aspect-square flex items-center justify-center">
            {/* Geometric triangle design */}
            <div className="relative">
              <div className="w-32 h-32 relative">
                {/* Outer triangle */}
                <div className="absolute inset-0 border-4 border-blue-300 transform rotate-0"
                     style={{
                       clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                     }}>
                </div>
                {/* Middle triangle */}
                <div className="absolute inset-4 border-4 border-blue-500 transform rotate-0"
                     style={{
                       clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                     }}>
                </div>
                {/* Inner triangle */}
                <div className="absolute inset-8 border-4 border-blue-700 transform rotate-0"
                     style={{
                       clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                     }}>
                </div>
                {/* Center triangle filled */}
                <div className="absolute inset-12 bg-blue-800 transform rotate-0"
                     style={{
                       clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                     }}>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Strengthen Your Community Through Faith
          </h1>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Our church actively engages with the local community through meaningful outreach programs, 
            building bridges of hope and compassion. We believe in serving others as an expression of 
            God's love, creating lasting relationships that transform lives and strengthen neighborhoods.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Through dedicated service and authentic relationships, we reach out to meet both spiritual 
            and practical needs in our community.
          </p>
        </div>
      </div>

      {/* Statistics section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Community Members Reached */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
          <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">2.5k</div>
          <div className="text-gray-700 font-semibold text-lg">Community Members Reached</div>
        </div>

        {/* Active Programs */}
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">15+</div>
          <div className="text-gray-700 font-semibold text-lg">Active Outreach Programs</div>
          {/* Decorative icon */}
          <div className="absolute top-4 right-4 opacity-20">
            <div className="w-12 h-12 border-4 border-gray-400 rounded-lg transform rotate-12"></div>
            <div className="w-8 h-8 border-3 border-gray-400 rounded-lg transform -rotate-12 mt-2 ml-4"></div>
            <div className="w-6 h-6 border-2 border-gray-400 rounded-lg transform rotate-45 -mt-6 ml-8"></div>
          </div>
        </div>

        {/* Hours of Service */}
        <div className="bg-gradient-to-b from-red-50 to-red-100 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">8,250</div>
          <div className="text-gray-700 font-semibold text-lg">Annual Service Hours</div>
          {/* Decorative icon */}
          <div className="absolute top-4 right-4 opacity-20">
            <div className="w-16 h-16 rounded-full border-4 border-red-300 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-red-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}