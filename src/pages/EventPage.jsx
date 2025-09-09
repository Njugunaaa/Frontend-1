import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Clock, MapPin, Users, Filter } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';
import BreadCrumb from '../components/BreadCrump';

// Mock events data
const eventsData = {
  '2024-01-25': [
    {
      id: 1,
      title: 'Marketing Workshop #3',
      date: '25',
      month: 'JANUARY',
      time: '09:00 AM',
      type: 'Workshop',
      description: 'What agenda is planned are presented while working based on our 3-year-long experience in closing marketing activities strategy open since the year.',
      color: 'pink'
    }
  ],
  '2024-01-29': [
    {
      id: 2,
      title: 'Marketing Lecture #11',
      date: '29',
      month: 'JANUARY',
      time: '02:00 PM',
      type: 'Seminar',
      description: 'What agenda is planned are presented while working based on our 3-year-long experience in closing marketing activities strategy open since the year.',
      color: 'yellow'
    }
  ],
  '2024-01-26': [
    {
      id: 3,
      title: 'Marketing meetup #4',
      date: '26',
      month: 'JANUARY',
      time: '10:30 AM',
      type: 'Conference',
      description: 'What agenda is planned are presented while working based on our 3-year-long experience in closing marketing activities strategy open since the year.',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Team Meeting',
      date: '26',
      month: 'JANUARY',
      time: '03:00 PM',
      type: 'Meeting',
      description: 'Weekly team sync and project updates.',
      color: 'green'
    }
  ],
  '2024-01-15': [
    {
      id: 5,
      title: 'Product Demo',
      date: '15',
      month: 'JANUARY',
      time: '11:00 AM',
      type: 'Workshop',
      description: 'Product demonstration for stakeholders.',
      color: 'pink'
    },
    {
      id: 6,
      title: 'Sales Review',
      date: '15',
      month: 'JANUARY',
      time: '02:00 PM',
      type: 'Meeting',
      description: 'Monthly sales performance review.',
      color: 'green'
    },
    {
      id: 7,
      title: 'Strategy Session',
      date: '15',
      month: 'JANUARY',
      time: '04:00 PM',
      type: 'Conference',
      description: 'Quarterly strategy planning session.',
      color: 'blue'
    }
  ]
};

const eventTypeColors = {
  Workshop: { color: 'pink', bg: 'bg-pink-50', border: 'border-l-pink-400', text: 'text-pink-600', dot: 'bg-pink-400' },
  Seminar: { color: 'yellow', bg: 'bg-yellow-50', border: 'border-l-yellow-400', text: 'text-yellow-600', dot: 'bg-yellow-400' },
  Conference: { color: 'blue', bg: 'bg-blue-50', border: 'border-l-blue-400', text: 'text-blue-600', dot: 'bg-blue-400' },
  Meeting: { color: 'green', bg: 'bg-green-50', border: 'border-l-green-400', text: 'text-green-600', dot: 'bg-green-400' }
};

const eventTypes = [
  { name: 'Workshop', color: 'bg-pink-400', count: 12 },
  { name: 'Seminar', color: 'bg-yellow-400', count: 8 },
  { name: 'Conference', color: 'bg-blue-400', count: 15 },
  { name: 'Meeting', color: 'bg-green-400', count: 6 }
];

const EventCard = ({ event }) => {
  const typeStyle = eventTypeColors[event.type];
  
  return (
    <div className={`${typeStyle.bg} p-4 border-l-4 ${typeStyle.border} mb-4`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className="text-center">
            <div className={`text-2xl font-bold ${typeStyle.text}`}>{event.date}</div>
            <div className="text-xs text-gray-500 font-medium">{event.month}</div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {event.time}
              </div>
              <span className={`px-2 py-1 text-xs ${typeStyle.text} ${typeStyle.bg} border`}>
                {event.type}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
    </div>
  );
};

const FilterPanel = ({ eventTypes }) => (
  <div className="bg-white shadow-sm border border-gray-200 p-6">
    <div className="flex items-center gap-2 mb-4">
      <Filter className="w-5 h-5 text-gray-600" />
      <h3 className="font-semibold text-gray-900">Filter</h3>
    </div>
    <div className="space-y-3">
      {eventTypes.map((type) => (
        <div key={type.name} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 ${type.color}`}></div>
            <span className="text-sm text-gray-700">{type.name}</span>
          </div>
          <span className="text-sm text-gray-500">{type.count}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function EventPage() {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 0, 25)); // January 25, 2024
  
  const formatDateKey = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };
  
  const selectedDateKey = formatDateKey(selectedDate);
  const selectedDateEvents = eventsData[selectedDateKey] || [];
  
  const formatSelectedDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateKey = formatDateKey(date);
      const dayEvents = eventsData[dateKey];
      
      if (dayEvents && dayEvents.length > 0) {
        // Get unique event types for this day
        const uniqueTypes = [...new Set(dayEvents.map(event => event.type))];
        
        return (
          <div className="flex justify-center items-center gap-1 mt-1">
            {uniqueTypes.slice(0, 3).map((type, index) => {
              const typeStyle = eventTypeColors[type];
              return (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 ${typeStyle.dot} rounded-full`}
                />
              );
            })}
            {uniqueTypes.length > 3 && (
              <div className="text-xs text-gray-500">+</div>
            )}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 py-12 lg:py-20">
      <BreadCrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events" },
        ]}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Events</h1>
          <p className="text-gray-600">
            Discover and manage your upcoming events
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Calendar and Filter */}
          <div className="lg:col-span-1 space-y-6 order-1 lg:order-1">
            {/* Calendar */}
            <div className="bg-white shadow-sm border border-gray-200 p-6">
              <style jsx>{`
                .react-calendar {
                  width: 100%;
                  background: white;
                  border: none;
                  font-family: inherit;
                }
                .react-calendar__navigation {
                  display: flex;
                  height: 44px;
                  margin-bottom: 1em;
                }
                .react-calendar__navigation button {
                  min-width: 44px;
                  background: none;
                  border: none;
                  font-size: 16px;
                  font-weight: 600;
                  color: #374151;
                }
                .react-calendar__navigation button:hover {
                  background-color: #f3f4f6;
                  border-radius: 6px;
                }
                .react-calendar__month-view__weekdays {
                  text-align: center;
                  text-transform: uppercase;
                  font-weight: 500;
                  font-size: 0.75rem;
                  color: #6b7280;
                }
                .react-calendar__month-view__weekdays__weekday {
                  padding: 0.5em;
                }
                .react-calendar__month-view__days__day {
                  position: relative;
                  height: 50px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: flex-start;
                  padding-top: 8px;
                  font-size: 14px;
                  font-weight: 500;
                  border: none;
                  background: none;
                  color: #374151;
                }
                .react-calendar__month-view__days__day:hover {
                  background-color: #f3f4f6;
                }
                .react-calendar__month-view__days__day--neighboringMonth {
                  color: #d1d5db;
                }
                .react-calendar__tile--active {
                  background-color: #3b82f6 !important;
                  color: white !important;
                }
                .react-calendar__tile--now {
                  background-color: #dbeafe;
                  color: #1d4ed8;
                }
                .react-calendar__tile--now:hover {
                  background-color: #bfdbfe;
                }
              `}</style>
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                tileContent={tileContent}
                showNeighboringMonth={true}
                next2Label={null}
                prev2Label={null}
              />
            </div>

            <div className="hidden lg:block">
              <FilterPanel eventTypes={eventTypes} />
            </div>
          </div>

          {/* Right Column - Events Timeline */}
          <div className="lg:col-span-2 order-2 lg:order-2">
            <div className="bg-white shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      Events for {formatSelectedDate(selectedDate)}
                    </h2>
                    <p className="text-gray-600">
                      {selectedDateEvents.length} event
                      {selectedDateEvents.length !== 1 ? "s" : ""} scheduled
                    </p>
                  </div>
                  <div className="w-6 h-6 text-gray-400">📅</div>
                </div>
              </div>

              <div className="p-6">
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDateEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-4xl text-gray-300 mb-4">📅</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No events scheduled
                    </h3>
                    <p className="text-gray-500">
                      There are no events planned for this date.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Panel */}
        <div className="lg:hidden mt-6">
          <FilterPanel eventTypes={eventTypes} />
        </div>
      </div>
    </div>
  );
}