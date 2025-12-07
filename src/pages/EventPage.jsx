import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BreadCrumb from '../components/BreadCrump';
import html2canvas from 'html2canvas';
import { API } from '../config/api';

const localizer = momentLocalizer(moment);

const weeklyEvents = [
  {
    title: 'Pastors Rest Day',
    daysOfWeek: [1],
    allDay: true,
    description: 'Pastors rest day - no scheduled activities.',
  },
  {
    title: 'Home Fellowships',
    daysOfWeek: [2],
    startTime: '19:00',
    endTime: '20:00',
    description: 'Weekly home fellowships for community and spiritual growth.',
  },
  {
    title: 'Midweek Service',
    daysOfWeek: [3],
    startTime: '18:30',
    endTime: '19:30',
    description: 'Midweek service for worship and teaching.',
  },
  {
    title: 'Praise and Worship Practice',
    daysOfWeek: [3, 6],
    startTime: '20:00',
    endTime: '22:00',
    description: 'Weekly praise and worship practice session.',
  },
  {
    title: 'PAC Class for Leaders',
    daysOfWeek: [4],
    startTime: '20:00',
    endTime: '22:00',
    description: 'Leadership development class for PAC members.',
  },
  {
    title: 'Prayers',
    daysOfWeek: [5],
    startTime: '18:00',
    endTime: '21:00',
    description: 'Weekly prayer meeting.',
  },
  {
    title: 'Full Kesha (Last Friday)',
    daysOfWeek: [5],
    startTime: '22:00',
    endTime: '05:00',
    description: 'Last Friday Full Kesha',
    isLastFriday: true,
  },
  {
    title: 'Children Ministry Choir Practice',
    daysOfWeek: [6],
    startTime: '15:00',
    endTime: '16:00',
    description: 'Choir practice for children ministry.',
  },
  {
    title: 'Praise and Worship Practice',
    daysOfWeek: [6],
    startTime: '18:00',
    endTime: '21:00',
    description: 'Weekly praise and worship practice session.',
  },
  {
    title: '1st Service - Youth & Highschoolers',
    daysOfWeek: [0],
    startTime: '08:30',
    endTime: '09:45',
    description: 'First service dedicated to youth and highschoolers.',
  },
  {
    title: '2nd Service - Main Service',
    daysOfWeek: [0],
    startTime: '10:00',
    endTime: '12:30',
    description: 'Main Sunday service.',
    isSecondSunday: true,
  },
];

function getLastFriday(year, month) {
  const lastDay = new Date(year, month + 1, 0);
  const day = lastDay.getDay();
  const diff = (day >= 5) ? day - 5 : 7 - (5 - day);
  return new Date(year, month + 1, 0 - diff);
}

function generateEventsForMonth(date) {
  const events = [];
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(year, month, day);
    const dayOfWeek = currentDate.getDay();

    weeklyEvents.forEach((event) => {
      if (event.daysOfWeek.includes(dayOfWeek)) {
        if (event.isLastFriday) {
          const lastFriday = getLastFriday(year, month);
          if (
            currentDate.getDate() !== lastFriday.getDate() ||
            currentDate.getMonth() !== lastFriday.getMonth()
          ) {
            return;
          }
        }

        let start = null;
        let end = null;
        if (event.allDay) {
          start = new Date(currentDate);
          end = new Date(currentDate);
          end.setHours(23, 59, 59);
        } else {
          const [startHour, startMinute] = event.startTime.split(':').map(Number);
          const [endHour, endMinute] = event.endTime.split(':').map(Number);
          start = new Date(currentDate);
          start.setHours(startHour, startMinute, 0);
          end = new Date(currentDate);
          end.setHours(endHour, endMinute, 0);
          if (end < start) {
            end.setDate(end.getDate() + 1);
          }
        }

        let title = event.title;
        let desc = event.description;
        if (event.isSecondSunday) {
          const weekOfMonth = moment(currentDate).week() - moment(new Date(year, month, 1)).week() + 1;
          if (weekOfMonth === 2) {
            desc += ' Every 2nd Sunday includes Ordinances (baptism, child dedication, Holy communion, etc.).';
          }
        }

        events.push({
          title,
          start,
          end,
          allDay: !!event.allDay,
          desc,
        });
      }
    });
  }

  return events;
}

export default function EventPage() {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(Views.MONTH);
  const [events, setEvents] = useState(() => generateEventsForMonth(new Date()));
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  const onNavigate = useCallback(
    (newDate) => {
      setDate(newDate);
      setEvents(generateEventsForMonth(newDate));
    },
    []
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setView(Views.DAY);
      } else {
        setView(Views.MONTH);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoadingEvents(true);
      try {
        const upcomingRes = await fetch(`${API}/api/events/upcoming`);
        const upcomingData = await upcomingRes.json();
        setUpcomingEvents(upcomingData);

        const pastRes = await fetch(`${API}/api/events/past`);
        const pastData = await pastRes.json();
        setPastEvents(pastData);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoadingEvents(false);
      }
    };
    fetchEvents();
  }, []);

  const eventStyleGetter = (event) => {
    const backgroundColor = '#7A030D';
    const style = {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.85,
      color: 'white',
      border: '0px',
      display: 'block',
      paddingLeft: '10px',
      paddingRight: '10px',
    };
    return { style };
  };

  const formatDate = (dateString) => {
    return moment(dateString).format('MMMM DD, YYYY');
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 py-12 lg:py-20">
      <BreadCrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Events', href: '/events' },
        ]}
      />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#7A030D', fontFamily: 'Georgia, serif' }}>
            Our Events
          </h1>
          <p className="text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>Discover and join our upcoming events</p>
        </div>
        
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 300px)', minHeight: 500 }}
          date={date}
          onNavigate={onNavigate}
          view={view}
          onView={setView}
          views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
          eventPropGetter={eventStyleGetter}
          selectable
          onSelectEvent={(event) => {
            const newTitle = window.prompt('Edit Event Title', event.title);
            if (newTitle && newTitle !== event.title) {
              setEvents((prev) => prev.map(e => e === event ? { ...e, title: newTitle } : e));
            }
          }}
          onSelectSlot={(slotInfo) => {
            const title = window.prompt('New Event name');
            if (title) {
              const newEvent = {
                title,
                start: slotInfo.start,
                end: slotInfo.end,
                desc: '',
              };
              setEvents((prev) => [...prev, newEvent]);
            }
          }}
        />

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#7A030D', fontFamily: 'Georgia, serif' }}>
            Upcoming Events
          </h2>
          {loadingEvents ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#7A030D' }}></div>
            </div>
          ) : upcomingEvents.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-600 text-lg" style={{ fontFamily: 'Georgia, serif' }}>No upcoming events scheduled.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {event.image_path && (
                    <div className="w-full h-80 overflow-hidden">
                      <img
                        src={event.image_path}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#7A030D', fontFamily: 'Georgia, serif' }}>
                      {event.title}
                    </h3>
                    <div className="text-sm font-medium mb-2" style={{ color: '#EB3237' }}>
                      {formatDate(event.date)}
                      {event.time && ` at ${event.time}`}
                    </div>
                    {event.location && (
                      <p className="text-sm text-gray-500 mb-2">📍 {event.location}</p>
                    )}
                    {event.category && (
                      <span className="inline-block px-3 py-1 text-xs rounded-full mb-3" style={{ backgroundColor: '#FDF0D5', color: '#7A030D' }}>
                        {event.category}
                      </span>
                    )}
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Georgia, serif' }}>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 mb-8">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#7A030D', fontFamily: 'Georgia, serif' }}>
            Past Events
          </h2>
          {loadingEvents ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#7A030D' }}></div>
            </div>
          ) : pastEvents.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-600 text-lg" style={{ fontFamily: 'Georgia, serif' }}>No past events to display.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden opacity-90">
                  {event.image_path && (
                    <div className="w-full h-80 overflow-hidden">
                      <img
                        src={event.image_path}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#7A030D', fontFamily: 'Georgia, serif' }}>
                      {event.title}
                    </h3>
                    <div className="text-sm text-gray-500 mb-2">
                      {formatDate(event.date)}
                      {event.time && ` at ${event.time}`}
                    </div>
                    {event.location && (
                      <p className="text-sm text-gray-500 mb-2">📍 {event.location}</p>
                    )}
                    {event.category && (
                      <span className="inline-block px-3 py-1 text-xs rounded-full mb-3" style={{ backgroundColor: '#FDF0D5', color: '#7A030D' }}>
                        {event.category}
                      </span>
                    )}
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Georgia, serif' }}>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
