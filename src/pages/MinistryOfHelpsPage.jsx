import React from "react";
import { motion } from "framer-motion";
import { Hammer, HandHeart, Wrench, Users, Smile, ArrowRight, CheckCircle, Lightbulb, Music, Coffee, Zap } from "lucide-react";

export default function MinistryOfHelps() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const serviceTeams = [
    { 
      icon: Users, 
      title: "Welcome Team", 
      desc: "Be the first smile people see. Greet guests, answer questions, and make everyone feel at home.",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Music, 
      title: "Production Team", 
      desc: "Run sound, lights, and media. Create an atmosphere where worship comes alive.",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Coffee, 
      title: "Hospitality Team", 
      desc: "Serve refreshments, organize events, and create spaces where community happens.",
      color: "from-amber-500 to-orange-500"
    },
    { 
      icon: Wrench, 
      title: "Facilities Team", 
      desc: "Maintain buildings, handle repairs, and ensure our spaces are safe and functional.",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: Hammer, 
      title: "Setup Team", 
      desc: "Transform spaces for worship, events, and ministry. Arrive early, stay late, make it happen.",
      color: "from-red-500 to-rose-500"
    },
    { 
      icon: HandHeart, 
      title: "Care Team", 
      desc: "Serve special needs families, assist with childcare, and ensure everyone can worship.",
      color: "from-indigo-500 to-purple-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-[#A00000] via-orange-600 to-amber-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/helps-hero.jpg')" }}
        />
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -right-20 text-white/10"
          >
            <Hammer className="w-64 h-64" />
          </motion.div>
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -left-20 text-white/10"
          >
            <HandHeart className="w-64 h-64" />
          </motion.div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="bg-white/20 backdrop-blur-sm w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 border-2 border-white/50"
            >
              <Hammer className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ministry of Helps
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto font-light">
              The backbone of everything we do—serving faithfully behind the scenes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="py-12 px-4 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Zap className="w-10 h-10 text-amber-600 mx-auto mb-4" />
            <p className="text-xl md:text-2xl text-gray-800 font-serif italic leading-relaxed mb-3">
              "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
            </p>
            <p className="text-amber-700 font-semibold text-lg">— Colossians 3:23</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Every Role Matters. Every Servant Counts.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#A00000] to-amber-500 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Ministry of Helps is the heartbeat of our church. While others worship, we set up chairs. 
              While others hear the sermon, we run the sound. While others fellowship, we clean and prepare. 
              And we do it all with joy—because we know that every act of service enables someone to encounter Jesus.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Hidden But Never Unseen
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                You might not stand on the platform, but your service is powerful. When you arrive early to arrange 
                chairs, you're creating space for worship. When you troubleshoot the sound system, you're ensuring 
                God's Word is heard clearly. When you smile and welcome a nervous first-time visitor, you're 
                showing them the face of Jesus.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Serving isn't about recognition—it's about faithfulness. It's about using your gifts, skills, 
                and passions to build God's kingdom. Whether you're gifted with your hands, skilled with technology, 
                or simply have a heart to help, there's a place for you here.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-l-4 border-amber-500">
                <Smile className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-gray-800 font-bold mb-2">No Experience Required</p>
                <p className="text-gray-600">Just bring a willing heart—we'll train you, equip you, and walk with you every step.</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                src="/images/helps-1.jpg" 
                alt="Volunteers serving"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Teams */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-4"
          >
            Find Your Team
          </motion.h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Every team is vital. Every role is meaningful. Discover where your gifts can make the biggest impact.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTeams.map((team, index) => {
              const Icon = team.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${team.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{team.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{team.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-[#A00000] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Serve Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Why Serve Behind the Scenes?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: "Discover Your Calling",
                desc: "Serving helps you uncover gifts you didn't know you had. Many of our pastors, worship leaders, and ministry directors started in the Ministry of Helps.",
                color: "rose"
              },
              {
                icon: Users,
                title: "Build Deep Friendships",
                desc: "There's something about serving side-by-side that creates unbreakable bonds. You'll find your people—a team that feels like family.",
                color: "blue"
              },
              {
                icon: Zap,
                title: "Make Real Impact",
                desc: "Every chair you set up, every technical glitch you fix, every guest you welcome—it all creates space for someone to meet Jesus. That's kingdom work.",
                color: "amber"
              },
              {
                icon: Lightbulb,
                title: "Grow Spiritually",
                desc: "Serving teaches humility, faithfulness, and Christ-like love. It's one of the fastest ways to mature in your walk with God.",
                color: "purple"
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-${benefit.color}-500"
                >
                  <Icon className={`w-12 h-12 text-${benefit.color}-600 mb-4`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-[#A00000] via-orange-600 to-amber-600">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Our Impact Together
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Active Volunteers" },
              { number: "52", label: "Sundays Served" },
              { number: "100+", label: "Events Supported" },
              { number: "1,000s", label: "Lives Touched" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">{stat.number}</div>
                <p className="text-white/90 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Stories from Servants
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg border-l-4 border-amber-500"
            >
              <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "I started serving on the setup team thinking I was just moving chairs. But watching the church 
                come alive every Sunday—knowing I had a small part in creating that space—changed everything. 
                Serving isn't a duty. It's a privilege."
              </p>
              <p className="text-gray-700 font-semibold">— David M., Setup Team | 3 years</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg border-l-4 border-orange-500"
            >
              <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "As an introvert, I never thought I'd be on the welcome team. But greeting people every Sunday has 
                stretched my faith and grown my compassion. Some Sundays, I'm the only friendly face a visitor sees. 
                That responsibility is beautiful."
              </p>
              <p className="text-gray-700 font-semibold">— Grace N., Welcome Team | 2 years</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#A00000] via-orange-600 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0"
          >
            <Hammer className="w-64 h-64 text-white" />
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border-2 border-white/50">
              <Smile className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Serve?</h2>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto">
              No skills required. No prior experience needed. Just bring a willing heart, and we'll do the rest. 
              Join a team that's changing lives—one act of service at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-[#A00000] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Join a Team
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-3 bg-transparent border-3 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#A00000] transition-all duration-300 hover:scale-105"
              >
                Learn More
                <Lightbulb className="w-6 h-6" />
              </a>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 text-white/90 text-lg"
            >
              Questions? Contact us: <span className="font-semibold">serve@epck.org</span>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}