import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { API } from '../config/api';

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
      <div className="min-h-screen pt-24" style={{ backgroundColor: '#FDF0D5' }}>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#7A030D', fontFamily: 'Georgia, serif' }}>
            Sermons & Messages
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Georgia, serif' }}>
            Watch and be blessed by powerful messages from our pastors and guest speakers
          </p>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2" style={{ borderColor: '#7A030D' }}></div>
            </div>
          ) : sermons.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl shadow-md max-w-md mx-auto">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-xl text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>No sermons available at the moment.</p>
              <p className="text-gray-500 mt-2">Check back soon for new messages!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sermons.map((sermon) => {
                const videoId = extractYouTubeId(sermon.media_url);
                
                return (
                  <div key={sermon.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {videoId ? (
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
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-gray-100 flex items-center justify-center">
                        <span className="text-6xl">🎤</span>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#7A030D', fontFamily: 'Georgia, serif' }}>
                        {sermon.title}
                      </h3>
                      
                      {sermon.speaker_or_leader && (
                        <p className="text-sm font-medium mb-2" style={{ color: '#EB3237' }}>
                          {sermon.speaker_or_leader}
                        </p>
                      )}
                      
                      <p className="text-sm text-gray-500 mb-3">
                        {formatDate(sermon.date)}
                      </p>
                      
                      {sermon.description && (
                        <p className="text-gray-600 text-sm line-clamp-3" style={{ fontFamily: 'Georgia, serif' }}>
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
      <Footer />
    </div>
  );
};

export default SermonsPage;
