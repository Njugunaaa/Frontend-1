import React, { useEffect, useState } from "react";

const galleryImages = [
  "https://picsum.photos/id/1018/300/400",
  "https://picsum.photos/id/1025/300/400",
  "https://picsum.photos/id/1037/300/400",
  "https://picsum.photos/id/1042/300/400",
];

export default function InvestmentHeroSection() {
  const [shift, setShift] = useState(false);

  useEffect(() => {
    // trigger shift animation after mount
    const timer = setTimeout(() => setShift(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-200 via-blue-100 to-slate-200 rounded-3xl p-12 flex flex-col justify-center relative overflow-hidden">
      {/* Headline */}
      <h1 className="text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-lg">
        Reaching Out, Changing Lives
      </h1>

      {/* Supporting paragraph */}
      <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
        At Elim Church, outreach is at the heart of our mission.  
        We step beyond the walls of the church to meet people where they are-
        offering encouragement, practical support, and the love of Christ.  
        From community visits and care programs to youth empowerment and 
        family support, our outreach brings hope, healing, and connection.  
        Together, we believe in building stronger families and a stronger community. 
      </p>

      {/* Floating image columns */}
      <div className="absolute top-6 -right-10 flex gap-4">
        {/* Left column with animation */}
        <div
          className={`flex flex-col gap-3 transform transition-all duration-1000 ${
            shift ? "translate-y-10" : "translate-y-0"
          }`}
        >

        </div>
      </div>
    </div>
  );
}
