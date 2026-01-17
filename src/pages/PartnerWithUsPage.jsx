import React from "react";
import { motion } from "framer-motion";
import { Link, Users, Heart, Handshake, Globe, ArrowRight, Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function PartnerWithUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const waysToComeAlongside = [
    {
      icon: Heart,
      title: "Pray With Us",
      desc: "Join our prayer network and intercede for missions across Africa. Prayer is the foundation of everything we do.",
      action: "Join Prayer Team"
    },
    {
      icon: Users,
      title: "Visit a Church",
      desc: "Experience worship with us! Visit any of our church locations and become part of our growing family.",
      action: "Find a Church"
    },
    {
      icon: Globe,
      title: "Go on Mission",
      desc: "Join a short-term mission trip and see firsthand how God is moving across Kenya and East Africa.",
      action: "Explore Trips"
    },
    {
      icon: Handshake,
      title: "Share Your Skills",
      desc: "Use your talents—teaching, building, healthcare, business—to serve and empower communities.",
      action: "Volunteer"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-[#A00000] to-[#8B0000] overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/partnership-hero.webp')" }}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
              Join a movement bringing the gospel and hope to communities across Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">You're Invited to Be Part of Something Bigger</h2>
            <div className="w-20 h-1 bg-[#A00000] mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              At EPCK, partnership isn't about money—it's about mission. It's about walking together, praying together, 
              and serving together as we take the gospel to every corner of Kenya and beyond. Whether you can pray, go, 
              or give, you have a place in this family.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're not asking you to subscribe to anything. We're inviting you to join a family on mission—
              planting churches, transforming communities, and changing lives through the power of Jesus Christ.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center mb-16"
          >
            <div>
              <img 
                src="/images/partnership-1.webp" 
                alt="Church community together"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Does Partnership Mean?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#A00000] p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">You're Family</h4>
                    <p className="text-gray-600 text-sm">We journey together through prayer, encouragement, and shared vision for reaching the lost.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#A00000] p-2 rounded-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">You're Connected</h4>
                    <p className="text-gray-600 text-sm">Stay updated with regular news, prayer requests, and testimonies from the mission field.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#A00000] p-2 rounded-lg">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">You're Part of the Mission</h4>
                    <p className="text-gray-600 text-sm">Every prayer, every gift, every act of service multiplies the impact of the gospel.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ways to Come Alongside */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Ways to Come Alongside Us
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {waysToComeAlongside.map((way, index) => {
              const Icon = way.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-[#FDF0D5] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#A00000]"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-[#A00000] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{way.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{way.desc}</p>
                      <button className="text-[#A00000] font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                        {way.action}
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supporting the Mission */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Supporting the Mission</h2>
            <div className="w-20 h-1 bg-[#A00000] mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Mission work requires resources—from Bibles and training materials to church buildings and community projects. 
              If God has blessed you and you'd like to invest in eternal impact, we welcome your generous support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Where Your Support Goes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Church Planting</p>
                    <p className="text-gray-600 text-sm">Establishing new congregations in unreached areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Leader Training</p>
                    <p className="text-gray-600 text-sm">Equipping pastors and missionaries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Community Care</p>
                    <p className="text-gray-600 text-sm">Clean water, education, and compassion projects</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-[#A00000] to-[#8B0000] p-8 rounded-xl shadow-xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Ways to Give</h3>
              <div className="space-y-3 mb-6">
                <p className="flex items-center gap-2">
                  <span className="bg-white/20 px-2 py-1 rounded">✓</span>
                  One-time gifts
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-white/20 px-2 py-1 rounded">✓</span>
                  Regular monthly support
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-white/20 px-2 py-1 rounded">✓</span>
                  Project-specific funding
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-white/20 px-2 py-1 rounded">✓</span>
                  In-kind donations
                </p>
              </div>
              <a
                href="/join/give"
                className="block text-center bg-white text-[#A00000] py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Give to the Mission
              </a>
              <p className="text-sm text-gray-200 text-center mt-3">
                100% tax-deductible • Fully transparent reporting
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            The Impact We're Making Together
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#FDF0D5] to-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold text-[#A00000] mb-2">150+</div>
              <p className="text-gray-700 font-semibold">Churches Planted</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#FDF0D5] to-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold text-[#A00000] mb-2">5,000+</div>
              <p className="text-gray-700 font-semibold">Lives Transformed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#FDF0D5] to-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold text-[#A00000] mb-2">30+</div>
              <p className="text-gray-700 font-semibold">Years of Ministry</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-[#FDF0D5] to-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold text-[#A00000] mb-2">12</div>
              <p className="text-gray-700 font-semibold">Counties Reached</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-l-4 border-[#A00000]"
          >
            <p className="text-xl text-gray-800 italic mb-6 leading-relaxed">
              "When we started praying for EPCK, we never imagined we'd end up visiting mission fields and seeing 
              firsthand how God is moving. This isn't just a church—it's a family united by one mission: 
              to see all of Africa know Jesus."
            </p>
            <p className="text-gray-600 font-semibold">— Peter & Grace M., Partners since 2018</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#A00000] to-[#8B0000]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Handshake className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Mission?</h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              There's a place for you in this family. Whether you pray, serve, go, or give—your partnership 
              matters. Let's reach Africa together with the hope of Jesus Christ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#A00000] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Connected
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/join/give"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#A00000] transition-all duration-300 hover:scale-105"
              >
                Support the Mission
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@epck.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+254 722693833</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}