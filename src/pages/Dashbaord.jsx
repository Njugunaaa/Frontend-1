import React, { useState } from 'react';
import PrayerRequestPopup from '../components/PrayerRequestPopup';

function Dashbaord() {
  const [events, setEvents] = useState([]);
  const [prayerOfTheDay, setPrayerOfTheDay] = useState('');
  const [prayerRequests, setPrayerRequests] = useState([
    { id: 1, email: 'john@example.com', message: 'Please pray for my health' },
    { id: 2, email: 'mary@example.com', message: 'Prayer for family' },
    { id: 3, email: 'peter@example.com', message: 'Thanksgiving prayer' }
  ]);
  const [newEvent, setNewEvent] = useState({ name: '', date: '', time: '', poster: null });
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleAddEvent = () => {
    if (newEvent.name && newEvent.date && newEvent.time) {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
      setNewEvent({ name: '', date: '', time: '', poster: null });
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleFileChange = (e) => {
    setNewEvent({ ...newEvent, poster: e.target.files[0] });
  };

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
  };

  const closePopup = () => {
    setSelectedRequest(null);
  };

  return (
    <section>
      <nav className="fixed top-0 z-50 w-full bg-primary border-b border-secondary dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-secondary rounded-lg sm:hidden hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img
                  src="/src/assets/logo-white.svg"
                  className="h-8"
                  alt="Church Logo"
                />
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-secondary rounded-full focus:ring-4 focus:ring-secondary"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-secondary rounded-sm shadow-sm"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-primary" role="none">
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-primary truncate"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar with only one nav item */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-blue border-r border-secondary sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-blue">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/dashboard"
                className="flex items-center p-2 text-white rounded-lg hover:bg-secondary group"
              >
                <svg
                  className="w-5 h-5 text-secondary-600 hover:text-secondary-500 transition duration-75 group-hover:text-secondary-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Event Management Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-4">Event Management</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
                  <input
                    type="text"
                    value={newEvent.name}
                    onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter event name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Poster</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    accept="image/*"
                  />
                </div>
                <button
                  onClick={handleAddEvent}
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Add Event
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-primary mb-2">Upcoming Events</h3>
                <div className="space-y-2">
                  {events.map((event) => (
                    <div key={event.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                      <div>
                        <p className="font-medium text-primary">{event.name}</p>
                        <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteEvent(event.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prayer of the Day Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-4">Prayer of the Day</h2>
              <div className="space-y-4">
                <textarea
                  value={prayerOfTheDay}
                  onChange={(e) => setPrayerOfTheDay(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
                  placeholder="Enter today's prayer..."
                />
                <button className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary/90 transition-colors">
                  Update Prayer
                </button>
              </div>
              {prayerOfTheDay && (
                <div className="mt-4 p-4 bg-secondary/10 rounded-md">
                  <h3 className="font-semibold text-primary mb-2">Today's Prayer:</h3>
                  <p className="text-gray-700">{prayerOfTheDay}</p>
                </div>
              )}
            </div>

            {/* Prayer Requests Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-4">Prayer Requests</h2>
              <div className="space-y-3">
                {prayerRequests.map((request) => (
                  <div key={request.id} className="border border-gray-200 rounded-md p-3 cursor-pointer" onClick={() => handleRequestClick(request)}>
                    <p className="font-medium text-primary">{request.email}</p>
                    <p className="text-gray-700 text-sm mt-1">{request.message}</p>
                  </div>
                ))}
              </div>
              {prayerRequests.length === 0 && (
                <p className="text-gray-500 text-center mt-4">No prayer requests at this time.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <PrayerRequestPopup request={selectedRequest} onClose={closePopup} />
    </section>
  );
}

export default Dashbaord;
