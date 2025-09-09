import React from 'react';
import { Users, Heart, UserCheck } from 'lucide-react';
import ch_2 from '../assets/images/people-inchurch.jpg'

export default function CommunityComponent() {
  const stats = [
    {
      number: "400+",
      label: "New Volunteer"
    },
    {
      number: "24M+",
      label: "Managed Donations"
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-1 lg:order-1">
            {/* Header */}
            <div className="mb-8">
              <p className="text-red-500 text-sm font-medium uppercase tracking-wider mb-3">
                OUR COMMUNITY
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
                Rooted in Faith, Reaching<br />for the World
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis tellus nec 
                lorem suscipit, eu pellentesque est ornare. Fusce rutrum congue felis vel 
                sollicitudin.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                {/* Placeholder for church interior image */}
                <div className="w-full h-full bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 flex items-center justify-center">
                 <img src={ch_2} alt='' />
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}