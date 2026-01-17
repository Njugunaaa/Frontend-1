import React from "react";
import { motion } from "framer-motion";
import { HandHeart, Globe, Home, Book, Droplet, Heart, ArrowRight, CheckCircle } from "lucide-react";

export default function SupportMissions() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const impactAreas = [
    {
      icon: Home,
      title: "Church Planting",
      desc: "Establish new churches in unreached areas",
      amount: "$5,000",
      impact: "Plant 1 new church"
    },
    {
      icon: Book,
      title: "Bibles & Resources",
      desc: "Provide Bibles and teaching materials",
      amount: "$100",
      impact: "20 Bibles distributed"
    },
    {
      icon: Droplet,
      title: "Clean Water",
      desc: "Drill wells in remote villages",
      amount: "$2,500",
      impact: "1 water well"
    },
    {
      icon: Heart,
      title: "Orphan Care",
      desc: "Support children who've lost parents",
      amount: "$50",
      impact: "1 month of care"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-[#A00000] to-[#8B0000] overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/missions-support.webp')" }}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <HandHeart className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Support Our Missions
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
              Help us reach the unreached and transform communities across Kenya
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Gift Changes Lives Forever</h2>
            <div className="w-20 h-1 bg-[#A00000] mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Every donation to EPCK missions goes directly to life-changing work—planting churches, training leaders, 
              feeding the hungry, drilling wells, and sharing the gospel in remote villages. When you give, you're 
              not just sending money. You're sending hope.
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
                src="/images/mission-impact.webp" 
                alt="Mission impact"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Where Your Money Goes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">85% Direct Ministry</p>
                    <p className="text-gray-600 text-sm">Your dollars directly fund gospel work on the ground</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">10% Administration</p>
                    <p className="text-gray-600 text-sm">Minimal overhead for accountability and coordination</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">5% Future Projects</p>
                    <p className="text-gray-600 text-sm">Seed funding for new mission opportunities</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#FDF0D5] rounded-lg border-l-4 border-[#A00000]">
                <p className="text-sm text-gray-700">
                  <strong>100% Transparent:</strong> We provide regular updates and financial reports to all donors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Ways to Make an Impact
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-[#FDF0D5] to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#A00000]"
                >
                  <div className="bg-[#A00000] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{area.desc}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-2xl font-bold text-[#A00000] mb-1">{area.amount}</p>
                    <p className="text-xs text-gray-500">{area.impact}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Monthly Partnership */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#A00000] to-[#8B0000] rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Become a Monthly Partner</h3>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join our faithful partners who sustain mission work every single month. Your consistent giving 
              enables us to plan long-term projects and support missionaries year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#A00000] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                $25/month
              </button>
              <button className="bg-white text-[#A00000] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                $50/month
              </button>
              <button className="bg-white text-[#A00000] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                $100/month
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#A00000] transition-all duration-300 hover:scale-105">
                Custom Amount
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Stories of Transformation
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <img 
                src="/images/story-1.webp" 
                alt="Mission story"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">New Church in Turkana</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Thanks to partners like you, we planted a church in a remote Turkana village. 
                Over 80 people now gather weekly for worship—many hearing the gospel for the first time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <img 
                src="/images/story-2.webp" 
                alt="Mission story"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Water for 500 Families</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A donated well now provides clean water to an entire village. Children no longer walk 
                5km for water—and the community gathers at the well for Bible studies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <img 
                src="/images/story-3.webp" 
                alt="Mission story"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">20 Pastors Trained</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your support funded a pastoral training program. These leaders are now shepherding 
                new churches across Western Kenya, multiplying the impact exponentially.
              </p>
            </motion.div>
          </div>
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
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Give Today, Change Tomorrow</h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Your generous gift today will echo into eternity. Souls saved. Churches planted. Communities transformed. 
              Will you partner with us in reaching the unreached?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join/give"
                className="inline-flex items-center gap-2 bg-white text-[#A00000] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Give Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
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