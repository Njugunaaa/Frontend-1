import React from 'react';
import { Church, Heart, Gift } from 'lucide-react';
import Ch_1 from '../assets/images/church-about-img-two.webp'

export default function AboutServices() {
  const services = [
    {
      icon: Church,
      title: "Funeral ceremony",
      description: "il odio amet nibh vulputate cursus laccumsan ipsuy vel ibh vulputatet nibh."
    },
    {
      icon: Heart,
      title: "Wedding Concert",
      description: "il odio amet nibh vulputate cursus laccumsan ipsuy vel ibh vulputatet nibh."
    },
    {
      icon: Gift,
      title: "Donation Messages",
      description: "il odio amet nibh vulputate cursus laccumsan ipsuy vel ibh vulputatet nibh."
    }
  ];

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Illustration (Hidden on small screens) */}
          <div className="hidden lg:block">
            <img src={Ch_1} alt='' />
          </div>

          {/* Right Content - Services List */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              Watch our church<br />
              services online
            </h2>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}