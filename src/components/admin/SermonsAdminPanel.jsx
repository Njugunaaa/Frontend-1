import { useState, useEffect } from 'react';

const API = 'https://elim-backend.onrender.com';

const SermonsAdminPanel = () => {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingSermon, setEditingSermon] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    speaker_or_leader: '',
    date: '',
    description: '',
    media_url: ''
  });

  const getAuthHeaders = () => {
  return {
    'X-ADMIN-PASSWORD': 'Elim@2025',
    'Content-Type': 'application/json'
  };
};


  const fetchSermons = async () => {
    try {
      const response = await fetch(`${API}/api/sermons`);
      const data = await response.json();
      setSermons(data);
    } catch (error) {
      console.error('Error fetching sermons:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSermons();
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  const url = editingSermon 
    ? `${API}/api/sermons/${editingSermon.id}`
    : `${API}/api/sermons`;

  const payload = {
    title: formData.title,
    speaker_or_leader: formData.speaker_or_leader || '',
    date: formData.date,
    description: formData.description || '',
    media_url: formData.media_url || ''
  };

  try {
    const response = await fetch(url, {
      method: editingSermon ? 'PUT' : 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      fetchSermons();
      resetForm();
      setShowModal(false);
    } else {
      const error = await response.json();
      alert(`Error: ${error.error}`);
    }
  } catch (error) {
    console.error('Error saving sermon:', error);
    alert('Failed to save sermon');
  }
};


  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this sermon?')) return;

    try {
      const response = await fetch(`${API}/api/sermons/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      if (response.ok) {
        fetchSermons();
      } else {
        alert('Failed to delete sermon');
      }
    } catch (error) {
      console.error('Error deleting sermon:', error);
    }
  };

  const handleEdit = (sermon) => {
    setEditingSermon(sermon);
    setFormData({
      title: sermon.title,
      speaker_or_leader: sermon.speaker_or_leader || '',
      date: sermon.date,
      description: sermon.description || '',
      media_url: sermon.media_url || ''
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      speaker_or_leader: '',
      date: '',
      description: '',
      media_url: ''
    });
    setEditingSermon(null);
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold" style={{ color: '#7A030D' }}>Sermons Management</h2>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="px-6 py-2 rounded-lg font-semibold text-white"
          style={{ backgroundColor: '#EB3237' }}
        >
          Add Sermon
        </button>
      </div>

      <div className="grid gap-4">
        {sermons.map((sermon) => (
          <div key={sermon.id} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#7A030D' }}>{sermon.title}</h3>
              <p className="text-gray-600 mb-2">{sermon.description}</p>
              <div className="text-sm text-gray-500">
                <p>Speaker: {sermon.speaker_or_leader}</p>
                <p>Date: {sermon.date}</p>
                {sermon.media_url && <p className="text-blue-600 truncate">Video: {sermon.media_url}</p>}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(sermon)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(sermon.id)}
                className="px-4 py-2 text-white rounded"
                style={{ backgroundColor: '#EB3237' }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#7A030D' }}>
              {editingSermon ? 'Edit Sermon' : 'Add New Sermon'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Speaker/Leader</label>
                <input
                  type="text"
                  value={formData.speaker_or_leader}
                  onChange={(e) => setFormData({ ...formData, speaker_or_leader: e.target.value })}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Date *</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border rounded"
                  rows="4"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">YouTube URL</label>
                <input
                  type="url"
                  value={formData.media_url}
                  onChange={(e) => setFormData({ ...formData, media_url: e.target.value })}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="px-6 py-2 rounded font-semibold text-white"
                  style={{ backgroundColor: '#EB3237' }}
                >
                  {editingSermon ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="px-6 py-2 bg-gray-500 text-white rounded font-semibold"
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

export default SermonsAdminPanel;
