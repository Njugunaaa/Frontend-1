import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../components/BreadCrump";
import AboutServices from "../components/AboutServices";
import ChurchOutreachComponent from "../components/ChurchOutreachComponen";

export default function InvestmentHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filmstripImages = [
    "https://picsum.photos/id/1011/200/200",
    "https://picsum.photos/id/1012/200/200",
    "https://picsum.photos/id/1015/200/200",
    "https://picsum.photos/id/1021/200/200",
    "https://picsum.photos/id/1027/200/200",
  ];

  return (
    <div className="h-fit bg-gray-50 p-4 md:p-6 relative">
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
        {/* Responsive grid: single col on mobile, two cols on desktop */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* LEFT - Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-blue/70 via-blue/40 to-blue/20 rounded-xl p-8 relative min-h-[200px] flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 max-w-lg">
              Reaching Out, Changing Lives
            </h1>
            <p className="text-base md:text-lg text-white font-bold leading-relaxed max-w-xl">
              At Elim Church, outreach is at the heart of our mission. We step
              beyond the walls of the church to meet people where they are -
              offering encouragement, practical support, and the love of Christ.
              From community visits and care programs to youth empowerment and
              family support, our outreach brings hope, healing, and connection.
              Together, we believe in building stronger families and a stronger
              community.
            </p>
          </motion.div>

          {/* RIGHT - Outreach + Filmstrip */}
          <div className="flex flex-col gap-6">
            {/* Outreach Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="bg-white rounded-3xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-500 tracking-wider">
                  OUTREACH
                </span>
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17l9.2-9.2M17 17V7H7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight">
                Touching Hearts, Meeting Needs: Together We Shine God’s Light in
                Our Community
              </h3>
            </motion.div>

            {/* Filmstrip Card */}
            <div className="bg-white rounded-3xl p-6 flex flex-col relative">
              {/* JOIN US Button in top-right */}
              <button className="absolute top-6 right-6 z-20 bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                JOIN US
              </button>

              {/* Auto-scrolling filmstrip with larger images */}
              <div className="relative overflow-hidden h-56 mt-14">
                <div className="flex gap-6 animate-scroll-x h-full items-center">
                  {[...filmstripImages, ...filmstripImages].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`person-${i}`}
                      className="w-40 h-40 md:w-48 md:h-48 object-cover shadow-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChurchOutreachComponent />
    </div>
  );
}
