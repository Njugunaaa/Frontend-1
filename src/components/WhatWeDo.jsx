import React from 'react';
import { ArrowRight, Users, Target, BookOpen, Video, Calendar, Heart } from 'lucide-react';

export default function WhatWeDo() {
  const activities = [
    {
      icon: Video,
      title: "Live Streaming Ministry",
      description: "We broadcast our worship services and events live online, reaching believers beyond our physical walls. Join us virtually for powerful worship, inspiring sermons, and spiritual fellowship.",
      color: "text-amber-600"
    },
    {
      icon: Users,
      title: "Community Fellowship",
      description: "Building strong relationships through regular fellowship gatherings, holy communion services, and church events that unite our diverse community in Christ's love.",
      color: "text-amber-600"
    },
    {
      icon: Calendar,
      title: "Special Events & Conferences",
      description: "Hosting impactful events like our Nairobi Metropolitan Conference, Vacation Bible School for children, and worship nights that strengthen our faith and community bonds.",
      color: "text-amber-600"
    },
    {
      icon: Target,
      title: "Evangelical Mission",
      description: "Spreading the Gospel message throughout Kenya and beyond, believing in Jesus Christ as our Savior, Healer, Baptiser with the Holy Spirit, and Soon Coming King.",
      color: "text-amber-600"
    },
    {
      icon: BookOpen,
      title: "Spiritual Teaching",
      description: "Providing biblical instruction and discipleship programs that help believers grow in their faith, understand God's word, and develop their spiritual gifts.",
      color: "text-amber-600"
    },
    {
      icon: Heart,
      title: "Pastoral Care",
      description: "Offering spiritual guidance, counseling, and support to our church family during life's challenges, celebrating victories, and nurturing personal relationships with God.",
      color: "text-amber-600"
    }
  ];

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Serving God & Our<br />
            Community Since 1990
          </h2>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            At Elim Pentecostal Church Kenya, we are committed to spreading God's love, 
            building strong community bonds, and helping believers grow in their spiritual journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                  <activity.icon className={`w-8 h-8 ${activity.color} group-hover:text-white transition-colors duration-300`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {activity.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {activity.description}
              </p>

              {/* Arrow */}
              {/* <div className="flex justify-end">
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors duration-300" />
              </div> */}
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Be part of our church family with over 1,500+ followers across social media 
              and growing community of believers in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-gray-700">
                <Users className="w-5 h-5 text-amber-600" />
                <span className="font-medium">1,542+ Facebook Community</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Video className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Live Services Online</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Calendar className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Open Until 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}