import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/logo.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: 0, name: "Home", link: "/" },
    { id: 1, name: "About us", link: "/about" },
    { id: 3, name: "Events", link: "/events" },
    { id: 4, name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll position
      setScrollY(currentScrollY);
      
      // Determine visibility based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide navbar
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [scrollY]);

  const isScrolled = scrollY > 50;

  return (
    <>
      <section 
        className={`w-full p-2 h-fit flex items-center justify-center fixed z-60 transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <section 
          className={`nav-container w-[70%] h-[5rem] flex justify-between items-center px-4 relative transition-all duration-300 ease-in-out ${
            isScrolled 
              ? 'bg-[#FDF0D5] shadow-lg backdrop-blur-sm' 
              : 'bg-[#FDF0D5]/80 backdrop-blur-sm shadow-none'
          }`}
          style={{
            borderRadius: isScrolled ? '0px' : '12px',
          }}
        >
          {/* Logo */}
          <div className="overflow-hidden w-[10rem] h-[10rem] flex justify-center items-center">
            <img src={Logo} alt="Logo" />
          </div>

          {/* Nav items (desktop only) */}
          <ul className="nav-items flex items-center gap-6 font-semibold">
            {navItems.map((item) => (
              <Link 
                key={item.id} 
                to={item.link}
                className="hover:text-[#780000] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </ul>

          {/* Desktop button */}
          <button className="give-btn mr-4 bg-[#780000] flex justify-center items-center w-[7rem] h-[3rem] cursor-pointer text-white rounded-full hover:bg-[#a00000] transition-colors duration-200 transform hover:scale-105">
            Give now
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="hamburger text-[#780000] transition-transform duration-200 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </section>
      </section>

      {/* Mobile Side Nav */}
      <div className={`side-nav ${isOpen ? "open" : ""}`}>
        <div className="flex flex-col gap-6 font-semibold p-6 pt-20">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-[#780000] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-[#780000] w-[7rem] h-[3rem] cursor-pointer text-white rounded-full hover:bg-[#a00000] transition-colors duration-200 transform hover:scale-105">
            Give now
          </button>
        </div>
      </div>

      {/* Dark overlay when menu is open */}
      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Custom breakpoint + side nav styles */}
      <style jsx>{`
        /* Hide hamburger by default */
        .hamburger {
          display: none;
        }
        .nav-items,
        .give-btn {
          display: flex;
        }

        /* Side nav (hidden by default) */
        .side-nav {
          position: fixed;
          top: 0;
          left: -70%;
          width: 70%;
          height: 100vh;
          background: #fdf0d5;
          box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 100;
        }
        .side-nav.open {
          left: 0;
        }

        /* Overlay */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 50;
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Responsive breakpoint */
        @media (max-width: 957px) {
          .nav-items,
          .give-btn {
            display: none;
          }
          .hamburger {
            display: block;
          }
        }

        /* Smooth scrolling for the page */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #780000;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #a00000;
        }
      `}</style>
    </>
  );
}

export default Nav;