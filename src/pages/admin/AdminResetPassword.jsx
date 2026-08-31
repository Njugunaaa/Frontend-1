import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export default function AdminResetPassword() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const submit = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.updateUser({ password });
    if (error) return setMessage(error.message);
    navigate('/admin/dashboard');
  };
  return <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FDF0D5' }}><form onSubmit={submit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"><h1 className="text-3xl font-bold mb-6 text-center" style={{ color: '#7A030D' }}>Set new password</h1><input type="password" minLength="8" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="New password" required />{message && <p className="text-sm mt-3">{message}</p>}<button type="submit" className="w-full mt-4 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: '#EB3237' }}>Save password</button></form></div>;
}
