import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPublishedEvents } from '../lib/eventApi';

const CircularProgressRing = memo(({ value, maxValue, size = 70, unit }) => {
  const margin = 10;
  const strokeWidth = 5;
  const radius = (size + margin * 2 - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const safeValue = Number.isFinite(value) ? value : 0;
  const progress = circumference - (Math.max(0, Math.min(safeValue, maxValue)) / maxValue) * circumference;
  return <div className="flex flex-col items-center"><div className="relative inline-flex items-center justify-center"><svg width={size + margin * 2} height={size + margin * 2} className="transform -rotate-90"><circle cx={(size + margin * 2) / 2} cy={(size + margin * 2) / 2} r={radius} stroke="#117949" strokeWidth={strokeWidth} fill="transparent" opacity="0.3" /><circle cx={(size + margin * 2) / 2} cy={(size + margin * 2) / 2} r={radius} stroke="#656A1D" strokeWidth={strokeWidth} fill="transparent" strokeDasharray={circumference} strokeDashoffset={progress} strokeLinecap="round" /></svg><div className="bg-green-100 rounded-full border-2 border-green-300 shadow absolute flex flex-col items-center justify-center" style={{ width: size, height: size }}><span className="text-base font-bold text-green-800">{String(value).padStart(2, '0')}</span><span className="text-green-600 text-[9px] font-medium capitalize">{unit}</span></div></div></div>;
});

const getTimeLeft = (startsAt) => {
  const difference = new Date(startsAt).getTime() - Date.now();
  if (!Number.isFinite(difference) || difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return { days: Math.floor(difference / 86400000), hours: Math.floor((difference % 86400000) / 3600000), minutes: Math.floor((difference % 3600000) / 60000), seconds: Math.floor((difference % 60000) / 1000) };
};

export default function EventCountdownTimer() {
  const [featuredEvent, setFeaturedEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const loadFeaturedEvent = async () => {
      const now = Date.now();
      try {
        const adminEvent = (await getPublishedEvents()).find((event) => new Date(event.startsAt).getTime() > now);
        if (adminEvent) return setFeaturedEvent({ ...adminEvent, source: 'admin' });
      } catch (error) {
        console.error('Could not load dashboard events:', error);
      }
      const { events2026 } = await import('../pages/EventPage');
      const calendarEvent = events2026
        .filter((event) => new Date(event.start).getTime() > now)
        .sort((a, b) => new Date(a.start) - new Date(b.start))[0];
      setFeaturedEvent(calendarEvent ? { ...calendarEvent, startsAt: calendarEvent.start, source: 'calendar' } : null);
    };
    loadFeaturedEvent();
    const refresh = setInterval(loadFeaturedEvent, 60000);
    return () => clearInterval(refresh);
  }, []);

  useEffect(() => {
    if (!featuredEvent) return undefined;
    const update = () => setTimeLeft(getTimeLeft(featuredEvent.startsAt));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [featuredEvent]);

  if (!featuredEvent) return <div className="bg-green-50 p-4 w-full text-center text-gray-600 rounded-lg text-sm">No upcoming event scheduled.</div>;
  return <div className="bg-green-50 p-4 sm:p-5 w-full rounded-lg shadow-lg"><div className="w-full flex justify-center"><div className="w-16 h-0.5 bg-green-700 mb-4 rounded" /></div><h2 className="font-serif text-xl font-bold text-green-800 italic text-center mb-3">Next Event</h2><div className="text-center mb-3"><h3 className="text-sm font-semibold text-green-900">{featuredEvent.title}</h3><p className="text-green-700 text-xs mt-1">{new Date(featuredEvent.startsAt).toLocaleDateString(undefined, { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}</p></div><div className="flex flex-wrap justify-center gap-1 mb-3"><CircularProgressRing value={timeLeft.days} maxValue={365} unit="Days" /><CircularProgressRing value={timeLeft.hours} maxValue={24} unit="Hours" /><CircularProgressRing value={timeLeft.minutes} maxValue={60} unit="Mins" /><CircularProgressRing value={timeLeft.seconds} maxValue={60} unit="Secs" /></div><button onClick={() => navigate('/events')} className="font-serif w-full mt-2 bg-green-700 hover:bg-green-900 text-amber-100 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 shadow-md hover:shadow-lg">ALL EVENTS</button></div>;
}
