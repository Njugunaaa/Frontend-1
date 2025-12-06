import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Heart, History, Target, Users } from 'lucide-react';
import AboutUsHero from '../components/AboutUsHero';
import AboutServices from '../components/AboutServices';
import OurHistory from '../components/OurHistory';
import WhatWeDo from '../components/WhatWeDo';
import TestimonialsComponent from '../components/TestimonialsComponent';

function AboutUs() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      id: 'services',
      title: 'Our Core Values',
      icon: Heart,
      component: AboutServices,
    },
    {
      id: 'history',
      title: 'Our Journey',
      icon: History,
      component: OurHistory,
    },
    {
      id: 'what-we-do',
      title: 'What We Do',
      icon: Target,
      component: WhatWeDo,
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      icon: Users,
      component: TestimonialsComponent,
    }
  ];

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <AboutUsHero />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn More About Us
          </h2>
          <p className="text-gray-600 text-lg">
            Click any section below to explore
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon;
            const isOpen = openSection === section.id;
            const Component = section.component;

            return (
              <div
                key={section.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Section Button */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#A00000] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 text-left">
                      {section.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-6 h-6 text-[#A00000]" />
                  </motion.div>
                </button>

                {/* Section Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-200">
                        <Component />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#A00000] to-[#8B0000]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Visit Us This Sunday
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            We'd love to meet you in person. Join us for worship and experience our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-[#A00000] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Contact Us
            </a>
            <a
              href="/events"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#A00000] transition-all"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;