import React from 'react';
import { Users, Heart, UserCheck } from 'lucide-react';

export default function MinistryCards() {
  const ministries = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Children Ministry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat sit amet lorem et rutrum.",
      link: "Learn More"
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Charity Ministry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat sit amet lorem et rutrum.",
      link: "Learn More"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "Elderly Ministry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat sit amet lorem et rutrum.",
      link: "Learn More"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm font-medium uppercase tracking-wider mb-2">
            OUR MINISTRIES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Empowering Faith, Embracing<br />Diversity
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-8 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mb-6">
                {ministry.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {ministry.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {ministry.description}
              </p>
              
              {/* Learn More Link */}
              <a 
                href="#" 
                className="inline-flex items-center text-red-500 text-sm font-medium hover:text-red-600 transition-colors duration-200"
              >
                {ministry.link}
                <svg 
                  className="ml-1 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}