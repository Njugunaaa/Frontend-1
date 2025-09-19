import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import{ ChevronUp, MessageCircle } from 'lucide-react'
import whatsapplogo from '../assets/whatsapp.svg'

function Layout() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

   useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setShowBackToTop(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

   // Back to Top Button with Progress Ring
  const BackToTopButton = () => {
    const circumference = 2 * Math.PI * 20;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;
    
    return (
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300  ${
        showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <button
          onClick={scrollToTop}
          className={`relative cursor-pointer w-12 h-12 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl active:scale-95 bg-gray-900 hover:bg-gray-800 text-white`}
        >
          <svg
            className="absolute inset-0 w-12 h-12 transform -rotate-90"
            viewBox="0 0 44 44"
          >
            <circle
              cx="22"
              cy="22"
              r="20"
              stroke={'#e5e7eb'}
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            <circle
              cx="22"
              cy="22"
              r="20"
              stroke={'#ffffff'}
              strokeWidth="2"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          </svg>
          
          <ChevronUp className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </button>
      </div>
    );
  };

  const WhatsappButton = () => {
  const whatsappNumber = "254114872974"; // Replace with your number in international format
  const message = "Hello, I’d like to get in touch!"; // Prefilled text

  const openWhatsapp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 transform`}
    >
      <button
        onClick={openWhatsapp}
        className="relative cursor-pointer w-12 h-12 rounded-full transition-all duration-300 hover:shadow-xl active:scale-95"
      >
        <img src={whatsapplogo}/>
      </button>
    </div>
  );
};

 return (
  <section className="flex flex-col min-h-screen">
    <Nav />
    <BackToTopButton />
    <WhatsappButton />
    {/* main content grows to fill available space */}
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </section>
);
}

export default Layout