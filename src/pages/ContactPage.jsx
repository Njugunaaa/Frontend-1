import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const CompleteContactPage = () => {
  const [prayerData, setPrayerData] = useState({
    name: '',
    email: '',
    request: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  });

  const handlePrayerChange = (e) => {
    setPrayerData({
      ...prayerData,
      [e.target.name]: e.target.value
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePrayerSubmit = () => {
    console.log('Prayer request submitted:', prayerData);
    alert('Thank you for your prayer request. Our prayer team will lift you up in prayer.');
    setPrayerData({ name: '', email: '', request: '' });
  };

  const handleContactSubmit = () => {
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '', subject: '' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const formGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Contact Section */}
      <div 
        className="relative min-h-screen py-20 px-6"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(99, 102, 241, 0.8)), url('https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-2 bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-2xl"
              variants={itemVariants}
            >
              <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">Connect With Us</h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                We'd love to hear from you! Whether you have questions about our services, 
                want to learn more about our community, or need prayer support, don't hesitate to reach out.
              </p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
              >
                <motion.div 
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="font-semibold text-white mb-3 text-lg">General Inquiries</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-300" />
                      <span className="text-blue-100">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-300" />
                      <span className="text-blue-100">info@gracechurch.org</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="font-semibold text-white mb-3 text-lg">Pastor's Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-300" />
                      <span className="text-blue-100">(555) 123-4568</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-300" />
                      <span className="text-blue-100">pastor@gracechurch.org</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="font-semibold text-white mb-3 text-lg">Office Hours</h3>
                  <div className="space-y-2 text-blue-100">
                    <div>Mon - Thu: 9AM - 4PM</div>
                    <div>Friday: 9AM - 2PM</div>
                    <div>Sat - Sun: Closed</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Prayer Request Form */}
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl h-fit"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Prayer Request</h2>
              <p className="text-blue-100 mb-8 text-sm leading-relaxed">
                We believe in the power of prayer. Share your prayer request with us and our prayer team will lift you up.
              </p>
              <motion.div 
                className="space-y-5"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name (Optional)"
                    value={prayerData.name}
                    onChange={handlePrayerChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address (Optional)"
                    value={prayerData.email}
                    onChange={handlePrayerChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <textarea
                    name="request"
                    placeholder="Please share your prayer request..."
                    rows="5"
                    value={prayerData.request}
                    onChange={handlePrayerChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm resize-none transition-all duration-200"
                  ></textarea>
                </motion.div>
                <motion.div className="flex items-start space-x-3" variants={itemVariants}>
                  <input type="checkbox" className="mt-1.5 bg-white/10 border-white/30 text-blue-400 rounded" />
                  <label className="text-sm text-blue-100">I would like updates on how God answers this prayer</label>
                </motion.div>
                <motion.button
                  onClick={handlePrayerSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Prayer Request
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/50"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="max-w-3xl mx-auto">
              <motion.h2 
                className="text-4xl font-bold text-slate-800 mb-6 text-center tracking-tight"
                variants={itemVariants}
              >
                Get in Touch
              </motion.h2>
              <motion.p 
                className="text-slate-600 mb-12 text-center text-lg leading-relaxed"
                variants={itemVariants}
              >
                Have questions about our church, want to learn more about our ministries, or need assistance? We're here to help!
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={formGridVariants}
              >
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/70 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-800 placeholder-slate-500"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/70 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-800 placeholder-slate-500"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/70 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-800 placeholder-slate-500"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/70 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-slate-600"
                  >
                    <option value="">Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Membership Information</option>
                    <option>Ministry Information</option>
                    <option>Event Information</option>
                    <option>Volunteer Opportunities</option>
                    <option>Other</option>
                  </select>
                </motion.div>
                <motion.div className="md:col-span-2" variants={itemVariants}>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/70 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-slate-800 placeholder-slate-500"
                  ></textarea>
                </motion.div>
                <motion.div className="md:col-span-2 text-center" variants={itemVariants}>
                  <motion.button
                    onClick={handleContactSubmit}
                    className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-4 px-12 rounded-xl hover:from-slate-900 hover:to-slate-800 transition duration-300 font-medium shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visit Us Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-slate-800 rounded-3xl shadow-2xl overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div 
                className="p-12"
                variants={slideInLeft}
              >
                <motion.h2 
                  className="text-4xl font-bold text-white mb-6 tracking-tight"
                  variants={itemVariants}
                >
                  Visit Our Church
                </motion.h2>
                <motion.p 
                  className="text-slate-300 mb-10 text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  Join us for worship every Sunday! We're located in the heart of the community 
                  and look forward to welcoming you with open arms.
                </motion.p>
                
                <motion.div 
                  className="space-y-8"
                  variants={containerVariants}
                >
                  <motion.div 
                    className="flex items-start space-x-4 p-6 bg-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white text-lg">Grace Community Church</div>
                      <div className="text-slate-300 mt-1">123 Faith Avenue<br />Springfield, IL 62701</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4 p-6 bg-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/70 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Clock className="w-6 h-6 text-blue-400 mt-1" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white text-lg">Service Times</div>
                      <div className="text-slate-300 mt-1">
                        Sunday: 9:00 AM & 11:00 AM<br />
                        Wednesday: 7:00 PM (Bible Study)
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="min-h-96 lg:min-h-full flex items-center justify-center bg-slate-700"
                variants={slideInRight}
              >
                <motion.div 
                  className="w-full h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127644.42040949062!2d36.8247986!3d-1.237239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13eab5cf2b77%3A0xedd0d1c3e4ff8ab0!2sElim%20Pentecostal%20Church!5e0!3m2!1sen!2ske!4v1757836267602!5m2!1sen!2ske" 
                    width="100%" 
                    height="100%" 
                    style={{border: '0', minHeight: '500px'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-r-3xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompleteContactPage;