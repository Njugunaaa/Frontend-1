import React, { useState, useEffect } from 'react'
import HeroImage from '../assets/images/hero.webp'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Hero() {
  const [index, setIndex] = useState(0)

  const heroContent = [
    {
      title: "Welcome to Elim Pentecostal Church of Kenya (EPCK)",
      subtitle: "Rooted in the rich heritage of the global Elim movement, we are a Christ-centered, Spirit-filled church committed to transforming lives and communities holistically.",
      buttons: [
        { text: "Join Us", link: "/join" },
        { text: "Our Ministries", link: "/ministries" }
      ]
    },
    {
      title: "Transforming Lives and Communities",
      subtitle: "Join us as we raise healthy churches, nurture strong families, and extend the love of Christ through service, compassion, and impact-driven programs across Kenya and beyond.",
      buttons: [
        { text: "Learn More", link: "/about" },
        { text: "Contact Us", link: "/contact" }
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroContent.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const SlideContent = ({ content }) => (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
        {content.title}
      </h1>
      <p className="text-base md:text-lg mb-6 opacity-90">
        {content.subtitle}
      </p>
      <div className='flex flex-col sm:flex-row gap-3'>
        {content.buttons.map((button, i) => (
          <Link 
            key={i}
            to={button.link}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 transition-colors duration-300 text-center rounded-sm"
          >
            {button.text}
          </Link>
        ))}
      </div>
    </>
  )

  return (
    <section 
      className="relative w-full h-screen bg-cover bg-center text-white px-4 before:absolute before:inset-0 before:bg-black before:opacity-50 before:content-['']"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Wrapper adjusts for small vs large screens */}
      <section 
        className="
          absolute left-0 right-0 
          flex items-center justify-center
          h-[calc(100%-4rem)] mt-16   /* default for mobile/tablet */
          md:justify-start md:left-8 
          md:w-1/2 lg:w-2/5 xl:w-1/3
          lg:mt-0 lg:bottom-2 lg:h-auto  /* override on large screens */
        "
      >
        <div className="relative w-full h-full md:h-96 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="
                absolute inset-0 flex flex-col justify-center 
                p-6 md:p-8 
                md:bg-black/60 md:backdrop-blur-sm
              "
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <SlideContent content={heroContent[index]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </section>
  )
}

export default Hero
