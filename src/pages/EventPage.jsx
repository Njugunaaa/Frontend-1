import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BreadCrumb from '../components/BreadCrump';

// Setup localizer with moment
const localizer = momentLocalizer(moment);

// Weekly recurring events data
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

// Generate events for the current visible month
function generateEventsForMonth(date) {
  const events = [];
  const year = date.getFullYear();
  const month = date.getMonth();

  // Iterate days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(year, month, day);
    const dayOfWeek = currentDate.getDay();

    weeklyEvents.forEach((event) => {
      if (event.daysOfWeek.includes(dayOfWeek)) {
        // Handle last Friday special event
        if (event.isLastFriday) {
          const lastFriday = getLastFriday(year, month);
          if (
            currentDate.getDate() !== lastFriday.getDate() ||
            currentDate.getMonth() !== lastFriday.getMonth()
          ) {
            return; // skip if not last Friday
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
          // Handle overnight events (end time less than start time)
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

  // Update events when date changes (month changes)
  const onNavigate = useCallback(
    (newDate) => {
      setDate(newDate);
      setEvents(generateEventsForMonth(newDate));
    },
    []
  );

  // Responsive view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setView(Views.DAY);
      } else {
        setView(Views.MONTH);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // initial call
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Event style getter for custom colors
  const eventStyleGetter = (event) => {
    const backgroundColor = '#7A030D'; // Primary color from index.css
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
    return {
      style,
    };
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>
            Our Events
          </h1>
          <p className="text-gray-600">Discover and manage your upcoming events</p>
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
      </div>
    </div>
  );
}


