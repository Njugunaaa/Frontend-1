import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Heart, Users, Phone } from "lucide-react";

function SubdomainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navItems = [
    { id: 0, name: "Home", link: "/", icon: Heart },
    { id: 1, name: "About", link: "/about", icon: Users },
    { id: 2, name: "Contact", link: "/contact", icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [scrollY]);

  const isScrolled = scrollY > 50;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-200"
              : "bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 shadow-xl"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <NavLink
                to="/subdomain"
                className="flex items-center space-x-3 group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isScrolled ? "bg-purple-600" : "bg-white"
                } group-hover:scale-110`}>
                  <Heart className={`w-6 h-6 transition-colors duration-300 ${
                    isScrolled ? "text-white" : "text-purple-600"
                  }`} />
                </div>
                <div className="hidden sm:block">
                  <h1 className={`text-xl font-bold transition-colors duration-300 ${
                    isScrolled ? "text-purple-800" : "text-white"
                  }`}>
                    Grace Community
                  </h1>
                  <p className={`text-sm transition-colors duration-300 ${
                    isScrolled ? "text-purple-600" : "text-purple-100"
                  }`}>
                    Subdomain Edition
                  </p>
                </div>
              </NavLink>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.id}
                      to={item.link}
                      className={({ isActive }) => `
                        flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105
                        ${isActive
                          ? isScrolled
                            ? "bg-purple-600 text-white shadow-lg"
                            : "bg-white/20 text-white backdrop-blur-sm"
                          : isScrolled
                            ? "text-purple-700 hover:text-purple-800 hover:bg-purple-50"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                    </NavLink>
                  );
                })}
              </div>

              {/* Mobile menu button */}
              <button
                className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? "text-purple-700 hover:bg-purple-50"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div className={`absolute top-0 left-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
          <div className="p-6 pt-24">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-purple-800">Grace Community</h2>
                <p className="text-sm text-purple-600">Subdomain Edition</p>
              </div>
            </div>

            <nav className="space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.link;
                return (
                  <NavLink
                    key={item.id}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-purple-600 text-white shadow-lg"
                        : "text-purple-700 hover:bg-purple-50 hover:text-purple-800"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubdomainNav;
