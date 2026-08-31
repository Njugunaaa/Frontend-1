import { getAdminToken } from './firebase';

async function request(path, options = {}) {
  const token = await getAdminToken();
  const response = await fetch(path, { ...options, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers } });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || 'The request could not be completed.');
  return body;
}
export const getPublishedSermons = () => request('/api/sermons');
export const getAdminSermons = () => request('/api/sermons?scope=admin');
export const createSermon = (sermon) => request('/api/sermons', { method: 'POST', body: JSON.stringify(sermon) });
export const updateSermon = (id, sermon) => request(`/api/sermons/${id}`, { method: 'PATCH', body: JSON.stringify(sermon) });
export const deleteSermon = (id) => request(`/api/sermons/${id}`, { method: 'DELETE' });
