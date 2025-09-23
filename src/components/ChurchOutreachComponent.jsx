import React from "react";
import { motion } from 'framer-motion';
import { Heart, Users,  HandHeart as Hands, ArrowRight, Star, MapPin, Calendar, Clock } from 'lucide-react';
import BreadCrumb from "./BreadCrump";

// // Mock BreadCrumb component
// const BreadCrumb = ({ items }) => (
//   <nav className="flex space-x-2 text-sm text-gray-600">
//     {items.map((item, index) => (
//       <span key={index} className="flex items-center">
//         {index > 0 && <span className="mx-2">/</span>}
//         <a href={item.href} className="hover:text-blue-600 transition-colors">
//           {item.name}
//         </a>
//       </span>
//     ))}
//   </nav>
// );

// Enhanced Church Outreach Component with better UI flow
const ChurchOutreachComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-xl mt-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Heart className="w-4 h-4 mr-2" />
          Our Impact
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Transforming Lives Through Faith
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Every act of service strengthens our community bonds and reflects God's love in action
        </p>
      </motion.div>

      {/* Main content section with enhanced layout */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        {/* Left side - Enhanced geometric design */}
        <motion.div className="w-full lg:w-1/2 flex justify-center" variants={itemVariants}>
          <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-3xl p-20 w-full max-w-lg aspect-square flex items-center justify-center shadow-2xl">
            {/* Animated geometric design */}
            <motion.div 
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-40 h-40 relative">
                {/* Outer triangle */}
                <motion.div 
                  className="absolute inset-0 border-4 border-white/30 backdrop-blur-sm"
                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                {/* Middle triangle */}
                <motion.div 
                  className="absolute inset-6 border-4 border-white/50"
                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                  animate={{ scale: [1.1, 1, 1.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                {/* Inner triangle */}
                <motion.div 
                  className="absolute inset-12 border-4 border-white/70"
                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                {/* Center triangle */}
                <motion.div 
                  className="absolute inset-16 bg-white shadow-lg"
                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                  animate={{ scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute top-8 left-8 w-6 h-6 bg-white/20 rounded-full"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-8 right-8 w-4 h-4 bg-white/30 rounded-full"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Right side - Enhanced content */}
        <motion.div className="w-full lg:w-1/2 space-y-8" variants={itemVariants}>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Strengthen Your Community Through Faith
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our church actively engages with the local community through meaningful outreach programs, 
              building bridges of hope and compassion. We believe in serving others as an expression of 
              God's love, creating lasting relationships that transform lives and strengthen neighborhoods.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Through dedicated service and authentic relationships, we reach out to meet both spiritual 
              and practical needs in our community.
            </p>
          </div>
          
          {/* Call to action */}
          <motion.button 
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Mission
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Statistics section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        <motion.div 
          className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <motion.div 
            className="text-5xl lg:text-6xl font-bold mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            2.5k
          </motion.div>
          <div className="text-blue-100 font-semibold text-lg mb-2">Community Members Reached</div>
          <div className="w-12 h-1 bg-blue-300 mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <motion.div 
            className="text-5xl lg:text-6xl font-bold mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            15+
          </motion.div>
          <div className="text-purple-100 font-semibold text-lg mb-2">Active Outreach Programs</div>
          <div className="w-12 h-1 bg-purple-300 mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
          
          {/* Enhanced decorative elements */}
          <motion.div 
            className="absolute top-4 right-4 opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <motion.div 
            className="text-5xl lg:text-6xl font-bold mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            8.2k
          </motion.div>
          <div className="text-emerald-100 font-semibold text-lg mb-2">Annual Service Hours</div>
          <div className="w-12 h-1 bg-emerald-300 mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
          
          {/* Enhanced decorative icon */}
          <motion.div 
            className="absolute top-4 right-4 opacity-20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Hands className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function EnhancedCommunityPage() {
  const filmstripImages = [
    "/src/assets/images/5.jpg",
    "/src/assets/images/6.jpg",
    "/src/assets/images/7.jpg",
    "/src/assets/images/8.jpg",
    "/src/assets/images/9.jpg",
  ];

  const communityImages = [
    {
      src: "/src/assets/images/7.jpg",
      title: "Community Meals",
      description: "Bringing families together"
    },
    {
      src: "/src/assets/images/5.jpg", 
      title: "Youth Programs",
      description: "Empowering the next generation"
    },
    {
      src: "/src/assets/images/9.jpg",
      title: "Senior Care",
      description: "Supporting our elders"
    },
    {
      src: "/src/assets/images/8.jpg",
      title: "Family Support",
      description: "Strengthening homes"
    },
    {
      src: "/src/assets/images/4.jpg",
      title: "Community Events",
      description: "Building connections"
    },
    {
      src: "/src/assets/images/3.jpg",
      title: "Volunteer Work", 
      description: "Serving together"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-4 md:p-6 relative">
      {/* Breadcrumb */}
      <div className="mt-5" />
      <BreadCrumb
        items={[
          { name: "Home", href: "/" },
          { name: "community", href: "/community" },
        ]}
      />

      <div className="mt-3" />
      <div className="max-w-7xl mx-auto mb-4">
        {/* Enhanced Hero Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible" 
          variants={containerVariants}
        >
          {/* LEFT - Enhanced Hero Section */}
          <motion.div
            className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-10 relative min-h-[400px] flex flex-col justify-center shadow-2xl overflow-hidden"
            variants={itemVariants}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full" />
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full" />
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 max-w-lg relative z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Reaching Out, Changing Lives
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-blue-100 font-medium leading-relaxed max-w-xl relative z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Elim Church, outreach is at the heart of our mission. We step
              beyond the walls of the church to meet people where they are -
              offering encouragement, practical support, and the love of Christ.
              From community visits and care programs to youth empowerment and
              family support, our outreach brings hope, healing, and connection.
              Together, we believe in building stronger families and a stronger
              community.
            </motion.p>

            {/* Action button */}
            <motion.button 
              className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold mt-8 w-fit relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Get Involved Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>

          {/* RIGHT - Enhanced Cards */}
          <motion.div className="flex flex-col gap-6" variants={containerVariants}>
            {/* Enhanced Outreach Card */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-blue-600 tracking-wider bg-blue-100 px-4 py-2 rounded-full">
                  OUTREACH MINISTRY
                </span>
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 10 }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                Touching Hearts, Meeting Needs: Together We Shine God's Light in
                Our Community
              </h3>
              <div className="flex items-center mt-4 text-blue-600">
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>

            {/* Enhanced Filmstrip Card */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Enhanced JOIN US Button */}
              <motion.button 
                className="absolute top-8 right-8 z-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-2xl text-sm font-bold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                JOIN US
              </motion.button>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900">Our Community</h4>
                <p className="text-gray-600 mt-2">See the faces of hope and transformation</p>
              </div>

              {/* Enhanced auto-scrolling filmstrip */}
              <div className="relative overflow-hidden h-64 rounded-2xl">
                <motion.div 
                  className="flex gap-6 h-full items-center"
                  animate={{ x: [-1200, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {[...filmstripImages, ...filmstripImages, ...filmstripImages].map((src, i) => (
                    <motion.img
                      key={i}
                      src={src}
                      alt={`community-${i}`}
                      className="w-48 h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* New Community Programs Section */}
      <motion.div 
        className="max-w-7xl mx-auto mt-20 mb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4 mr-2" />
            Community Programs
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Making a Difference Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse programs reach every corner of our community with love, support, and practical help
          </p>
        </motion.div>

        {/* Image Grid Pattern */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {communityImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : 
                index === 3 ? 'lg:col-span-2' : ''
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-200">{image.description}</p>
                  <motion.div 
                    className="mt-4 inline-flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Church Outreach Component */}
      <ChurchOutreachComponent />

      {/* Call to Action Section */}
      <motion.div 
        className="max-w-7xl mx-auto mt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
          variants={itemVariants}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-24 h-24 border border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white rounded-full" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Make a Difference?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our community outreach programs and be part of transforming lives in our neighborhood
            </p>
            <motion.button 
              className="inline-flex items-center bg-white text-indigo-600 px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-bold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <ArrowRight className="w-6 h-6 ml-3" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}