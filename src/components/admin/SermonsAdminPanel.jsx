import { useState, useEffect } from 'react';
import { API } from '../../config/api';

const SermonsAdminPanel = () => {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingSermon, setEditingSermon] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    speaker_or_leader: '',
    date: '',
    description: '',
    media_url: ''
  });

  const getAuthHeaders = () => ({
    'X-ADMIN-PASSWORD': localStorage.getItem('elim_admin_pw') || 'Elim@2025',
    'Content-Type': 'application/json'
  });

  const fetchSermons = async () => {
    try {
      const response = await fetch(`${API}/sermons`);
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
    setSubmitting(true);
    
    const url = editingSermon 
      ? `${API}/sermons/${editingSermon.id}`
      : `${API}/sermons`;

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
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this sermon?')) return;

    try {
      const response = await fetch(`${API}/sermons/${id}`, {
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

  const extractYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
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
          <h2 className="text-3xl font-bold" style={{ color: '#7A030D' }}>Sermons Management</h2>
          <p className="text-gray-600 mt-1">{sermons.length} sermons total</p>
        </div>
        <button
          onClick={() => { resetForm(); setShowModal(true); }}
          className="px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
          style={{ backgroundColor: '#EB3237' }}
        >
          + Add Sermon
        </button>
      </div>

      <div className="grid gap-6">
        {sermons.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500 text-lg">No sermons yet. Click "Add Sermon" to create one.</p>
          </div>
        ) : (
          sermons.map((sermon) => {
            const videoId = extractYouTubeId(sermon.media_url);
            return (
              <div key={sermon.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex gap-6">
                {videoId && (
                  <div className="flex-shrink-0 w-64">
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/mqdefault.webp`}
                      alt={sermon.title}
                      className="w-full h-36 object-cover rounded-lg shadow"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#7A030D' }}>{sermon.title}</h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">{sermon.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    {sermon.speaker_or_leader && (
                      <span className="flex items-center gap-1" style={{ color: '#EB3237' }}>
                        🎤 {sermon.speaker_or_leader}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      📅 {formatDate(sermon.date)}
                    </span>
                    {sermon.media_url && (
                      <a 
                        href={sermon.media_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        🎬 Watch Video
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleEdit(sermon)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(sermon.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#7A030D' }}>
              {editingSermon ? 'Edit Sermon' : 'Add New Sermon'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-medium mb-1 text-gray-700">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Sermon title"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700">Speaker/Leader</label>
                <input
                  type="text"
                  value={formData.speaker_or_leader}
                  onChange={(e) => setFormData({ ...formData, speaker_or_leader: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="e.g., Pastor John Doe"
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700">Date *</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows="4"
                  placeholder="Brief description of the sermon"
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700">YouTube URL</label>
                <input
                  type="url"
                  value={formData.media_url}
                  onChange={(e) => setFormData({ ...formData, media_url: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-colors disabled:opacity-50"
                  style={{ backgroundColor: '#EB3237' }}
                >
                  {submitting ? 'Saving...' : (editingSermon ? 'Update Sermon' : 'Create Sermon')}
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

export default SermonsAdminPanel;
