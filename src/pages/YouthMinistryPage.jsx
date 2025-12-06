import React from "react";
import { motion } from "framer-motion";
import { Zap, Users, Heart, Music, MessageCircle, ArrowRight, Calendar, MapPin } from "lucide-react";

export default function YouthMinistry() {
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
          style={{ backgroundImage: "url('/images/youth-hero.jpg')" }}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Zap className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Youth Ministry
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
              Empowering the next generation in faith
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Not Tomorrow's Church. Today's Church.</h2>
            <div className="w-20 h-1 bg-[#A00000] mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our youth are not the church of tomorrow—they're the church of today. The Youth Ministry at EPCK 
              creates a dynamic space where teenagers and young adults can explore their faith, ask tough questions, 
              build authentic friendships, and discover their God-given purpose.
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
                src="/images/youth-1.jpg" 
                alt="Youth worship session"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We meet young people where they are, addressing real-life issues with biblical truth and genuine love. 
                Through worship, discipleship, mentorship, and fun activities, we're raising a generation that will 
                transform Kenya and beyond.
              </p>
              <div className="bg-[#FDF0D5] p-6 rounded-xl border-l-4 border-[#A00000]">
                <p className="text-gray-800 font-semibold mb-2">Every Friday Night | 6:00 PM</p>
                <p className="text-gray-600">High-energy worship, relevant teaching, and real conversations</p>
              </div>
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
            What We Do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-[#FDF0D5] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-[#A00000] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Music className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Weekly Gatherings</h3>
              <p className="text-gray-700 leading-relaxed">
                Every Friday night, we come together for high-energy worship, relevant teaching, and real conversations. 
                It's a judgment-free zone where faith comes alive and friendships are forged.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-[#FDF0D5] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-[#A00000] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mentorship</h3>
              <p className="text-gray-700 leading-relaxed">
                Every young person is paired with a mentor who walks alongside them, offering guidance, accountability, 
                and encouragement. We also run intensive discipleship tracks for those hungry to go deeper.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-br from-[#FDF0D5] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-[#A00000] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Service</h3>
              <p className="text-gray-700 leading-relaxed">
                From feeding programs to sports evangelism, our youth actively serve their communities. They're learning 
                that faith without action is incomplete—and making a real difference.
              </p>
            </motion.div>
          </div>

          {/* Events Highlight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#A00000] to-[#8B0000] rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Calendar className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Upcoming Events</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Youth Camp 2024</p>
                      <p className="text-gray-200 text-sm">December 15-20 | Naivasha</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Sports Outreach</p>
                      <p className="text-gray-200 text-sm">Every Saturday | Local Schools</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Worship Night</p>
                      <p className="text-gray-200 text-sm">Last Friday of Month | 7:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block">
                <img 
                  src="/images/youth-2.jpg" 
                  alt="Youth event"
                  className="rounded-xl shadow-2xl w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Users className="w-16 h-16 text-[#A00000] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join the Movement</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you're in high school, college, or navigating young adulthood—there's a place for you here. 
              Come as you are and discover what God has planned for your life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#A00000] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#8B0000] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Connect With Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/events"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-[#A00000] text-[#A00000] px-8 py-4 rounded-full font-semibold hover:bg-[#A00000] hover:text-white transition-all duration-300 hover:scale-105"
              >
                View Events
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}