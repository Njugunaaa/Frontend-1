import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/images/7.jpg",
  "/images/6.jpg",
  "/images/9.jpg",
];

const heroContent = [
  {
    title: "Welcome to Elim Pentecostal Church of Kenya (EPCK)",
    subtitle:
      "A Christ-centered, Spirit-filled family committed to raising healthy believers, strong families, and thriving communities. Rooted in prayer, revival, and the power of the Holy Spirit, we exist to bring transformation across Kenya and beyond.",
    buttons: [
      { text: "Join Us", link: "/contact" },
      { text: "Our Ministries", link: "/ministries" },
    ],
  },
  {
    title: "Transforming Lives and Communities",
    subtitle:
      "Through worship, discipleship, outreach, and missions, we are passionate about seeing lives restored and destinies awakened. EPCK continues to spread God’s love across towns, cities, and nations.",
    buttons: [
      { text: "Learn More", link: "/about" },
      { text: "Contact Us", link: "/contact" },
    ],
  },
];

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Slower background rotation
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 12000); // 12 seconds
    return () => clearInterval(interval);
  }, [paused]);

  // Slower content rotation
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % heroContent.length);
    }, 14000); // 14 seconds
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="relative w-full h-[32rem] md:h-[36rem] px-4 mt-[6rem] mb-5">
      <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg">
        {/* Background carousel */}
        <AnimatePresence mode="wait">
          <motion.img
            key={imgIndex}
            src={heroImages[imgIndex]}
            alt="Hero Slide"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6 }} // slower fade
          />
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text Content */}
        <div className="relative z-10 flex items-center h-full max-w-2xl p-6 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={contentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1.2 }}
              className="text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {heroContent[contentIndex].title}
              </h1>
              <p className="text-base md:text-lg mb-6 opacity-90">
                {heroContent[contentIndex].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {heroContent[contentIndex].buttons.map((button, i) => (
                  <a
                    key={i}
                    href={button.link}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-sm transition"
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators + Pause Button */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 z-20">
          {/* Dots */}
          <div className="flex gap-2">
            {heroImages.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  imgIndex === i ? "bg-red-500 scale-110" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>

          {/* Pause/Play Button */}
          <button
            onClick={() => setPaused((p) => !p)}
            className="text-white text-sm bg-black/40 px-3 py-1 rounded-md border border-white/30 hover:bg-black/60 transition"
          >
            {paused ? "Play" : "Pause"}
          </button>
        </div>
      </div>
    </section>
  );
}
