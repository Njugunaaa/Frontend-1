import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  BookOpen,
  Users,
  Heart,
  Hammer,
  User,
  ChevronDown,
  Gift,
  HandHeart,
  LinkIcon,
  ArrowRight,
} from "lucide-react";
import Logo from "../assets/mainlogo.png";

/** Constants */
const ICON_COLOR_CLASS = "text-[#A00000]";
const NAV_BG = "bg-[#FDF0D5]";
const ACCENT_RED = "#A00000";

const NAV_ITEMS = [
  { id: "home", name: "Home", link: "/" },
  { id: "about", name: "About Us", link: "/about" },
  {
    id: "ministries",
    name: "Ministries",
    children: [
      {
        id: "mission-work",
        name: "Mission Work & Church Planting",
        link: "/missions",
        icon: BookOpen,
        desc: "Spreading the gospel and establishing new churches"
      },
      { 
        id: "youth", 
        name: "Youth Ministry", 
        link: "/ministries/youth", 
        icon: Users,
        desc: "Empowering the next generation in faith"
      },
      { 
        id: "dorcas", 
        name: "Dorcas Ministry (Women's)", 
        link: "/ministries/dorcas", 
        icon: Heart,
        desc: "Fellowship and service for women"
      },
      { 
        id: "helps", 
        name: "Ministry of Helps", 
        link: "/ministries/helps", 
        icon: Hammer,
        desc: "Practical service and support"
      },
      { 
        id: "caleb", 
        name: "Caleb Ministry (Men's)", 
        link: "/ministries/caleb", 
        icon: User,
        desc: "Building strong men of faith"
      },
      { 
        id: "children", 
        name: "Children & Sunday School", 
        link: "/ministries/children", 
        icon: Users,
        desc: "Nurturing young hearts for Christ"
      },
    ],
  },
  { id: "events", name: "Events", link: "/events" },
  { id: "sermons", name: "Sermons & Messages", link: "/sermons" },
  { id: "contact", name: "Contact", link: "/contact" },
  {
    id: "join",
    name: "Join Us",
    children: [
      { 
        id: "support", 
        name: "Support Our Missions", 
        link: "/join/support", 
        icon: HandHeart,
        desc: "Help us reach the unreached"
      },
      { 
        id: "partner", 
        name: "Join a Church", 
        link: "/join/join", 
        icon: LinkIcon,
        desc: "Visit a Church Near You"
      },
      { 
        id: "give", 
        name: "Give Now", 
        link: "/join/give", 
        icon: Gift,
        desc: "Make a difference today"
      },
    ],
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileAccordions, setMobileAccordions] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef();
  const dropdownTimeoutRef = useRef();

  /** Scroll behavior */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrollY(current);
      if (current < lastScrollY || current < 100) setIsVisible(true);
      else if (current > lastScrollY && current > 100) setIsVisible(false);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /** Close mobile menu on resize */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 957 && isOpen) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen]);

  /** Click outside dropdown */
  useEffect(() => {
    const handler = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMouseEnter = (itemId) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(itemId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileAccordion = (id) => {
    setMobileAccordions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isScrolled = scrollY > 50;

  return (
    <>
      {/* NAV */}
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div
          className={`mx-auto w-[70%] h-[5rem] flex items-center justify-between px-6 ${NAV_BG} ${
            isScrolled ? "shadow-lg backdrop-blur-sm" : "backdrop-blur-sm"
          } transition-all duration-300`}
        >
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 z-10">
            <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            {NAV_ITEMS.map((item) => {
              if (!item.children)
                return (
                  <NavLink
                    key={item.id}
                    to={item.link}
                    className="relative px-2 py-2 hover:text-[#A00000] transition-colors duration-200"
                  >
                    {item.name}
                  </NavLink>
                );

              return (
                <div
                  key={item.id}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-2 px-2 py-2 hover:text-[#A00000] transition-colors duration-200"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.id}
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Desktop Join button */}
          <div className="hidden md:flex items-center gap-4 z-10">
            <NavLink
              to="/join/give"
              className="bg-[#A00000] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#8B0000] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Give Now
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-[#f6e9d8] transition-all duration-200"
            onClick={() => setIsOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Mega Dropdown Panel */}
        <div
          className={`hidden md:block absolute left-0 right-0 transition-all duration-300 ease-out origin-top ${
            openDropdown ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          onMouseEnter={() => {
            if (dropdownTimeoutRef.current) {
              clearTimeout(dropdownTimeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`mx-auto w-[70%] ${NAV_BG} shadow-2xl rounded-b-2xl overflow-hidden`}>
            {NAV_ITEMS.filter(item => item.children && item.id === openDropdown).map(item => (
              <div key={item.id} className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#A00000] mb-2">{item.name}</h3>
                  <div className="w-16 h-1 bg-[#A00000] rounded-full"></div>
                </div>
                
                <div className={`grid gap-4 ${
                  item.children.length <= 3 ? 'grid-cols-3' : 'grid-cols-3'
                }`}>
                  {item.children.map((child) => {
                    const Icon = child.icon;
                    return (
                      <NavLink
                        key={child.id}
                        to={child.link}
                        onClick={() => setOpenDropdown(null)}
                        className="group relative p-5 rounded-xl hover:bg-white transition-all duration-200 border-2 border-transparent hover:border-[#A00000]/20 hover:shadow-md"
                      >
                        <div className="flex items-start gap-4">
                          {Icon && (
                            <div className="p-3 rounded-lg bg-[#A00000]/10 group-hover:bg-[#A00000] transition-colors duration-200">
                              <Icon className={`w-6 h-6 text-[#A00000] group-hover:text-white transition-colors duration-200`} />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-[#A00000] transition-colors duration-200 flex items-center gap-2">
                              {child.name}
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                            </h4>
                            {child.desc && (
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {child.desc}
                              </p>
                            )}
                          </div>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Panel - Simplified with single close button */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "85vw", maxWidth: "400px" }}
      >
        <div className={`${NAV_BG} h-full shadow-2xl flex flex-col`}>
          {/* Mobile Header - Single Close Button */}
          <div className="flex items-center justify-between p-5 border-b border-[#A00000]/10">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="w-14 h-14 object-contain" />
              <span className="font-bold text-[#A00000]">Menu</span>
            </NavLink>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 rounded-lg hover:bg-[#f6e9d8] transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={24} className="text-[#A00000]" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 px-4 py-6 overflow-auto">
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                if (!item.children) {
                  return (
                    <li key={item.id}>
                      <NavLink
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                            isActive 
                              ? 'bg-[#A00000] text-white' 
                              : 'hover:bg-[#f6e9d8] text-gray-800'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
                }

                const isAccordionOpen = mobileAccordions[item.id];

                return (
                  <li key={item.id} className="border border-[#A00000]/10 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleMobileAccordion(item.id)}
                      className="w-full flex items-center justify-between bg-[#A00000]/5 px-4 py-3 hover:bg-[#A00000]/10 transition-colors duration-200"
                      aria-expanded={isAccordionOpen}
                    >
                      <span className="font-semibold text-[#A00000] text-base">
                        {item.name}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-[#A00000] transition-transform duration-200 ${
                          isAccordionOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out ${
                        isAccordionOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <ul className="py-2">
                        {item.children.map((child) => {
                          const Icon = child.icon;
                          return (
                            <li key={child.id}>
                              <NavLink
                                to={child.link}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                  `flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${
                                    isActive 
                                      ? 'bg-[#A00000] text-white' 
                                      : 'hover:bg-[#f6e9d8] text-gray-800'
                                  }`
                                }
                              >
                                {Icon && <Icon className="w-4 h-4 shrink-0" />}
                                <span className="flex-1">{child.name}</span>
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-8 px-2">
              <NavLink
                to="/join/give"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#A00000] text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-[#8B0000] transition-all duration-200 shadow-lg"
              >
                <Gift className="w-5 h-5" />
                Give Now
              </NavLink>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[55] bg-black/50 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}