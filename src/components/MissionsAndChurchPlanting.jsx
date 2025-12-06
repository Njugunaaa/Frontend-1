import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BreadCrumb from './BreadCrump';
import {
  Heart,
  MapPin,
  Users,
  Church,
  ArrowRight,
  Play,
  Droplets,
  Zap,
  Sparkles,
} from "lucide-react";

const MissionsAndChurchPlantingPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 2.5, repeat: Infinity },
    },
  };

  const churchProjects = [
    {
      title: "Parnay Church Opening",
      date: "October 18, 2025",
      description:
        "After months of dedicated effort from drilling wells to empower local communities, to nurturing faith and hope the Parnay Church finally stands as a beacon of transformation in Maasai land. This is more than a building; it's a testimony of God’s faithfulness and the community’s resilience.",
      location: "Parnay, Kenya",
      image: "/images/missions/parnay-church.jpg",
      video: "/videos/parnay-opening.mp4",
      icon: Church,
      highlights: ["Water Access", "Local Leadership", "Community Empowerment"],
      bgColor: "from-amber-600/20 to-orange-600/20",
      sliderImages: [
        "/images/parnay.jpg",
        "/images/parnay1.jpg",
        "/images/parnay2.jpg",
        "/images/parnay3.jpg",
      ],
    },
    {
      title: "Malindi Church Establishment",
      date: "2025",
      description:
        "At the heart of Kenya’s coast, the Malindi Church project reflects the beauty of unity, service, and sustainable ministry. Through partnerships and outreach, Elim Church has brought not only spiritual renewal but also education, healthcare, and empowerment to families across this vibrant region.",
      location: "Malindi, Kenya",
      image: "/images/missions/malindi-church.jpg",
      video: "/videos/malindi-project.mp4",
      icon: Users,
      highlights: ["Coastal Ministry", "Education Focus", "Holistic Care"],
      bgColor: "from-blue-600/20 to-cyan-600/20",
      sliderImages: [
        "/images/malindi.jpg",
        "/images/malindi1.jpg",
        "/images/malindi2.jpg",
      ],
    },
  ];

  const impactStats = [
    {
      number: "100+",
      label: "Churches Across Kenya",
      gradient: "from-amber-600 to-orange-600",
      icon: Church,
    },
    {
      number: "1000+",
      label: "Lives Transformed Through Outreach",
      gradient: "from-orange-600 to-amber-700",
      icon: Heart,
    },
    {
      number: "1 Vision",
      label: "Christ-Centered Community Development",
      gradient: "from-amber-700 to-orange-500",
      icon: Zap,
    },
  ];

  const testimonials = [
    {
      quote:
        "Elim didn’t just build a church they transformed our community. They brought water, hope, and faith to a place that once felt forgotten.",
      name: "Samuel Kipchoge",
      role: "Community Leader, Kajiado County",
      image: "/images/missions/testimonial-1.jpg",
    },
    {
      quote:
        "The well changed everything. Clean water, fellowship, and joy. Elim helped us rebuild both our bodies and our souls.",
      name: "Grace Mwangi",
      role: "Teacher, Parnay",
      image: "/images/missions/testimonial-2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50 to-orange-50">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-32 left-10 w-72 h-72 bg-amber-300/5 rounded-full blur-3xl"
          animate={floatingVariants.float}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-96 h-96 bg-orange-300/5 rounded-full blur-3xl"
          animate={floatingVariants.float}
          transition={{ delay: 0.5 }}
        />
      </div>

      {/* Hero section */}
      <motion.div
        className="relative pt-20 pb-28 px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <BreadCrumb items={[
                  { name: 'Home', href: '/' },
                  { name: 'Missions Work and Church Planting', href: '/missions' },
                ]}/>

        <motion.h1
          className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-orange-700 to-amber-800 mb-8 leading-tight"
          variants={itemVariants}
        >
          Spreading Hope. Planting Churches. Transforming Nations.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium mb-8"
          variants={itemVariants}
        >
          Elim Pentecostal Church of Kenya doesn’t just preach the Gospel we{" "}
          <span className="text-amber-700 font-bold">live it</span>. Through
          church planting, leadership training, and practical outreach, we bring
          transformation to both hearts and communities across Kenya.
        </motion.p>
      </motion.div>

      {/* Featured projects */}
      {/* FEATURED PROJECTS SECTION WITH SLIDERS */}
{/* FEATURED PROJECTS SECTION */}
<motion.section
  className="max-w-7xl mx-auto px-6 py-24"
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
  {/* Section Header */}
  <motion.div className="text-center mb-16" variants={itemVariants}>
    <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-orange-700 to-amber-800">
      Recent Milestones & Ongoing Work
    </h2>
    <motion.div
      className="h-1 w-24 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mt-6"
      animate={{ width: [96, 130, 96] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-6 font-medium">
      Every church we plant tells a story of faith, water, leadership, and a
      community rising together.
    </p>
  </motion.div>

  {/* Projects Grid */}
  <div className="flex flex-col gap-20">
    {churchProjects.map((project, index) => {
      const Icon = project.icon;
      return (
        <motion.div
          key={index}
          className={`bg-gradient-to-br ${project.bgColor} rounded-3xl overflow-hidden shadow-xl border border-white/40`}
          variants={itemVariants}
        >
          {/* Project Header */}
          <div className="relative h-96 w-full overflow-hidden">
            <motion.div
              className="flex w-full"
              animate={{ x: ["0%", "-100%", "-200%", "0%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {(project.sliderImages || [project.image]).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="w-full h-96 object-cover flex-shrink-0"
                />
              ))}
            </motion.div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6">
              <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                {project.title}
              </h3>
              <p className="text-white/90 text-sm mt-2">{project.date}</p>
            </div>
          </div>

          {/* Project Body */}
          <div className="p-8 md:p-10">
            <p className="text-gray-800 text-base leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.highlights.map((highlight, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full border border-amber-300"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <motion.div
                className="inline-flex items-center text-amber-800 font-bold cursor-pointer"
                whileHover={{ x: 5 }}
              >
                Learn Their Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>

              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-full shadow-md">
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
</motion.section>

{/* IMPACT STATS */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {impactStats.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={idx}
                className={`bg-gradient-to-br ${stat.gradient} text-white rounded-3xl p-10 shadow-2xl text-center group hover:shadow-amber-500/50`}
                variants={itemVariants}
                whileHover={{ scale: 1.08, rotate: 2 }}
                animate={pulseVariants.pulse}
              >
                <motion.div
                  className="flex justify-center mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="bg-white/25 p-4 rounded-2xl group-hover:bg-white/40 transition-colors">
                    <StatIcon className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                <div className="text-6xl font-black mb-3">{stat.number}</div>
                <p className="text-amber-100 font-bold text-lg">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

  {/* WATER DRILLING VIDEO SECTION */}
<motion.div
  className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-amber-200"
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
  <motion.div className="text-center mb-16" variants={itemVariants}>
    <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-900 px-6 py-3 rounded-full text-sm font-bold mb-6 border-2 border-blue-300">
      <Droplets className="w-5 h-5 mr-2" />
      Practical Compassion in Action
    </div>
    <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-700 mb-4">
      Water Drilling: Life-Changing Impact
    </h2>
    <p className="text-gray-700 text-lg max-w-3xl mx-auto font-medium">
      Watch as Elim Church brings clean water to remote communities in Maasai land, transforming not just access to resources, but entire families’ futures.
    </p>
  </motion.div>

  {/* VIDEO CONTAINER */}
  <motion.div
    className="relative rounded-3xl overflow-hidden shadow-2xl bg-black"
    variants={scaleVariants}
  >
    <video
      id="drill-video"
      className="w-full h-auto max-h-[650px] object-contain"
      poster="/images/parnay4.jpg"
      preload="auto"
      controls
    >
      <source src="/videos/drill.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* PLAY BUTTON */}
    <motion.div
      onClick={() => {
        const video = document.getElementById("drill-video");
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }}
      className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-full shadow-2xl">
        <Play className="w-14 h-14 md:w-16 md:h-16 text-white fill-white" />
      </div>
    </motion.div>

    {/* OVERLAYS */}
    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent p-6 md:p-8 text-white">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Droplets className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-black">Water Drilling in Maasai Land</h3>
          <p className="text-sm text-blue-200 font-medium">Life-giving water for communities in need</p>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 md:p-8 text-white">
      <p className="text-base md:text-lg font-semibold mb-3 leading-relaxed max-w-2xl">
        Elim Church has drilled wells that brought clean, safe water to villages that once walked miles daily for contaminated sources. True Gospel transformation in action.
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-600/80 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold">
          💧 Clean Water
        </span>
        <span className="bg-cyan-600/80 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold">
          👥 Empowerment
        </span>
        <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold">
          ✨ Transformation
        </span>
      </div>
    </div>
  </motion.div>
</motion.div>

{/* COMMUNITY REVIEWS VIDEO SECTION - EXACT SAME TEMPLATE AS ABOVE */}
{/* COMMUNITY REVIEWS VIDEO SECTION - OPTIMIZED FOR PHONE VIDEO */}
<motion.div
  className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-amber-200"
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
  {/* Section Header */}
  <motion.div className="text-center mb-16" variants={itemVariants}>
    <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 px-6 py-3 rounded-full text-sm font-bold mb-6 border-2 border-purple-300">
      <Users className="w-5 h-5 mr-2" />
      Testimonies of Transformation
    </div>
    <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-700 mb-4">
      Stories That Speak Louder Than Words
    </h2>
    <p className="text-gray-700 text-lg max-w-3xl mx-auto font-medium">
      What Elim does speaks volumes transforming communities, empowering families, and spreading the Gospel through love in action.
    </p>
  </motion.div>

  {/* Taller container to display full vertical video */}
  <motion.div
    className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-black"
    style={{ height: "80vh", maxHeight: "900px" }} // taller container for phone video
    variants={scaleVariants}
  >
    {/* The video centers and fits fully (no cropping) */}
    <video
      id="review-video"
      className="absolute inset-0 w-full h-full object-contain bg-black"
      poster="/images/parnay3.jpg"
      preload="auto"
      controls={false}
    >
      <source src="/videos/review.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Play Button Overlay */}
    <motion.div
      onClick={() => {
        const video = document.getElementById("review-video");
        if (video.paused) {
          video.volume = 1.0;
          video.play();
        } else {
          video.pause();
        }
      }}
      className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-20"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-full shadow-2xl">
        <Play className="w-14 h-14 md:w-16 md:h-16 text-white fill-white" />
      </div>
    </motion.div>

    {/* Script for showing controls on play */}
    <script>
      {`
        const reviewVideo = document.getElementById('review-video');
        if (reviewVideo) {
          reviewVideo.addEventListener('play', () => {
            reviewVideo.setAttribute('controls', true);
          });
          reviewVideo.addEventListener('pause', () => {
            reviewVideo.removeAttribute('controls');
          });
        }
      `}
    </script>

    {/* Top Overlay */}
    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent p-6 md:p-8 text-white z-10">
      <div className="flex items-center gap-3">
        <div className="bg-purple-600 p-2 rounded-lg">
          <Users className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-black">Community Stories</h3>
          <p className="text-sm text-purple-200 font-medium">
            Real people. Real transformation. Real impact.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 md:p-8 text-white z-10">
      <p className="text-base md:text-lg font-semibold mb-3 leading-relaxed max-w-2xl">
        Through compassion, faith, and action Elim continues to bring hope, healing, and growth to countless lives across Kenya.
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold">
          🙌 Faith in Action
        </span>
        <span className="bg-pink-600/80 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold">
          💒 Empowered Lives
        </span>
      </div>
    </div>
  </motion.div>
</motion.div>


      {/* CTA SECTION */}
      <motion.div
        className="max-w-5xl mx-auto px-6 py-24 text-center border-t-4 border-amber-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-orange-700 mb-8"
          variants={itemVariants}
        >
          Be Part of This Mission
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          variants={itemVariants}
        >
          Whether through prayer, financial partnership, volunteer service, or advocacy your support directly impacts church planting, community development, and Gospel advancement across Kenya. Together, we're not just building churches; we're <span className="font-black text-amber-700">transforming nations</span>.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          variants={itemVariants}
        >
          <motion.button
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-5 rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-2xl font-bold text-lg"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 30px 60px rgba(217,119,6,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Partner With Us Now
            <Heart className="w-6 h-6 ml-3" />
          </motion.button>
          <motion.button
            className="inline-flex items-center bg-white text-amber-700 px-12 py-5 rounded-2xl font-bold text-lg shadow-xl border-3 border-amber-300"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#fef3c7",
              boxShadow: "0 20px 40px rgba(217,119,6,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Now
            <ArrowRight className="w-6 h-6 ml-3" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="max-w-5xl mx-auto px-6 py-12 text-center border-t-4 border-amber-200"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <p className="text-gray-600 text-sm font-medium">
          Elim Pentecostal Church of Kenya | Advancing God’s Kingdom Through
          Strategic Ministry & Community Transformation
        </p>
      </motion.div>
    </div>
  );
};

export default MissionsAndChurchPlantingPage;
