import { getAdminToken } from './firebase';

async function request(path, options = {}) {
  const token = await getAdminToken();
  const response = await fetch(path, {
    ...options,
    headers: {
      ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || 'The request could not be completed.');
  return body;
}

export const getPublishedEvents = () => request('/api/events');
export const getAdminEvents = () => request('/api/events?scope=admin');
export const createEvent = (event) => request('/api/events', { method: 'POST', body: JSON.stringify(event) });
export const updateEvent = (id, event) => request(`/api/events/${id}`, { method: 'PATCH', body: JSON.stringify(event) });
export const deleteEvent = (id) => request(`/api/events/${id}`, { method: 'DELETE' });

export async function uploadEventImage(file) {
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) throw new Error('Use a JPG, PNG, or WebP image.');
  if (file.size > 5 * 1024 * 1024) throw new Error('Use an image smaller than 5 MB.');
  const signature = await request('/api/event-images/sign', { method: 'POST', body: JSON.stringify({}) });
  const data = new FormData();
  data.set('file', file);
  data.set('api_key', signature.apiKey);
  data.set('timestamp', String(signature.timestamp));
  data.set('signature', signature.signature);
  data.set('folder', signature.folder);
  const response = await fetch(`https://api.cloudinary.com/v1_1/${signature.cloudName}/image/upload`, { method: 'POST', body: data });
  const uploaded = await response.json();
  if (!response.ok) throw new Error(uploaded.error?.message || 'Image upload failed.');
  return uploaded.secure_url;
}
