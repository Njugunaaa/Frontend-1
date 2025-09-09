import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialsComponent() {
  const testimonials = [
    {
      quote: "Spreading God's Word, Lighting the Way!",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit tellus, lorem nec. Donis ornare in ipsum non molestie. Quis rhoncus tempus risus nec tempor, sit tempor molestie, at risus est.",
      author: "Olivia Turner",
      avatar: "OT"
    },
    {
      quote: "Spreading God's Word, Lighting the Way!",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit tellus, lorem nec. Donis ornare in ipsum non molestie. Quis rhoncus tempus risus nec tempor, sit tempor molestie, at risus est.",
      author: "Adrian Mueller",
      avatar: "AM"
    },
    {
      quote: "Spreading God's Word, Lighting the Way!",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit tellus, lorem nec. Donis ornare in ipsum non molestie. Quis rhoncus tempus risus nec tempor, sit tempor molestie, at risus est.",
      author: "Brenda Kim",
      avatar: "BK"
    },
    {
      quote: "Spreading God's Word, Lighting the Way!",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit tellus, lorem nec. Donis ornare in ipsum non molestie. Quis rhoncus tempus risus nec tempor, sit tempor molestie, at risus est.",
      author: "Louis Newton",
      avatar: "LN"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm font-medium uppercase tracking-wider mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Growing Together in God's Word
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis tellus nec 
            lorem suscipit, eu pellentesque est ornare.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded text-sm font-medium transition-colors duration-200">
            View More
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-red-200" />
              </div>
              
              {/* Quote Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                "{testimonial.quote}"
              </h3>
              
              {/* Quote Content */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {testimonial.content}
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-medium text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="text-gray-800 font-medium text-sm">
                  {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}