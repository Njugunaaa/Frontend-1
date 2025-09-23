import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const BreadCrumb = ({ items }) => (
  <nav className="flex space-x-2 text-sm text-gray-600 mb-8">
    {items.map((item, index) => (
      <span key={index} className="flex items-center">
        {index > 0 && <span className="mx-2">/</span>}
        <a href={item.href} className="hover:text-amber-600 transition-colors">
          {item.name}
        </a>
      </span>
    ))}
  </nav>
);

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
    <div className="min-h-screen bg-gray-50">

      {/* Hero Contact Section */}
      <div 
        className="relative min-h-screen py-20 px-6"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(55, 65, 81, 0.9), rgba(75, 85, 99, 0.8)), url('/src/assets/images/church-about-img.webp')`,
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
              className="lg:col-span-2 bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-2xl mt-[2rem]"
              variants={itemVariants}
            >
              <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">Connect With Our Church Family</h1>
              <p className="text-xl text-gray-100 mb-10 leading-relaxed">
                We'd love to hear from you! Whether you have questions about our services, 
                want to learn more about our community, or need prayer support, our church family at 
                Elim Pentecostal Church – Tena is here for you.
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
                      <Phone className="w-5 h-5 text-amber-300" />
                      <span className="text-amber-100">+254 726 496396</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-amber-300" />
                      <span className="text-amber-100">info@elimtena.org</span>
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
                      <Phone className="w-5 h-5 text-amber-300" />
                      <span className="text-amber-100">+254 726 496396</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-amber-300" />
                      <span className="text-amber-100">pastor@elimtena.org</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="font-semibold text-white mb-3 text-lg">Service Hours</h3>
                  <div className="space-y-2 text-gray-100">
                    <div>Live Services: Online</div>
                    <div>Church: Open until 8:00 PM</div>
                    <div>Prayer Line: 24/7</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Prayer Request Form */}
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl h-fit mt-[2rem]"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Prayer Request</h2>
              <p className="text-amber-100 mb-8 text-sm leading-relaxed">
                We believe in the power of prayer and the ministry of the Holy Spirit. Share your prayer request 
                with us and our prayer team will lift you up, believing in Jesus as our Healer.
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
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address (Optional)"
                    value={prayerData.email}
                    onChange={handlePrayerChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <textarea
                    name="request"
                    placeholder="Please share your prayer request..."
                    rows="5"
                    value={prayerData.request}
                    onChange={handlePrayerChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm resize-none transition-all duration-200"
                  ></textarea>
                </motion.div>
                <motion.div className="flex items-start space-x-3" variants={itemVariants}>
                  <input type="checkbox" className="mt-1.5 bg-white/10 border-white/30 text-amber-400 rounded" />
                  <label className="text-sm text-amber-100">I would like updates on how God answers this prayer</label>
                </motion.div>
                <motion.button
                  onClick={handlePrayerSubmit}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-8 rounded-xl hover:from-amber-700 hover:to-orange-700 transition duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
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
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/50"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="max-w-3xl mx-auto">
              <motion.h2 
                className="text-4xl font-bold text-gray-800 mb-6 text-center tracking-tight"
                variants={itemVariants}
              >
                Get in Touch
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-12 text-center text-lg leading-relaxed"
                variants={itemVariants}
              >
                Have questions about our church, want to learn more about our ministries, or need assistance? 
                Our church family at Elim Pentecostal Church – Tena is here to help!
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
                    className="w-full px-6 py-4 bg-white/70 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-gray-800 placeholder-gray-500"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/70 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-gray-800 placeholder-gray-500"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/70 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-gray-800 placeholder-gray-500"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/70 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-gray-600"
                  >
                    <option value="">Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Church Membership</option>
                    <option>Ministry Information</option>
                    <option>Community Outreach</option>
                    <option>Vacation Bible School</option>
                    <option>Live Services</option>
                    <option>Fellowship Events</option>
                    <option>Prayer Request</option>
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
                    className="w-full px-6 py-4 bg-white/70 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 resize-none text-gray-800 placeholder-gray-500"
                  ></textarea>
                </motion.div>
                <motion.div className="md:col-span-2 text-center" variants={itemVariants}>
                  <motion.button
                    onClick={handleContactSubmit}
                    className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-12 rounded-xl hover:from-amber-700 hover:to-orange-700 transition duration-300 font-medium shadow-lg hover:shadow-xl"
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
            className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
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
                  Visit Elim Pentecostal Church – Tena
                </motion.h2>
                <motion.p 
                  className="text-gray-300 mb-10 text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  Join us for worship and fellowship! We're located in Tena, Nairobi County and have been 
                  serving our community since 1990. Come experience the love of Christ and the power of the Holy Spirit 
                  with our church family.
                </motion.p>
                
                <motion.div 
                  className="space-y-8"
                  variants={containerVariants}
                >
                  <motion.div 
                    className="flex items-start space-x-4 p-6 bg-gray-700/50 rounded-xl backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="w-6 h-6 text-amber-400 mt-1" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white text-lg">Elim Pentecostal Church – Tena</div>
                      <div className="text-gray-300 mt-1">Tena, Nairobi County<br />Kenya</div>
                      <div className="text-amber-300 text-sm mt-2">EPCK Headquarters • Founded 1990</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4 p-6 bg-gray-700/50 rounded-xl backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Clock className="w-6 h-6 text-amber-400 mt-1" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white text-lg">Service Information</div>
                      <div className="text-gray-300 mt-1">
                        Live Services: Streamed Online<br />
                        Church Open: Until 8:00 PM<br />
                        Special Events: Regular Conferences
                      </div>
                      <div className="text-amber-300 text-sm mt-2">1,500+ Community Members</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4 p-6 bg-gray-700/50 rounded-xl backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="w-6 h-6 text-amber-400 mt-1" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white text-lg">Contact Information</div>
                      <div className="text-gray-300 mt-1">
                        Phone: +254 726 496396<br />
                        Email: info@elimtena.org<br />
                        Instagram: @elim.p.church_tena
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="min-h-96 lg:min-h-full flex items-center justify-center bg-gray-700"
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