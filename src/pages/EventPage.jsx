
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BreadCrumb from '../components/BreadCrump';
import html2canvas from 'html2canvas';

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

// Random main church events from now to June 2026, with 5 events per month
const mainChurchEvents = [
  { title: 'New Year Service', date: '2024-01-01' },
  { title: 'Prayer Meeting', date: '2024-01-05' },
  { title: 'Bible Study', date: '2024-01-12' },
  { title: 'Youth Fellowship', date: '2024-01-19' },
  { title: 'Community Outreach', date: '2024-01-26' },
  { title: 'Easter Sunday', date: '2024-03-31' },
  { title: 'Lent Service', date: '2024-03-10' },
  { title: 'Spring Revival', date: '2024-03-15' },
  { title: 'Easter Preparation', date: '2024-03-20' },
  { title: 'Holy Week', date: '2024-03-25' },
  { title: 'Church Anniversary', date: '2024-05-15' },
  { title: 'Mother\'s Day', date: '2024-05-12' },
  { title: 'Spring Picnic', date: '2024-05-18' },
  { title: 'Youth Retreat', date: '2024-05-22' },
  { title: 'Family Day', date: '2024-05-28' },
  { title: 'Youth Camp', date: '2024-07-20' },
  { title: 'Summer BBQ', date: '2024-07-15' },
  { title: 'Vacation Bible School', date: '2024-07-25' },
  { title: 'Beach Outreach', date: '2024-07-30' },
  { title: 'Independence Day', date: '2024-07-04' },
  { title: 'Missionary Conference', date: '2024-09-10' },
  { title: 'Back to School', date: '2024-09-05' },
  { title: 'Harvest Festival', date: '2024-09-15' },
  { title: 'Labor Day', date: '2024-09-02' },
  { title: 'Fall Retreat', date: '2024-09-20' },
  { title: 'Christmas Service', date: '2024-12-25' },
  { title: 'Advent Service', date: '2024-12-01' },
  { title: 'Carol Singing', date: '2024-12-10' },
  { title: 'Christmas Eve', date: '2024-12-24' },
  { title: 'New Year Eve', date: '2024-12-31' },
  { title: 'New Year Service', date: '2025-01-01' },
  { title: 'Epiphany', date: '2025-01-06' },
  { title: 'Martin Luther King Day', date: '2025-01-20' },
  { title: 'Winter Prayer', date: '2025-01-15' },
  { title: 'Snow Day Event', date: '2025-01-25' },
  { title: 'Easter Sunday', date: '2025-04-20' },
  { title: 'Palm Sunday', date: '2025-04-13' },
  { title: 'Good Friday', date: '2025-04-18' },
  { title: 'Easter Egg Hunt', date: '2025-04-21' },
  { title: 'Spring Cleaning', date: '2025-04-25' },
  { title: 'Church Anniversary', date: '2025-05-15' },
  { title: 'Memorial Day', date: '2025-05-26' },
  { title: 'Pentecost', date: '2025-05-18' },
  { title: 'Mother\'s Day', date: '2025-05-11' },
  { title: 'Ascension Day', date: '2025-05-29' },
  { title: 'Youth Camp', date: '2025-07-20' },
  { title: 'Fourth of July', date: '2025-07-04' },
  { title: 'Summer Mission', date: '2025-07-15' },
  { title: 'Beach Day', date: '2025-07-25' },
  { title: 'Campfire Night', date: '2025-07-30' },
  { title: 'Missionary Conference', date: '2025-09-10' },
  { title: 'Rosh Hashanah', date: '2025-09-15' },
  { title: 'Yom Kippur', date: '2025-09-24' },
  { title: 'Labor Day', date: '2025-09-01' },
  { title: 'Fall Festival', date: '2025-09-20' },
  { title: 'Christmas Service', date: '2025-12-25' },
  { title: 'Hanukkah', date: '2025-12-14' },
  { title: 'Kwanzaa', date: '2025-12-26' },
  { title: 'Winter Solstice', date: '2025-12-21' },
  { title: 'New Year Eve', date: '2025-12-31' },
  { title: 'New Year Service', date: '2026-01-01' },
  { title: 'Epiphany', date: '2026-01-06' },
  { title: 'Three Kings Day', date: '2026-01-06' },
  { title: 'Martin Luther King Day', date: '2026-01-19' },
  { title: 'Groundhog Day', date: '2026-02-02' },
  { title: 'Easter Sunday', date: '2026-04-06' },
  { title: 'Ash Wednesday', date: '2026-02-18' },
  { title: 'Lent Begins', date: '2026-02-18' },
  { title: 'St. Patrick\'s Day', date: '2026-03-17' },
  { title: 'Passover', date: '2026-04-14' },
  { title: 'Church Anniversary', date: '2026-05-15' },
  { title: 'Cinco de Mayo', date: '2026-05-05' },
  { title: 'Mother\'s Day', date: '2026-05-10' },
  { title: 'Memorial Day', date: '2026-05-25' },
  { title: 'Pentecost', date: '2026-05-25' },
];

  // Static calendar component
  function StaticCalendar({ events }) {
    // Sort all events by date
    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Colors from index.css, lighter shades
    const colors = [
      'rgba(122, 3, 13, 0.3)', // primary
      'rgba(235, 50, 55, 0.3)', // secondary
      'rgba(17, 121, 73, 0.3)', // green
      'rgba(101, 106, 29, 0.3)', // huegreen
      'rgba(62, 61, 143, 0.3)', // blue
    ];

    // Function to get color based on title
    const getColor = (title) => {
      let hash = 0;
      for (let i = 0; i < title.length; i++) {
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
      }
      return colors[Math.abs(hash) % colors.length];
    };

    // Ref for download
    const calendarRef = useRef(null);

    // Download calendar as image
    const downloadCalendar = () => {
      if (calendarRef.current) {
        html2canvas(calendarRef.current).then((canvas) => {
          const link = document.createElement('a');
          link.download = 'church-events-calendar.png';
          link.href = canvas.toDataURL();
          link.click();
        });
      }
    };

    return (
      <div className="mt-12 max-w-7xl mx-auto p-4 border rounded shadow bg-white" ref={calendarRef}>
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'serif' }}>
          Main Church Events Calendar
        </h2>
        {sortedEvents.length === 0 && <p>No events available.</p>}
        <div className="grid grid-cols-7 gap-1">
          {sortedEvents.map((event, index) => {
            const d = new Date(event.date);
            const day = d.getDate();
            const month = moment(d).format('MMM');
            const bgColor = getColor(event.title);
            return (
              <div
                key={index}
                className="border-dotted border-2 rounded p-2 text-black text-center min-h-[60px] flex flex-col justify-center"
                style={{ backgroundColor: bgColor, borderColor: 'rgba(156, 163, 175, 0.5)' }}
              >
                <div className="font-bold">{day} {month}</div>
                <div className="text-xs mt-1">{event.title}</div>
              </div>
            );
          })}
        </div>
        <button
          onClick={downloadCalendar}
          className="mt-4 px-4 py-2 bg-red-900 text-white rounded hover:bg-red-700 transition"
        >
          Download Calendar
        </button>
      </div>
    );
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
        {/* Static calendar added below */}
        <StaticCalendar events={mainChurchEvents} />
      </div>
    </div>
  );
}


