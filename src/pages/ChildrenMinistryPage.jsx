import React from "react";
import { motion } from "framer-motion";
import { Heart, Smile, BookOpen, Users, Star, ArrowRight, Clock, MapPin } from "lucide-react";

export default function ChildrenMinistryPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const ageGroups = [
    { age: "0-2 years", name: "Nursery", desc: "Safe, loving care for our littlest ones" },
    { age: "3-5 years", name: "Preschool", desc: "Fun Bible stories and foundational truths" },
    { age: "6-9 years", name: "Juniors", desc: "Interactive lessons and Scripture memory" },
    { age: "10-12 years", name: "Preteens", desc: "Deeper study and leadership development" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-[#A00000] to-[#8B0000] overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/children-hero.webp')" }}
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
              Children & Sunday School
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
              Nurturing young hearts for Christ through love, fun, and biblical teaching
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Where Little Hearts Meet a Big God</h2>
            <div className="w-20 h-1 bg-[#A00000] mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Jesus said, "Let the little children come to me." At EPCK, we take this seriously. Our Children's Ministry 
              creates a safe, joyful environment where kids encounter God's love, learn biblical truths, and develop 
              a lifelong faith that's their own—not just their parents'.
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
                src="/images/children-1.webp" 
                alt="Children learning Bible stories"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We use age-appropriate teaching methods—stories, songs, crafts, games, and interactive activities—
                to make Scripture come alive. Every lesson is designed to be memorable, meaningful, and fun.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                But more than curriculum, we're building relationships. Our trained volunteers love your children, 
                pray for them by name, and create a spiritual foundation that will last forever.
              </p>
              <div className="bg-[#FDF0D5] p-6 rounded-xl border-l-4 border-[#A00000]">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-[#A00000]" />
                  <p className="text-gray-800 font-semibold">Every Sunday | 9:00 AM & 11:00 AM</p>
                </div>
                <p className="text-gray-600 text-sm">Age-appropriate classes during both services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Programs by Age
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ageGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-[#FDF0D5] to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="bg-[#A00000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#A00000] font-bold text-sm mb-1">{group.age}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{group.name}</h3>
                <p className="text-sm text-gray-600">{group.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* What Kids Learn */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#A00000] to-[#8B0000] rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-3xl font-bold text-center mb-8">What Your Child Will Learn</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Bible Stories</h4>
                <p className="text-gray-200">From Creation to Christ, kids explore God's story in exciting, age-appropriate ways</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">God's Love</h4>
                <p className="text-gray-200">They'll discover they're loved, valued, and created for a purpose by a good Father</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Christian Values</h4>
                <p className="text-gray-200">Kindness, honesty, courage, and compassion—living out faith in everyday life</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety & Care */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Your Child's Safety is Our Priority
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smile className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Screened Volunteers</h3>
              <p className="text-gray-700">All workers are background-checked and trained in child safety protocols</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Check-In</h3>
              <p className="text-gray-700">Digital check-in system ensures only authorized adults can pick up your child</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthy Ratios</h3>
              <p className="text-gray-700">We maintain appropriate adult-to-child ratios for personalized attention</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parent Testimonial */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#FDF0D5] to-white p-8 md:p-12 rounded-2xl shadow-xl border-l-4 border-[#A00000]"
          >
            <p className="text-xl text-gray-800 italic mb-6 leading-relaxed">
              "My daughter asks every week when we're going back to church. She loves her teachers and comes home 
              singing worship songs and telling me about Moses, David, and Jesus. I'm amazed at how much Scripture 
              she's learning—and actually understanding!"
            </p>
            <p className="text-gray-600 font-semibold">— Grace N., Parent of 6-year-old</p>
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
            <Smile className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Bring Your Family This Sunday</h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Your child deserves a place where they can grow in faith, make friends, and discover God's love. 
              Join us this Sunday—we can't wait to meet your family!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#A00000] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Plan Your Visit
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#A00000] transition-all duration-300 hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}