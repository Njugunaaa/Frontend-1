import React, { useState, useEffect, memo } from "react";

const EventCountdownTimer = ({
  eventTitle = "Upcoming Event",
  eventDate = new Date("2026-01-01T00:00:00"), // static by default
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const eventTime = new Date(eventDate).getTime();
      const difference = eventTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []); // ✅ empty dependency fixes infinite loop

  const CircularProgressRing = memo(({ value, maxValue, size = 85, unit }) => {
    const margin = 12;
    const strokeWidth = 6;
    const outerRadius = (size + margin * 2 - strokeWidth) / 2;
    const circumference = outerRadius * 2 * Math.PI;
    const normalizedValue = Math.max(0, Math.min(value, maxValue));
    const progress =
      circumference - (normalizedValue / maxValue) * circumference;

    return (
      <div className="flex flex-col items-center mx-2 sm:mx-3">
        <div className="relative inline-flex items-center justify-center">
          <svg
            width={size + margin * 2}
            height={size + margin * 2}
            className="transform -rotate-90"
          >
            <circle
              cx={(size + margin * 2) / 2}
              cy={(size + margin * 2) / 2}
              r={outerRadius}
              stroke="#656A1D"
              strokeWidth={strokeWidth}
              fill="transparent"
              opacity="0.3"
            />
            <circle
              cx={(size + margin * 2) / 2}
              cy={(size + margin * 2) / 2}
              r={outerRadius}
              stroke="#EB3237"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={progress}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
          </svg>

          <div
            className="bg-primary rounded-full border-2 border-secondary shadow-lg absolute flex flex-col items-center justify-center"
            style={{ width: size, height: size }}
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-amber-200 text-[10px] sm:text-xs font-medium capitalize">
              {unit}
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className=" bg-white p-6 sm:p-8 w-full">
      <div className="w-full flex justify-center">
        <div className="w-[10rem] h-[0.4rem] bg-primary mb-[3rem]"/>
      </div>
      {/* Event Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="font-lobster text-xl sm:text-2xl md:text-3xl font-bold text-green/90 italic">
          {eventTitle}
        </h2>
      </div>

      {/* Countdown Circles */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6">
        <CircularProgressRing value={timeLeft.days} maxValue={365} unit="Days" />
        <CircularProgressRing value={timeLeft.hours} maxValue={24} unit="Hours" />
        <CircularProgressRing value={timeLeft.minutes} maxValue={60} unit="Minutes" />
        <CircularProgressRing value={timeLeft.seconds} maxValue={60} unit="Seconds" />

        <button className="font-serif w-full sm:w-auto mt-4 sm:mt-0 bg-primary cursor-pointer hover:bg-secondary text-amber-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
          ALL EVENTS
        </button>
      </div>
    </div>
  );
};

export default EventCountdownTimer;
