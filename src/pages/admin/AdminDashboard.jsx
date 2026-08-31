import { useEffect, useState } from 'react';
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import EventsAdminPanel from '../../components/admin/EventsAdminPanel';
import SermonsAdminPanel from '../../components/admin/SermonsAdminPanel';
import { clearAdminToken, getAdminToken } from '../../lib/firebase';

const AdminDashboard = () => {
  const navigate = useNavigate(); const location = useLocation(); const [activeTab, setActiveTab] = useState('events'); const [isAuthorised, setIsAuthorised] = useState(false); const [checking, setChecking] = useState(true);
  useEffect(() => { let live = true; const verify = async () => { const token = await getAdminToken(); if (!token) return navigate('/admin'); const response = await fetch('/api/admin-session', { headers: { Authorization: `Bearer ${token}` } }); if (!live) return; if (!response.ok) { clearAdminToken(); navigate('/admin'); return; } setIsAuthorised(true); setChecking(false); }; verify().catch(() => { clearAdminToken(); navigate('/admin'); }); return () => { live = false; }; }, [navigate]);
  useEffect(() => setActiveTab(location.pathname.includes('sermons') ? 'sermons' : 'events'), [location.pathname]);
  const handleLogout = () => { clearAdminToken(); navigate('/admin'); };
  if (checking || !isAuthorised) return <div className="min-h-screen grid place-items-center bg-[#FDF0D5] text-[#7A030D]">Checking administrator access…</div>;
  return <div className="min-h-screen bg-[#FDF0D5] flex"><div className="w-64 min-h-screen p-6 bg-[#7A030D]"><h1 className="text-2xl font-bold text-white mb-8">Admin Panel</h1><nav className="space-y-2"><Link to="/admin/dashboard/events" className={`block px-4 py-3 rounded-lg text-white transition-colors ${activeTab === 'events' ? 'bg-white/20' : 'hover:bg-white/10'}`}>Events</Link><Link to="/admin/dashboard/sermons" className={`block px-4 py-3 rounded-lg text-white transition-colors ${activeTab === 'sermons' ? 'bg-white/20' : 'hover:bg-white/10'}`}>Sermons</Link></nav><button onClick={handleLogout} className="mt-8 w-full px-4 py-3 rounded-lg text-white bg-red-600 hover:bg-white hover:text-red-600 transition-colors">Logout</button></div><div className="flex-1 p-8"><Routes><Route index element={<EventsAdminPanel />} /><Route path="events" element={<EventsAdminPanel />} /><Route path="sermons" element={<SermonsAdminPanel />} /></Routes></div></div>;
};
export default AdminDashboard;
