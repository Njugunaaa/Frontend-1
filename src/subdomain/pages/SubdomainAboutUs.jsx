import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Target, Award, Calendar, MapPin } from 'lucide-react';

function SubdomainAboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const timelineEvents = [
    {
      year: "2010",
      title: "Foundation",
      description: "Grace Community Church was founded with a vision to create a welcoming space for all believers.",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      year: "2015",
      title: "Community Outreach",
      description: "Launched our first community outreach program, serving over 500 families in need.",
      icon: Users,
      color: "from-purple-500 to-indigo-500"
    },
    {
      year: "2018",
      title: "New Building",
      description: "Moved to our current location, expanding our capacity to serve more people.",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2020",
      title: "Digital Ministry",
      description: "Embraced digital transformation, reaching thousands online during challenging times.",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Celebrating 14 years of faithful service and looking forward to the future.",
      icon: Award,
      color: "from-orange-500 to-red-500"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We believe in showing God's love through acts of kindness and genuine care for one another."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building authentic relationships and supporting each other through life's journey."
    },
    {
      icon: Target,
      title: "Purpose",
      description: "Helping people discover their God-given purpose and live it out daily."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in all we do to honor God and serve our community."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20" />
<div
  className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z%22/%3E%3C/g%3E%3C/svg%3E')]"
/>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight"
              variants={itemVariants}
            >
              About
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Grace Community
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              For over 14 years, we've been a beacon of hope, love, and faith in our community.
              Discover our story, our values, and our vision for the future.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to a thriving community, our journey has been one of faith, growth, and unwavering commitment to God's calling.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-300 to-pink-300 h-full hidden md:block" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-6`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          {event.year}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          {event.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:flex w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full items-center justify-center shadow-lg">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>

                    <div className="w-full md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape who we are as a community.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed">
              Be part of something bigger than yourself. Join us as we continue to grow in faith and serve our community.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit This Sunday
              </motion.button>

              <motion.button
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SubdomainAboutUs;
