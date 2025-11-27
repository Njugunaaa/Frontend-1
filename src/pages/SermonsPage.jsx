import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const API = 'https://elim-backend.onrender.com';

const SermonsPage = () => {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSermons();
  }, []);

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

  return (
    <div>
      <Nav />
      <br />
      <br />
      <div className="min-h-screen" style={{ backgroundColor: '#FDF0D5' }}>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-center mb-4" style={{ color: '#7A030D' }}>
            Sermons & Messages
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Watch and be blessed by powerful messages from our pastors and guest speakers
          </p>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl">Loading sermons...</p>
            </div>
          ) : sermons.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No sermons available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sermons.map((sermon) => {
                const videoId = extractYouTubeId(sermon.media_url);
                
                return (
                  <div key={sermon.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {videoId && (
                      <div className="aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={sermon.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                          playsInline
                        />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#7A030D' }}>
                        {sermon.title}
                      </h3>
                      
                      {sermon.speaker_or_leader && (
                        <p className="text-sm mb-2" style={{ color: '#EB3237' }}>
                          {sermon.speaker_or_leader}
                        </p>
                      )}
                      
                      <p className="text-sm text-gray-500 mb-3">
                        {formatDate(sermon.date)}
                      </p>
                      
                      {sermon.description && (
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {sermon.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SermonsPage;
