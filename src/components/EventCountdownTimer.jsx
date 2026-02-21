import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";

// 2026 Master Calendar Events
const events2026 = [
  { title: 'NEC Meeting', date: new Date(2026, 0, 3) },
  { title: 'Personal Prayers', date: new Date(2026, 0, 2) },
  { title: 'Prayer Week', date: new Date(2026, 0, 5) },
  { title: 'ENEB Education Week', date: new Date(2026, 0, 12) },
  { title: 'Helps Ministry Week', date: new Date(2026, 0, 26) },
  { title: 'NEC Visit – Turkana', date: new Date(2026, 1, 3) },
  { title: 'NEC Visit – Nairobi (Tena)', date: new Date(2026, 1, 8) },
  { title: 'NEC Visit – Nakuru/Narok', date: new Date(2026, 1, 12) },
  { title: 'NEC Visit – Nairobi Metro', date: new Date(2026, 1, 14) },
  { title: 'NEC Visit – Kiambu', date: new Date(2026, 1, 19) },
  { title: 'EPCK Prayers', date: new Date(2026, 2, 2) },
  { title: 'Mt Kenya Central Gathering', date: new Date(2026, 2, 7) },
  { title: 'National Secretariat Funds Drive', date: new Date(2026, 2, 9) },
  { title: 'Missions Week', date: new Date(2026, 2, 16) },
  { title: 'Laikipia Gathering', date: new Date(2026, 2, 28) },
  { title: 'EPCK Prayer', date: new Date(2026, 3, 6) },
  { title: 'National Dorcas Conference', date: new Date(2026, 3, 6) },
  { title: 'Sunday School Week', date: new Date(2026, 3, 13) },
  { title: 'National PKs Conference', date: new Date(2026, 3, 20) },
  { title: 'Youth Week', date: new Date(2026, 3, 20) },
  { title: 'EPCK Prayers', date: new Date(2026, 4, 4) },
  { title: 'South Coast Kware Gathering', date: new Date(2026, 4, 9) },
  { title: 'Dorcas Week', date: new Date(2026, 4, 11) },
  { title: 'Nakuru Gathering', date: new Date(2026, 4, 23) },
  { title: 'Kajiado Gathering', date: new Date(2026, 4, 30) },
  { title: 'EPCK Prayers', date: new Date(2026, 5, 1) },
  { title: 'Taita Taveta Gathering', date: new Date(2026, 5, 6) },
  { title: 'Caleb Week', date: new Date(2026, 5, 8) },
  { title: 'Missions Week & Church Planting', date: new Date(2026, 5, 15) },
  { title: 'Mt Kenya West Gathering', date: new Date(2026, 5, 27) },
  { title: 'NEC/Synod Virtual Meeting', date: new Date(2026, 6, 3) },
  { title: 'TransNzoia Gathering', date: new Date(2026, 6, 4) },
  { title: 'EPCK Prayers', date: new Date(2026, 6, 6) },
  { title: 'Turkana Gathering', date: new Date(2026, 6, 11) },
  { title: 'Nairobi Metro Gathering', date: new Date(2026, 6, 18) },
  { title: 'Regional Pastors Empowerment Week', date: new Date(2026, 6, 27) },
  { title: 'EPCK Prayers', date: new Date(2026, 7, 3) },
  { title: 'General Regional Conference', date: new Date(2026, 7, 3) },
  { title: 'Regional Conferences', date: new Date(2026, 7, 10) },
  { title: 'National Secretariat Week', date: new Date(2026, 8, 7) },
  { title: 'EPCK Prayers', date: new Date(2026, 9, 5) },
  { title: 'Missions & Church Planting Week', date: new Date(2026, 9, 12) },
  { title: 'Caleb Week', date: new Date(2026, 9, 27) },
  { title: 'EPCK Prayers', date: new Date(2026, 10, 2) },
  { title: 'Sunday School Week', date: new Date(2026, 10, 9) },
  { title: 'Dorcas Week', date: new Date(2026, 10, 10) },
  { title: 'NEC/SYNOD', date: new Date(2026, 10, 20) },
  { title: 'AGM', date: new Date(2026, 10, 21) },
  { title: 'EPCK Family Sunday & Pastors Appreciation Day', date: new Date(2026, 11, 6) },
  { title: 'Ignite National Youth Conference', date: new Date(2026, 11, 7) },
  { title: 'Christmas Cantata', date: new Date(2026, 11, 14) },
];

function getNextEvent() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const upcoming = events2026
    .filter(e => e.date >= now)
    .sort((a, b) => a.date - b.date);
  return upcoming[0] || null;
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
}

const CircularProgressRing = memo(({ value, maxValue, size = 70, unit }) => {
  const margin = 10;
  const strokeWidth = 5;
  const outerRadius = (size + margin * 2 - strokeWidth) / 2;
  const circumference = outerRadius * 2 * Math.PI;
  const normalizedValue = Math.max(0, Math.min(value, maxValue));
  const progress = circumference - (normalizedValue / maxValue) * circumference;

  return (
    <div className="flex flex-col items-center">
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
            stroke="#117949"
            strokeWidth={strokeWidth}
            fill="transparent"
            opacity="0.3"
          />
          <circle
            cx={(size + margin * 2) / 2}
            cy={(size + margin * 2) / 2}
            r={outerRadius}
            stroke="#656A1D"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.3s ease" }}
          />
        </svg>
        <div
          className="bg-green-100 rounded-full border-2 border-green-300 shadow absolute flex flex-col items-center justify-center"
          style={{ width: size, height: size }}
        >
          <span className="text-base font-bold text-green-800">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-green-600 text-[9px] font-medium capitalize">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
});

const EventCountdownTimer = () => {
  const [nextEvent, setNextEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    setNextEvent(getNextEvent());
  }, []);

  useEffect(() => {
    if (!nextEvent) return;
    const calc = () => {
      const eventTime = new Date(nextEvent.date);
      eventTime.setHours(8, 0, 0, 0); // default 8am start
      const diff = eventTime.getTime() - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, [nextEvent]);

  if (!nextEvent) return (
    <div className="bg-green-50 p-4 w-full text-center text-gray-600 rounded-lg text-sm">
      No upcoming events.
    </div>
  );

  return (
    <div className="bg-green-50 p-4 sm:p-5 w-full rounded-lg shadow-lg">
      <div className="w-full flex justify-center">
        <div className="w-16 h-0.5 bg-green-700 mb-4 rounded" />
      </div>

      <h2 className="font-serif text-xl font-bold text-green-800 italic text-center mb-3">
        Next Event
      </h2>

      <div className="text-center mb-3">
        <h3 className="text-sm font-semibold text-green-900">{nextEvent.title}</h3>
        <p className="text-green-700 text-xs mt-1">{formatDate(nextEvent.date)}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-1 mb-3">
        <CircularProgressRing value={timeLeft.days}    maxValue={365} unit="Days"    size={70} />
        <CircularProgressRing value={timeLeft.hours}   maxValue={24}  unit="Hours"   size={70} />
        <CircularProgressRing value={timeLeft.minutes} maxValue={60}  unit="Mins"    size={70} />
        <CircularProgressRing value={timeLeft.seconds} maxValue={60}  unit="Secs"    size={70} />
      </div>

      <button
        onClick={() => navigate('/events')}
        className="font-serif w-full mt-2 bg-green-700 hover:bg-green-900 text-amber-100 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        ALL EVENTS
      </button>
    </div>
  );
};

export default EventCountdownTimer;