import React from "react";
import { motion } from "framer-motion";
import { HandHeart, Users, ArrowRight, CheckCircle, Lightbulb, Heart, Globe, Target, Gift } from "lucide-react";

export default function MinistryOfHelps() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-[#A00000] via-orange-600 to-amber-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 h-f flex items-center justify-center text-center px-4">
          <p></p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <HandHeart className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-2xl md:text-7xl font-bold text-white mb-6">
              Ministry of Helps
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto">
              Serving those who need it most—bringing hope to communities and children's homes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="py-12 px-4 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Heart className="w-10 h-10 text-amber-600 mx-auto mb-4" />
            <p className="text-xl md:text-2xl text-gray-800 font-serif italic mb-3">
              "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
            </p>
            <p className="text-amber-700 font-semibold">— Colossians 3:23</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serving Those Who Need It Most
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#A00000] to-amber-500 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Ministry of Helps is the heartbeat of our church—reaching out to underprivileged communities, 
              children's homes, and those who need God's love the most. We serve with joy because every act of 
              service enables someone to encounter Jesus.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Beyond the Church Walls
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our calling doesn't end at the church doors. We take Christ's love into underprivileged communities, 
                providing food, clothing, and hope to families in need. We partner with children's homes, bringing 
                supplies, mentorship, and the message that they are loved and valued.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From organizing community outreach events to supporting local families facing hardship, the Ministry 
                of Helps is where faith meets action. We believe that serving others is one of the most powerful 
                ways to show God's love.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500">
                <HandHeart className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-gray-800 font-bold mb-2">Come As You Are</p>
                <p className="text-gray-600">No experience required. Just bring a willing heart.</p>
              </div>
            </div>
            <div>
              <img 
                src="/images/help10.webp" 
                alt="Volunteers serving in community"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Outreach in Action
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#A00000] to-amber-500 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we're making a difference in communities, children's homes, and the lives of those in need.
            </p>
          </motion.div>

          {/* 4 Image Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src="/images/help7.webp" 
                alt="Community outreach" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Globe className="w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold mb-1">Community Outreach</h3>
                  <p className="text-white/90">Bringing hope to underprivileged families</p>
                </div>
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src="/images/help9.webp" 
                alt="Children's home visit" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Heart className="w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold mb-1">Children's Homes</h3>
                  <p className="text-white/90">Sharing love with the little ones</p>
                </div>
              </div>
            </motion.div>

            {/* Image 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src="/images/help13.webp" 
                alt="Food distribution" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Gift className="w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold mb-1">Food Distribution</h3>
                  <p className="text-white/90">Feeding families in need</p>
                </div>
              </div>
            </motion.div>

            {/* Image 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src="/images/help15.webp" 
                alt="Mentorship program" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Users className="w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold mb-1">Mentorship & Care</h3>
                  <p className="text-white/90">Building relationships that transform</p>
                </div>
              </div>
            </motion.div>
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
            Why Serve with Us?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-rose-500"
            >
              <HandHeart className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Show Christ's Love</h3>
              <p className="text-gray-700 leading-relaxed">
                Every meal served, every child hugged, every family supported—it's all a reflection of God's love in action. 
                We don't just talk about faith; we live it out.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500"
            >
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Build Community</h3>
              <p className="text-gray-700 leading-relaxed">
                Serving side-by-side creates bonds that last. You'll find your people—a team that becomes family as you 
                work together to change lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-amber-500"
            >
              <Target className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Make Real Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                From feeding the hungry to mentoring children, your service creates tangible, life-changing results. 
                This isn't just volunteering—it's kingdom work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500"
            >
              <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Grow Your Faith</h3>
              <p className="text-gray-700 leading-relaxed">
                Serving others teaches humility, compassion, and Christ-like love. It's one of the most powerful ways 
                to deepen your relationship with God.
              </p>
            </motion.div>
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
              { number: "15+", label: "Communities Served" },
              { number: "8", label: "Children's Homes" },
              { number: "500+", label: "Families Reached" },
              { number: "1,000s", label: "Lives Touched" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-white/30"
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
            Stories from the Field
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg border-l-4 border-amber-500"
            >
              <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "I'll never forget the little girl at the children's home who hugged me and whispered 'thank you' 
                after we brought supplies. That moment reminded me why we serve—it's not about us, it's about 
                showing God's love to those who need it most."
              </p>
              <p className="text-gray-700 font-semibold">— Sarah K., Ministry Volunteer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl shadow-lg border-l-4 border-orange-500"
            >
              <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "Serving with the Ministry of Helps changed my perspective. I used to think I didn't have much to 
                offer, but seeing the impact of a warm meal or kind word in an underprivileged community showed me 
                that God can use anyone willing to serve."
              </p>
              <p className="text-gray-700 font-semibold">— Michael T., Ministry Volunteer</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#A00000] via-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <HandHeart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Us in Serving</h2>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you want to serve in the church, reach out to communities, or visit children's homes—there's 
              a place for you. No experience needed. Just bring a willing heart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-[#A00000] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Get Involved
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#A00000] transition-all duration-300 hover:scale-105"
              >
                Learn More
                <Lightbulb className="w-6 h-6" />
              </a>
            </div>

            <p className="mt-12 text-white/90 text-lg">
              Questions? Contact us: <span className="font-semibold">serve@epck.org</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}