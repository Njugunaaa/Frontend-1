import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    image: "/images/7.webp",
    title: "Welcome to Elim Pentecostal Church of Kenya",
    subtitle: "A Christ-centered, Spirit-filled family committed to raising healthy believers, strong families, and thriving communities.",
    cta: [
      { text: "Join Us", link: "/contact", primary: true },
      { text: "Our Ministries", link: "/ministries", primary: false },
    ],
  },
  {
    image: "/images/6.webp",
    title: "Transforming Lives and Communities",
    subtitle: "Through worship, discipleship, outreach, and missions, we are passionate about seeing lives restored and destinies awakened.",
    cta: [
      { text: "Learn More", link: "/about", primary: true },
      { text: "Get Involved", link: "/ministries", primary: false },
    ],
  },
  {
    image: "/images/9.webp",
    title: "Rooted in Prayer, Revival & the Holy Spirit",
    subtitle: "Experience the transforming power of God through vibrant worship, fervent prayer, and Spirit-led ministry that impacts Kenya and beyond.",
    cta: [
      { text: "Visit Us", link: "/contact", primary: true },
      { text: "Watch Sermons", link: "/sermons", primary: false },
    ],
  },
];

const SLIDE_DURATION = 8000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const running = !isPaused;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Auto-advance carousel
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [running, nextSlide]);

  return (
    <section
      className="relative w-full h-[75vh] md:h-[85vh] mt-[5rem] mb-8"
      
    >
      <div className="relative w-full h-full overflow-hidden rounded-none">
        {/* Image Carousel with a subtle Ken Burns drift for a more premium feel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 overflow-hidden"
          >
            <motion.img
              src={heroSlides[currentIndex].image}
              alt={heroSlides[currentIndex].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: SLIDE_DURATION / 1000 + 0.8, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Light bottom-only gradient so the image reads clean; the frosted panel below carries the text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 32%)",
          }}
        />

        {/* Content — smaller glass panel, sitting close to the bottom of the image */}
        <div className="absolute bottom-2 left-0 right-0 px-6 md:px-12 z-10 flex justify-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="max-w-xs sm:max-w-sm md:max-w-md rounded-xl border border-white/25 bg-white/10 p-4 md:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 leading-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
                {heroSlides[currentIndex].title}
              </h1>

              <p className="text-xs md:text-sm mb-3 leading-relaxed text-white/90">
                {heroSlides[currentIndex].subtitle}
              </p>

              <div className="flex flex-wrap gap-2">
                {heroSlides[currentIndex].cta.map((button, i) => (
                  <a
                    key={i}
                    href={button.link}
                    className={`
                      px-3.5 py-2 text-xs md:text-sm font-semibold rounded-lg
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
                      relative rounded-full overflow-hidden transition-all duration-300
                      ${
                        currentIndex === index
                          ? "w-10 h-2.5 bg-white/25"
                          : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                      }
                    `}
                  >
                    {currentIndex === index && (
                      <motion.div
                        key={running ? "running" : "paused"}
                        className="absolute inset-0 bg-red-600 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: running ? 1 : 0 }}
                        transition={{ duration: running ? SLIDE_DURATION / 1000 : 0.2, ease: "linear" }}
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