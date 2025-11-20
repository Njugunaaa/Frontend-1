import { useEffect, useState } from 'react';
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import EventsAdminPanel from '../../components/admin/EventsAdminPanel';
import SermonsAdminPanel from '../../components/admin/SermonsAdminPanel';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('events');

  useEffect(() => {
    const auth = localStorage.getItem('elim_admin_auth');
    if (!auth) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('elim_admin_auth');
    localStorage.removeItem('elim_admin_pw');
    navigate('/admin');
  };

  useEffect(() => {
    if (location.pathname.includes('sermons')) {
      setActiveTab('sermons');
    } else {
      setActiveTab('events');
    }
  }, [location]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDF0D5' }}>
      <div className="flex">
        <div className="w-64 min-h-screen p-6" style={{ backgroundColor: '#7A030D' }}>
          <h1 className="text-2xl font-bold text-white mb-8">Admin Panel</h1>
          
          <nav className="space-y-2">
            <Link
              to="/admin/dashboard"
              className={`block px-4 py-3 rounded-lg text-white transition-colors ${
                activeTab === 'events' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              Events
            </Link>
            <Link
              to="/admin/dashboard/sermons"
              className={`block px-4 py-3 rounded-lg text-white transition-colors ${
                activeTab === 'sermons' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              Sermons
            </Link>
          </nav>
          
          <button
            onClick={handleLogout}
            className="mt-8 w-full px-4 py-3 rounded-lg text-white transition-colors"
            style={{ backgroundColor: '#EB3237' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#fff'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#EB3237'}
          >
            Logout
          </button>
        </div>
        
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<EventsAdminPanel />} />
            <Route path="/sermons" element={<SermonsAdminPanel />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
