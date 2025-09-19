import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";

const weeklyEvents = [
  {
    title: 'Pastors Rest Day',
    daysOfWeek: [1], // Monday
    allDay: true,
    description: 'Pastors rest day - no scheduled activities.',
  },
  {
    title: 'Home Fellowships',
    daysOfWeek: [2], // Tuesday
    startTime: '19:00',
    endTime: '20:00',
    description: 'Weekly home fellowships for community and spiritual growth.',
  },
  {
    title: 'Midweek Service',
    daysOfWeek: [3], // Wednesday
    startTime: '18:30',
    endTime: '19:30',
    description: 'Midweek service for worship and teaching.',
  },
  {
    title: 'Praise and Worship Practice',
    daysOfWeek: [3, 6], // Wednesday and Saturday
    startTime: '20:00',
    endTime: '22:00',
    description: 'Weekly praise and worship practice session.',
  },
  {
    title: 'PAC Class for Leaders',
    daysOfWeek: [4], // Thursday
    startTime: '20:00',
    endTime: '22:00',
    description: 'Leadership development class for PAC members.',
  },
  {
    title: 'Prayers',
    daysOfWeek: [5], // Friday
    startTime: '18:00',
    endTime: '21:00',
    description: 'Weekly prayer meeting.',
  },
  {
    title: 'Full Kesha (Last Friday)',
    daysOfWeek: [5], // Friday
    startTime: '22:00',
    endTime: '05:00',
    description: 'Last Friday Full Kesha',
    isLastFriday: true,
  },
  {
    title: 'Children Ministry Choir Practice',
    daysOfWeek: [6], // Saturday
    startTime: '15:00',
    endTime: '16:00',
    description: 'Choir practice for children ministry.',
  },
  {
    title: 'Praise and Worship Practice',
    daysOfWeek: [6], // Saturday
    startTime: '18:00',
    endTime: '21:00',
    description: 'Weekly praise and worship practice session.',
  },
  {
    title: '1st Service - Youth & Highschoolers',
    daysOfWeek: [0], // Sunday
    startTime: '08:30',
    endTime: '09:45',
    description: 'First service dedicated to youth and highschoolers.',
  },
  {
    title: '2nd Service - Main Service',
    daysOfWeek: [0], // Sunday
    startTime: '10:00',
    endTime: '12:30',
    description: 'Main Sunday service.',
    isSecondSunday: true,
  },
];

// Helper to get date of last Friday of a month
function getLastFriday(year, month) {
  const lastDay = new Date(year, month + 1, 0);
  const day = lastDay.getDay();
  const diff = (day >= 5) ? day - 5 : 7 - (5 - day);
  return new Date(year, month + 1, 0 - diff);
}

// Helper to get next date for a weekly event
function getNextEventDate(event) {
  const now = new Date();
  const today = now.getDay();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  // Find next day of week for event
  let daysUntilNext = null;
  for (let i = 0; i < 7; i++) {
    const dayToCheck = (today + i) % 7;
    if (event.daysOfWeek.includes(dayToCheck)) {
      // If today, check time
      if (i === 0) {
        if (event.allDay) {
          daysUntilNext = 0;
          break;
        } else {
          const [startHour, startMinute] = event.startTime.split(':').map(Number);
          const eventStartTime = startHour * 60 + startMinute;
          if (eventStartTime > currentTime) {
            daysUntilNext = 0;
            break;
          }
        }
      } else {
        daysUntilNext = i;
        break;
      }
    }
  }
  if (daysUntilNext === null) return null;

  const nextDate = new Date(now);
  nextDate.setDate(now.getDate() + daysUntilNext);

  // Handle last Friday special event
  if (event.isLastFriday) {
    const lastFriday = getLastFriday(nextDate.getFullYear(), nextDate.getMonth());
    if (nextDate.getDate() !== lastFriday.getDate()) {
      // If not last Friday, find next month's last Friday
      nextDate.setMonth(nextDate.getMonth() + 1);
      const nextLastFriday = getLastFriday(nextDate.getFullYear(), nextDate.getMonth());
      return nextLastFriday;
    }
  }

  return nextDate;
}

function formatTimeRange(event, date) {
  if (event.allDay) return "All day";
  return `${event.startTime} - ${event.endTime}`;
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
}

const EventCountdownTimer = () => {
  const [nextEvent, setNextEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Find the next upcoming event
    let soonestEvent = null;
    let soonestDate = null;

    weeklyEvents.forEach(event => {
      const eventDate = getNextEventDate(event);
      if (!eventDate) return;
      if (!soonestDate || eventDate < soonestDate) {
        soonestDate = eventDate;
        soonestEvent = event;
      }
    });

    setNextEvent({ ...soonestEvent, date: soonestDate });
  }, []);

  useEffect(() => {
    if (!nextEvent) return;

    const calculateTimeLeft = () => {
      const now = Date.now();
      const eventTime = new Date(nextEvent.date);
      if (nextEvent.startTime) {
        const [h, m] = nextEvent.startTime.split(':').map(Number);
        eventTime.setHours(h, m, 0, 0);
      }
      const difference = eventTime.getTime() - now;

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
  }, [nextEvent]);

  if (!nextEvent) {
    return (
      <div className="bg-white p-6 sm:p-8 w-full text-center text-gray-600">
        No upcoming events.
      </div>
    );
  }

  const CircularProgressRing = memo(({ value, maxValue, size = 70, unit }) => {
    const margin = 12;
    const strokeWidth = 6;
    const outerRadius = (size + margin * 2 - strokeWidth) / 2;
    const circumference = outerRadius * 2 * Math.PI;
    const normalizedValue = Math.max(0, Math.min(value, maxValue));
    const progress =
      circumference - (normalizedValue / maxValue) * circumference;

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
            className="bg-green-100 rounded-full border-2 border-green-300 shadow-lg absolute flex flex-col items-center justify-center"
            style={{ width: size, height: size }}
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-800">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-green-600 text-[10px] sm:text-xs font-medium capitalize">
              {unit}
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-green-50 p-6 sm:p-8 w-full rounded-lg shadow-lg">
      <div className="w-full flex justify-center">
        <div className="w-24 h-1 bg-green-700 mb-6 rounded" />
      </div>
      <h2 className="font-lobster text-3xl font-bold text-green-800 italic text-center mb-4">
        Next Event
      </h2>
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-green-900">{nextEvent.title}</h3>
        <p className="text-green-700">{formatDate(nextEvent.date)}</p>
        <p className="text-green-600">{formatTimeRange(nextEvent, nextEvent.date)}</p>
        <p className="mt-2 text-green-700 italic">{nextEvent.description}</p>
      </div>
      {/* Countdown Circles */}
      <div className="flex flex-wrap justify-center gap-1 mb-4">
        <CircularProgressRing value={timeLeft.days} maxValue={365} unit="Days" size={100}/>
        <CircularProgressRing value={timeLeft.hours} maxValue={24} unit="Hours" size={100}/>
        <CircularProgressRing value={timeLeft.minutes} maxValue={60} unit="Minutes" size={100}/>
        <CircularProgressRing value={timeLeft.seconds} maxValue={60} unit="Seconds" size={100}/>
      </div>
      <button
        onClick={() => navigate('/events')}
        className="font-serif w-full sm:w-auto mt-4 bg-green-700 hover:bg-green-900 text-amber-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        ALL EVENTS
      </button>
    </div>
  );
};

export default EventCountdownTimer;
