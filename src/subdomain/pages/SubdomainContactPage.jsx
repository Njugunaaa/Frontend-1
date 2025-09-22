import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Heart } from 'lucide-react';

function SubdomainContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [prayerData, setPrayerData] = useState({
    name: '',
    email: '',
    request: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePrayerChange = (e) => {
    setPrayerData({
      ...prayerData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handlePrayerSubmit = () => {
    console.log('Prayer request submitted:', prayerData);
    alert('Thank you for your prayer request. Our prayer team will lift you up in prayer.');
    setPrayerData({ name: '', email: '', request: '' });
  };

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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "(555) 123-4568 (Pastor's Office)"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@gracecommunity.org", "pastor@gracecommunity.org"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Faith Avenue", "Springfield, IL 62701"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Thu: 9AM - 4PM", "Friday: 9AM - 2PM", "Sat - Sun: Closed"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20" />
       <div
  className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z%22/%3E%3C/g%3E%3C/svg%3E')]"
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
              Get in
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              We'd love to hear from you! Whether you have questions, need prayer, or want to learn more about our community,
              we're here to help and support you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {info.title}
                    </h3>

                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Prayer Request */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mr-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
                  <p className="text-gray-600">We'd love to hear from you</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-800 placeholder-gray-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-800 placeholder-gray-500"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-600"
                  >
                    <option value="">Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Membership Information</option>
                    <option>Ministry Information</option>
                    <option>Event Information</option>
                    <option>Volunteer Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 resize-none text-gray-800 placeholder-gray-500"
                />

                <motion.button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-8 rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>

            {/* Prayer Request */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Prayer Request</h2>
                  <p className="text-gray-600">Share your prayer needs with us</p>
                </div>
              </div>

              <div className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name (Optional)"
                  value={prayerData.name}
                  onChange={handlePrayerChange}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-800 placeholder-gray-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address (Optional)"
                  value={prayerData.email}
                  onChange={handlePrayerChange}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-800 placeholder-gray-500"
                />

                <textarea
                  name="request"
                  placeholder="Please share your prayer request..."
                  rows="8"
                  value={prayerData.request}
                  onChange={handlePrayerChange}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 resize-none text-gray-800 placeholder-gray-500"
                />

                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1.5 bg-gray-50 border-gray-200 text-purple-600 rounded focus:ring-purple-500" />
                  <label className="text-sm text-gray-600">I would like updates on how God answers this prayer</label>
                </div>

                <motion.button
                  onClick={handlePrayerSubmit}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 px-8 rounded-2xl hover:from-pink-600 hover:to-rose-600 transition duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Prayer Request
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Visit Our Church
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Join us for worship every Sunday! We're located in the heart of the community
              and look forward to welcoming you with open arms.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Service Times</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl">
                    <div>
                      <div className="font-semibold text-white">Sunday Worship</div>
                      <div className="text-purple-200">9:00 AM & 11:00 AM</div>
                    </div>
                    <Clock className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl">
                    <div>
                      <div className="font-semibold text-white">Wednesday Bible Study</div>
                      <div className="text-purple-200">7:00 PM</div>
                    </div>
                    <MessageCircle className="w-6 h-6 text-purple-300" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-purple-300 mt-1" />
                    <div>
                      <div className="font-semibold text-white text-lg">Grace Community Church</div>
                      <div className="text-purple-200">123 Faith Avenue<br />Springfield, IL 62701</div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="w-full h-48 bg-white/20 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-white/80">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p>Interactive Map</p>
                        <p className="text-sm">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SubdomainContactPage;
