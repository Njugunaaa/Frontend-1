import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsComponent() {
  const testimonials = [
    {
      quote: "A Place of Spiritual Growth and Community",
      content: "Elim Pentecostal Church has been my spiritual home for over 5 years. The live streaming services during challenging times kept our community connected. Pastor's teachings about Jesus as our Healer have transformed my life, and the fellowship here is truly blessed.",
      author: "Grace Wanjiku",
      avatar: "GW"
    },
    {
      quote: "Experiencing God's Love Through Fellowship",
      content: "Since joining this church family in Tena, I've witnessed the power of the Holy Spirit in action. The children's programs are excellent - my kids love Vacation Bible School. The community here truly believes in Jesus as our Soon Coming King, and it shows in everything they do.",
      author: "David Mwangi",
      avatar: "DM"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="w-full flex justify-center">
        <div className="w-[10rem] h-[0.4rem] bg-amber-600 mb-[3rem]"/>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-amber-600 text-sm font-medium uppercase tracking-wider mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Growing Together in God's Word
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Hear from our church family about how Elim Pentecostal Church – Tena has 
            impacted their spiritual journey and strengthened their faith in Christ.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded text-sm font-medium transition-colors duration-200">
            Join Our Community
          </button>
        </div>

        {/* Testimonials Slider */}
        <div className="relative mt-12">
          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonials Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-amber-200" />
                    </div>
                    
                    {/* Quote Title */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      "{testimonial.quote}"
                    </h3>
                    
                    {/* Quote Content */}
                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                      {testimonial.content}
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-amber-600 font-medium text-sm">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="text-gray-800 font-semibold">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-500 text-sm">
                          Church Member
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-amber-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-amber-600 mb-2">30+</div>
              <div className="text-gray-600">Years of Ministry</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-amber-600 mb-2">1,500+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-amber-600 mb-2">Weekly</div>
              <div className="text-gray-600">Live Services</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}