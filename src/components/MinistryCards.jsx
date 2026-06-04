import React from 'react';
import { HandHeart, PersonStanding, HeartHandshake, Users, GraduationCap, BookOpen, MapPin, Building } from 'lucide-react';

export default function MinistryCards() {
  const ministries = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Dorcas Ministry (Women's Ministry)",
      description: "Empowering women spiritually, socially, and economically through training, fellowship, and outreach.",
      href: "/ministries/dorcas",
      link: "Learn More"
    },
    {
      icon: <PersonStanding className="w-8 h-8 text-white" />,
      title: "Youth Ministry",
      description: "Equipping young people (13–35 years) with biblical teaching, leadership skills, and opportunities to serve and lead in society.",
      href: "/ministries/youth",  
      link: "Learn More"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Caleb Ministry (Men's Fellowship)",
      description: "Building strong, responsible men of faith who influence families, communities, and the nation.",
      href: "/ministries/caleb",
      link: "Learn More"
    },
    {
      icon: <PersonStanding className="w-8 h-8 text-white" />,
      title: "Children & Sunday School Ministry",
      description: "Nurturing the next generation in biblical truth and holistic development.",
      href: "/ministries/children",
      link: "Learn More"
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Missions & Church Growth Department",
      description: "Driving evangelism, discipleship, and church planting across Kenya and beyond.",
      href: "/missions", 
      link: "Learn More"
    },
    {
      icon: <HandHeart className="w-8 h-8 text-white" />,
      title: "Ministrty of Helps",
      description: "Ensuring the holistic well-being of our communities through fellowship,donations, support systems, and empowerment programs.",
      href: "/ministries/helps",
      link: "Learn More"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="w-full flex justify-center">
        <div className="w-[10rem] h-[0.4rem] bg-primary mb-[3rem]"/>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
            OUR MINISTRIES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Key Community Ministries &<br />Programs
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-8 text-center">
              {/* Icon */}
              <div className='relative top-[-3rem] h-[2rem] '>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-6">
                  {ministry.icon}
                </div>
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
                href={ministry.href} 
                className="inline-flex items-center text-primary/90 text-sm font-medium hover:text-secondary transition-colors duration-200"
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