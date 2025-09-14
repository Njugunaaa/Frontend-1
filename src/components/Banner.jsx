import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function SvgPopup() {
  const [showSvg, setShowSvg] = useState(false);
  const [showSvgText, setShowSvgText] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Step 1: Show SVG after mount
    setShowSvg(true);

    // Step 2: After rotation done, show text
    const textTimer = setTimeout(() => setShowSvgText(true), 1500);

    // Step 3: After text visible, show popup
    const popupTimer = setTimeout(() => setShowPopup(true), 2500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(popupTimer);
    };
  }, []);

  const handleClose = () => {
    // Reverse order: hide popup → hide text → rotate out
    setShowPopup(false);
  };

  return (
    <div className="fixed top-30 right-10 flex z-30 items-start space-x-4">
      {/* Popup div */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.5, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 top-[2rem] right-[-3rem]  z-20 rounded-2xl shadow-xl relative w-70"
          >
            <button
              onClick={handleClose}
              className="absolute top-2 left-2 cursor-pointer text-gray-600 text-lg"
            >
              <X />
            </button>
            <p className="text-gray-800 mt-3 font-extrabold">Luke 4:18-19</p>
            <p className="font-bold text-sm">
              The Spirit of the Lord is upon me, because He has anointed me:
            </p>
            <ul className="list-decimal">
              <li>
                To preach the gospel to the poor
              </li>
              <li>
                 To proclaim liberty to the captives
              </li>
              <li>
              To heal the brokenhearted 

              </li>
              <li>
                To recover the sight of the blind
              </li>
              <li>
              To proclaim the acceptable year of the Lord

              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SVG with rotation */}
      <div 
        className="cursor-pointer"
        onClick={() => {
          setShowPopup(true)
        }}
      >
        <AnimatePresence>
          {showSvg && (
            <motion.div
              key="svg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: [0, 360],
                transition: { duration: 1.5 },
              }}
              exit={{
                rotate: [0, 360],
                opacity: 0,
                scale: 0.5,
                transition: { duration: 1.5 },
              }}
              className="w-18 h-18 relative z-30"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0,300) scale(0.1,-0.1)"
                  fill="#d93f3f"
                  stroke="none"
                >
                  <path
                    d="M1430 2797 c-41 -19 -104 -48 -140 -64 -56 -27 -83 -32 -203 -41
                  -155 -12 -211 -31 -251 -86 -159 -217 -165 -223 -268 -297 -57 -40 -113 -82
                  -126 -93 -43 -38 -59 -93 -70 -236 l-10 -135 -62 -140 c-83 -185 -83 -197 -2
                  -372 66 -140 81 -204 82 -341 0 -118 27 -156 197 -273 84 -57 106 -79 160
                  -155 86 -122 129 -172 165 -190 17 -9 88 -21 171 -28 150 -14 169 -20 332 -97
                  129 -61 166 -60 310 10 139 67 176 78 304 86 188 12 193 15 335 210 65 89 84
                  108 185 179 163 114 180 144 190 341 l7 120 59 125 c57 118 60 129 60 200 0
                  52 -5 84 -17 105 -9 17 -36 71 -59 120 -40 84 -43 98 -50 206 -11 164 -28 217
                  -90 273 -27 24 -80 65 -117 89 -91 60 -118 87 -191 194 -34 51 -80 108 -101
                  127 -43 39 -80 48 -262 64 -112 10 -121 13 -235 68 -154 75 -197 79 -303 31z"
                  />
                </g>
              </svg>

              {/* Text inside SVG */}
              <AnimatePresence>
                {showSvgText && (
                  <motion.div
                    key="svg-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold text-center"
                  >
                    <div className="text-3xl flex flex-col font-bold ml-[0.3rem]">
                      <div className="">
                        <span className="inline-flex relative text-stroke text-transparent z-10">
                          2
                        </span>
                        <span className="inline-flex relative text-stroke text-transparent ">
                          0
                        </span>
                      </div>
                      <div className="mt-[-0.93rem]">
                        <span className="inline-flex relative text-stroke  text-transparent">
                          2
                        </span>
                        <span className="inline-flex relative text-stroke text-transparent z-10">
                          5
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      
    </div>
  );
}
