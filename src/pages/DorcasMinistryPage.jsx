import React from "react";
import { motion } from "framer-motion";
import { Heart, Coffee, Book, Users, Sparkles, ArrowRight, Calendar, Flower2, Star } from "lucide-react";

export default function DorcasMinistry() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-rose-600 via-[#A00000] to-pink-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/dorcas-hero.webp')" }}
        />
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 text-white/10">
          <Flower2 className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 left-20 text-white/10">
          <Star className="w-24 h-24" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/50"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Dorcas Ministry
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 max-w-2xl mx-auto font-light">
              Where women find strength, purpose, and sisterhood
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-1 bg-white mx-auto mt-6 rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Sparkles className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <p className="text-2xl md:text-3xl text-gray-800 font-serif italic leading-relaxed mb-4">
              "She opens her arms to the poor and extends her hands to the needy... 
              She is clothed with strength and dignity; she can laugh at the days to come."
            </p>
            <p className="text-rose-600 font-semibold text-lg">— Proverbs 31:20, 25</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Legacy of Love and Service
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Named after the biblical woman who devoted her life to acts of kindness and compassion, 
              the Dorcas Ministry is where women of all ages and seasons gather to grow spiritually, 
              support one another, and make a tangible difference in our communities.
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
                You Are Seen. You Are Valued. You Belong Here.
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you're a young professional navigating career and calling, a mother pouring into 
                the next generation, a woman in your golden years with wisdom to share, or somewhere in 
                between—there is a place for you in the Dorcas Ministry.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe women have a unique and powerful role in God's kingdom. Through authentic fellowship, 
                prayer, biblical teaching, and compassionate service, we're building a community where every woman 
                can flourish in her faith and discover her God-given purpose.
              </p>
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-2xl border-l-4 border-rose-500">
                <p className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-rose-600" />
                  Join Us Every Month
                </p>
                <p className="text-gray-600">First Saturday | 10:00 AM - 1:00 PM</p>
                <p className="text-gray-500 text-sm mt-1">Fellowship, teaching, prayer, and lunch together</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                src="/images/dorcas-1.webp" 
                alt="Women's fellowship"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border-8 border-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            How We Grow Together
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-rose-500"
            >
              <div className="bg-gradient-to-br from-rose-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fellowship & Connection</h3>
              <p className="text-gray-700 leading-relaxed">
                Monthly gatherings filled with warm conversations, worship, and authentic community. Share your 
                story, laugh together, and build friendships that go deeper than Sunday mornings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-purple-500"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Biblical Teaching</h3>
              <p className="text-gray-700 leading-relaxed">
                Dive into God's Word through Bible studies designed for women's unique journeys. Explore topics 
                like identity, purpose, marriage, motherhood, singleness, and faith-filled living.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-pink-500"
            >
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Following Dorcas's example, we serve widows, orphans, and vulnerable women. From sewing projects 
                to community outreach, we put our faith into action with love.
              </p>
            </motion.div>
          </div>

          {/* Special Programs */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-rose-500 to-pink-600 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-white/10">
                <Sparkles className="w-32 h-32 -mr-8 -mt-8" />
              </div>
              <div className="relative z-10">
                <Sparkles className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Women's Conferences</h3>
                <p className="text-white/95 mb-6 text-lg">
                  Powerful annual gatherings featuring anointed speakers, deep worship, and life-changing ministry. 
                  A time to refresh your soul, deepen your faith, and encounter God's presence with hundreds of sisters.
                </p>
                <div className="flex items-center gap-3 text-white/90">
                  <Calendar className="w-6 h-6" />
                  <span className="font-semibold">Next Conference: March 2025</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-br from-purple-500 to-pink-600 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 text-white/10">
                <Users className="w-32 h-32 -ml-8 -mb-8" />
              </div>
              <div className="relative z-10">
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Mentorship Circles</h3>
                <p className="text-white/95 mb-6 text-lg">
                  Connect with a mature woman of faith who will walk alongside you through life's seasons. Or step 
                  into the role of mentor yourself—pour wisdom, encouragement, and prayer into the next generation.
                </p>
                <div className="flex items-center gap-3 text-white/90">
                  <Heart className="w-6 h-6" />
                  <span className="font-semibold">Applications Open Year-Round</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-4"
          >
            Stories That Inspire
          </motion.h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Hear from women whose lives have been transformed</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg border-l-4 border-rose-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "I came to Dorcas Ministry feeling broken and alone after my divorce. These women didn't judge me—
                they wrapped me in love, prayed with me, and helped me rediscover my identity in Christ. Today, I'm 
                leading a Bible study and mentoring younger women. God restored what was lost."
              </p>
              <p className="text-gray-700 font-semibold">— Sarah K., Member since 2020</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border-l-4 border-purple-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "As a young professional, I was struggling to balance career ambitions with God's calling. The women 
                here didn't give me easy answers—they shared their own journeys and pointed me to Scripture. I've 
                found my purpose, my tribe, and my spiritual mothers."
              </p>
              <p className="text-gray-700 font-semibold">— Faith M., Member since 2022</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Our Community in Action
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "/images/dorcas-2.webp", caption: "Monthly Fellowship" },
              { img: "/images/dorcas-3.webp", caption: "Serving Together" },
              { img: "/images/dorcas-4.webp", caption: "Bible Study" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src={item.img}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-xl font-bold">{item.caption}</p>
                  <div className="w-12 h-1 bg-rose-400 mt-2 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-rose-600 via-[#A00000] to-pink-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Flower2 className="w-40 h-40 text-white" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Heart className="w-40 h-40 text-white" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/50">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your Seat is Waiting</h2>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto">
              You don't have to walk this journey alone. Come as you are—whether you're thriving or barely holding on. 
              There's a circle of sisters ready to welcome you, pray with you, and walk beside you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-rose-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Join Our Sisterhood
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/events"
                className="inline-flex items-center gap-3 bg-transparent border-3 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300 hover:scale-105"
              >
                View Upcoming Events
                <Calendar className="w-6 h-6" />
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 text-white/90 text-lg"
            >
              <p className="mb-2">Questions? We'd love to hear from you!</p>
              <p className="font-semibold">dorcas@epck.org | +254 700 000 000</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}