import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";

const heroSlides = [
  {
    image: "/images/7.jpg",
    title: "Welcome to Elim Pentecostal Church of Kenya",
    subtitle: "A Christ-centered, Spirit-filled family committed to raising healthy believers, strong families, and thriving communities.",
    cta: [
      { text: "Join Us", link: "/contact", primary: true },
      { text: "Our Ministries", link: "/ministries", primary: false },
    ],
  },
  {
    image: "/images/6.jpg",
    title: "Transforming Lives and Communities",
    subtitle: "Through worship, discipleship, outreach, and missions, we are passionate about seeing lives restored and destinies awakened.",
    cta: [
      { text: "Learn More", link: "/about", primary: true },
      { text: "Get Involved", link: "/ministries", primary: false },
    ],
  },
  {
    image: "/images/9.jpg",
    title: "Rooted in Prayer, Revival & the Holy Spirit",
    subtitle: "Experience the transforming power of God through vibrant worship, fervent prayer, and Spirit-led ministry that impacts Kenya and beyond.",
    cta: [
      { text: "Visit Us", link: "/contact", primary: true },
      { text: "Watch Sermons", link: "/sermons", primary: false },
    ],
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] mt-[5rem] mb-8">
      <div className="relative w-full h-full overflow-hidden">
        {/* Image Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentIndex].image}
              alt={heroSlides[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay - Only behind text area at bottom left */}
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-auto pointer-events-none">
          <div className="bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 md:p-12 pb-20">
            <div className="h-48 md:h-64"></div>
          </div>
        </div>

        {/* Content Container - Bottom Left */}
        <div className="absolute bottom-20 left-0 p-6 md:p-12 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-white"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                {heroSlides[currentIndex].title}
              </h1>

              <p className="text-sm md:text-base mb-5 leading-relaxed text-gray-100 max-w-xl">
                {heroSlides[currentIndex].subtitle}
              </p>

              <div className="flex flex-wrap gap-3">
                {heroSlides[currentIndex].cta.map((button, i) => (
                  <a
                    key={i}
                    href={button.link}
                    className={`
                      px-5 py-2.5 text-sm font-semibold rounded-lg
                      transition-all duration-300 hover:scale-105
                      ${
                        button.primary
                          ? "bg-red-600 text-white hover:bg-red-700 shadow-lg"
                          : "bg-white/10 text-white border-2 border-white/50 hover:bg-white hover:text-gray-900 backdrop-blur-sm"
                      }
                    `}
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Controls - Centered */}
        <div className="absolute bottom-6 left-0 right-0 z-20">
          <div className="flex items-center justify-center gap-4">
            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group relative"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`
                      relative rounded-full transition-all duration-300
                      ${
                        currentIndex === index
                          ? "w-10 h-3 bg-red-600"
                          : "w-3 h-3 bg-white/50 hover:bg-white/80"
                      }
                    `}
                  >
                    {currentIndex === index && !isPaused && (
                      <motion.div
                        className="absolute inset-0 bg-white rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 8, ease: "linear" }}
                        style={{ transformOrigin: "left" }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Play/Pause Button - Icon Only */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
              aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            >
              {isPaused ? (
                <Play className="w-4 h-4 fill-current" />
              ) : (
                <Pause className="w-4 h-4 fill-current" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}