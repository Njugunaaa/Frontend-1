import React from 'react';
import { ArrowRight, Users, Target, BookOpen } from 'lucide-react';

export default function WhatWeDo() {
  const activities = [
    {
      icon: Users,
      title: "Our Community",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut dolores nec.",
      color: "text-orange-400"
    },
    {
      icon: Target,
      title: "Church Mission",
      description: "Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. At vero eos et accusam et justo.",
      color: "text-orange-400"
    },
    {
      icon: BookOpen,
      title: "Our Mentors",
      description: "Aliquam laoreet sed neque ac vehicula. Craserat congue eros nec quam laoreet, in viverra erat bibendum icras.",
      color: "text-orange-400"
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
            Keeping Our Church Running Smoothly
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <activity.icon className={`w-8 h-8 ${activity.color}`} />
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
              <div className="flex justify-end">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
