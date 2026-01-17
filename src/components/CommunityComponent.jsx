import React from 'react';
import {  Smile , HandCoins, HandHelping } from 'lucide-react';
import ch_2 from '/images/people-inchurch.webp'

export default function CommunityComponent() {
  const impactHighlights = [
    "Planting self-supporting, self-propagating churches across Kenya.",
    "Engaging in community development projects, from education to infrastructure.",
    "Supporting vulnerable groups through compassion-based programs.",
    "Raising generations of leaders through structured youth and education programs."
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="w-full flex justify-center">
        <div className="w-[10rem] h-[0.4rem] bg-primary mb-[3rem]"/>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-1 lg:order-1">
            {/* Header */}
            <div className="mb-8">
              <p className="text-red-500 text-sm font-medium uppercase tracking-wider mb-3">
                COMMUNITY IMPACT
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
                Ministry Beyond the Pulpit
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
                At Elim Pentecostal Church of Kenya, we believe the gospel addresses the whole person. That’s why our ministry extends beyond the pulpit into practical, transformative action in communities across the nation.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {impactHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                {/* Placeholder for church interior image */}
                <img src={ch_2} alt='' />
              </div>
              
              {/* Floating Icons */}
                <div className='relative'>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-red-200/20 backdrop-blur-2xl rounded-full shadow-lg p-3 items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex p-2 items-center justify-center shadow-lg">
                    <Smile  className="w-6 h-6 text-white" />
                  </div>
                  <div className='bg-white w-[0.1rem] h-[2.3rem]' />
                  <div className="w-10 h-10 p-2 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <HandCoins className="w-6 h-6 text-white" />
                  </div>
                  <div className='bg-white w-[0.1rem] h-[2.3rem]' />
                  <div className="w-10 h-10 bg-primary p-2 rounded-full flex items-center justify-center shadow-lg">
                    <HandHelping className="w-6 h-6 text-white" />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
