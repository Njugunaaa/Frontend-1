import { useEffect, useState } from 'react';
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import EventsAdminPanel from '../../components/admin/EventsAdminPanel';
import SermonsAdminPanel from '../../components/admin/SermonsAdminPanel';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('events');

  // Ensure password is stored for API requests
  useEffect(() => {
    if (!localStorage.getItem('elim_admin_pw')) {
      localStorage.setItem('elim_admin_pw', 'Elim@2025'); // your correct admin password
    }
  }, []);

  // Check if admin is logged in
  useEffect(() => {
    const auth = localStorage.getItem('elim_admin_auth');
    if (!auth) {
      navigate('/admin'); // redirect to login page if not authenticated
    }
  }, [navigate]);

  // Set active tab based on URL
  useEffect(() => {
    if (location.pathname.includes('sermons')) {
      setActiveTab('sermons');
    } else {
      setActiveTab('events');
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('elim_admin_auth');
    localStorage.removeItem('elim_admin_pw');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-[#FDF0D5] flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen p-6 bg-[#7A030D]">
        <h1 className="text-2xl font-bold text-white mb-8">Admin Panel</h1>

        <nav className="space-y-2">
          <Link
            to=""
            className={`block px-4 py-3 rounded-lg text-white transition-colors ${
              activeTab === 'events' ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
          >
            Events
          </Link>
          <Link
            to="sermons"
            className={`block px-4 py-3 rounded-lg text-white transition-colors ${
              activeTab === 'sermons' ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
          >
            Sermons
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-8 w-full px-4 py-3 rounded-lg text-white bg-red-600 hover:bg-white hover:text-red-600 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Routes>
          {/* Default route shows Events */}
          <Route index element={<EventsAdminPanel />} />
          {/* Sermons route */}
          <Route path="sermons" element={<SermonsAdminPanel />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
