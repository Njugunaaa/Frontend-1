import { useState, useEffect } from 'react';
import { API } from '../../config/api';

const EventsAdminPanel = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    image: null
  });

  const getAuthHeaders = () => ({
    "X-ADMIN-PASSWORD": String(localStorage.getItem("elim_admin_pw") || "Elim@2025")
  });

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API}/events`);
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("title", formData.title || "");
      fd.append("description", formData.description || "");
      fd.append("date", formData.date || "");
      if (formData.time) fd.append("time", formData.time);
      if (formData.location) fd.append("location", formData.location);
      if (formData.category) fd.append("category", formData.category);
      if (formData.image) fd.append("image", formData.image);

      const url = editingEvent
        ? `${API}/events/${editingEvent.id}`
        : `${API}/events`;

      const response = await fetch(url, {
        method: editingEvent ? "PUT" : "POST",
        headers: getAuthHeaders(),
        body: fd
      });

      if (!response.ok) {
        const err = await response.json();
        alert(`Error: ${err.error || "Unknown error"}`);
        return;
      }

      fetchEvents();
      resetForm();
      setShowModal(false);
    } catch (err) {
      console.error("Error saving event:", err);
      alert("Failed to save event");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      const response = await fetch(`${API}/events/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
      });
      if (response.ok) fetchEvents();
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description || "",
      date: event.date,
      time: event.time || "",
      location: event.location || "",
      category: event.category || "",
      image: null
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      category: '',
      image: null
    });
    setEditingEvent(null);
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700"></div>
    </div>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold" style={{ color: '#7A030D' }}>Events Management</h2>
          <p className="text-gray-600 mt-1">{events.length} events total</p>
        </div>
        <button
          onClick={() => { resetForm(); setShowModal(true); }}
          className="px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
          style={{ backgroundColor: '#EB3237' }}
        >
          + Add Event
        </button>
      </div>

      <div className="grid gap-6">
        {events.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500 text-lg">No events yet. Click "Add Event" to create one.</p>
          </div>
        ) : (
          events.map(event => (
            <div key={event.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex gap-6">
              {event.image_path && (
                <div className="flex-shrink-0">
                  <img
                    src={event.image_path}
                    alt={event.title}
                    className="w-48 h-48 object-cover rounded-lg shadow"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#7A030D' }}>{event.title}</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    📅 {formatDate(event.date)}
                  </span>
                  {event.time && (
                    <span className="flex items-center gap-1">
                      🕐 {event.time}
                    </span>
                  )}
                  {event.location && (
                    <span className="flex items-center gap-1">
                      📍 {event.location}
                    </span>
                  )}
                  {event.category && (
                    <span className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: '#FDF0D5', color: '#7A030D' }}>
                      {event.category}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleEdit(event)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#7A030D' }}>
              {editingEvent ? 'Edit Event' : 'Add New Event'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-medium mb-1 text-gray-700">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Event title"
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-gray-700">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows="4"
                  placeholder="Event description"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1 text-gray-700">Date *</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1 text-gray-700">Time</label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium mb-1 text-gray-700">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Event location"
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-gray-700">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="e.g., Conference, Service, Youth"
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-gray-700">
                  Event Image {editingEvent && "(Leave empty to keep current image)"}
                </label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
                {editingEvent?.image_path && (
                  <p className="text-sm text-gray-500 mt-1">Current image: {editingEvent.image_path.split('/').pop()}</p>
                )}
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-colors disabled:opacity-50"
                  style={{ backgroundColor: '#EB3237' }}
                >
                  {submitting ? 'Saving...' : (editingEvent ? 'Update Event' : 'Create Event')}
                </button>
                <button
                  type="button"
                  onClick={() => { setShowModal(false); resetForm(); }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsAdminPanel;
