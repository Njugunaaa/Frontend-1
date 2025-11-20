import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (password === 'Elim@2025') {
      localStorage.setItem('elim_admin_auth', '1');
      localStorage.setItem('elim_admin_pw', password);
      navigate('/admin/dashboard');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FDF0D5' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: '#7A030D' }}>
          Admin Login
        </h1>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ focusRingColor: '#EB3237' }}
              placeholder="Enter admin password"
              required
            />
          </div>
          
          {error && (
            <p className="text-red-600 text-sm mb-4">{error}</p>
          )}
          
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white transition-colors"
            style={{ backgroundColor: '#EB3237' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#7A030D'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#EB3237'}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
