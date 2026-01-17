import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Mountain, Sword, Coffee, ArrowRight, Target } from "lucide-react";

export default function CalebMinistry() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-[#A00000] to-[#8B0000] overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/caleb-hero.webp')" }}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Caleb Ministry
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
              Building strong men of faith, courage, and integrity
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Warriors for God's Kingdom</h2>
            <div className="w-20 h-1 bg-[#A00000] mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Named after Caleb—the man who, at 85 years old, declared "Give me this mountain!"—our men's ministry 
              is about developing courage, faith, and unwavering commitment to God's purposes. We're raising men who 
              lead their families, serve their communities, and pursue God with wholehearted devotion.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center mb-16"
          >
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In a world that often confuses masculinity with aggression or passivity, we're rediscovering 
                what it means to be godly men. Strong yet tender. Courageous yet humble. Leaders who serve. 
                Warriors who love. Men after God's own heart.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're navigating career decisions, building a family, overcoming challenges, or simply 
                looking for brotherhood—Caleb Ministry is your tribe. We face life's mountains together.
              </p>
            </div>
            <div>
              <img 
                src="/images/caleb-1.webp" 
                alt="Men's fellowship"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Building Men of God
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-[#FDF0D5] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-[#A00000] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Coffee className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monthly Gatherings</h3>
              <p className="text-gray-700 leading-relaxed">
                First Saturday of every month. Powerful teaching, honest conversation, and strategic planning over 
                breakfast. Real talk about real life—no masks, no pretense.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-[#FDF0D5] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-[#A00000] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Sword className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accountability Groups</h3>
              <p className="text-gray-700 leading-relaxed">
                Small circles of 4-6 men who commit to walking together through victories and struggles. 
                Iron sharpens iron—we make each other better.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-br from-[#FDF0D5] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-[#A00000] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Mountain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Adventure & Service</h3>
              <p className="text-gray-700 leading-relaxed">
                From outdoor retreats to community projects—we bond through shared experiences. Men grow strongest 
                when challenged together.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#A00000] to-[#8B0000] rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-3xl font-bold text-center mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Spiritual Leadership</h4>
                  <p className="text-gray-200">Leading families and communities with wisdom, love, and integrity</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Authentic Brotherhood</h4>
                  <p className="text-gray-200">Creating safe spaces for vulnerability, growth, and real friendship</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Kingdom Service</h4>
                  <p className="text-gray-200">Using our strength and skills to serve God and transform communities</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Courageous Faith</h4>
                  <p className="text-gray-200">Taking bold steps of faith and conquering the mountains God sets before us</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics We Address */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Real Issues. Biblical Answers.
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Marriage & Family",
              "Career & Purpose",
              "Financial Stewardship",
              "Purity & Integrity",
              "Fatherhood",
              "Mental Health",
              "Leadership",
              "Spiritual Warfare"
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <p className="font-semibold text-gray-900">{topic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#FDF0D5] to-white p-8 md:p-12 rounded-2xl shadow-xl border-l-4 border-[#A00000]"
          >
            <p className="text-xl text-gray-800 italic mb-6 leading-relaxed">
              "Caleb Ministry changed my life. I came broken, hiding behind success and struggling in silence. 
              Here, I found brothers who helped me become the husband and father God called me to be. 
              I'm not perfect, but I'm no longer alone in the battle."
            </p>
            <p className="text-gray-600 font-semibold">— David M., Member since 2021</p>
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
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Give Me This Mountain</h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Like Caleb, it's time to claim the promises God has for you. Join men who will stand with you, 
              challenge you, and help you become everything God created you to be. Your mountain is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#A00000] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Join the Brotherhood
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/events"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#A00000] transition-all duration-300 hover:scale-105"
              >
                Next Meeting
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}