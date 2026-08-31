import { supabase } from './supabase';

const ALLOWED_EVENT_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);
const MAX_EVENT_IMAGE_BYTES = 5 * 1024 * 1024;

const formatLocalDate = (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatLocalTime = (value) => {
  const date = new Date(value);
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
};

const requireSupabase = () => {
  if (!supabase) throw new Error('Supabase is not configured. Add the values in .env.local first.');
  return supabase;
};

const normaliseEvent = (event) => ({
  ...event,
  image_path: event.image_url,
  date: event.starts_at ? formatLocalDate(event.starts_at) : '',
  time: event.starts_at ? formatLocalTime(event.starts_at) : '',
  start: new Date(event.starts_at),
  end: new Date(event.ends_at || event.starts_at),
});

export async function getPublishedEvents() {
  const { data, error } = await requireSupabase()
    .from('events')
    .select('*')
    .eq('is_published', true)
    .order('starts_at', { ascending: true });
  if (error) throw error;
  return data.map(normaliseEvent);
}

export async function getAdminEvents() {
  const { data, error } = await requireSupabase().from('events').select('*').order('starts_at', { ascending: true });
  if (error) throw error;
  return data.map(normaliseEvent);
}

export async function getFeaturedEvent() {
  const { data, error } = await requireSupabase()
    .from('events')
    .select('*')
    .eq('is_published', true)
    .eq('is_featured', true)
    .gte('starts_at', new Date().toISOString())
    .order('starts_at', { ascending: true })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return data ? normaliseEvent(data) : null;
}

export async function saveEvent(values, id) {
  const db = requireSupabase();
  const payload = { ...values, updated_at: new Date().toISOString() };
  const result = id
    ? await db.from('events').update(payload).eq('id', id).select().single()
    : await db.from('events').insert(payload).select().single();
  if (result.error) throw result.error;
  return normaliseEvent(result.data);
}

export async function deleteEvent(id) {
  const { error } = await requireSupabase().from('events').delete().eq('id', id);
  if (error) throw error;
}

export async function uploadEventImage(file) {
  if (!file) return null;
  if (!ALLOWED_EVENT_IMAGE_TYPES.has(file.type)) {
    throw new Error('Use a JPEG, PNG, or WebP image for the event.');
  }
  if (file.size > MAX_EVENT_IMAGE_BYTES) {
    throw new Error('Event images must be 5 MB or smaller.');
  }
  const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const path = `${crypto.randomUUID()}.${extension}`;
  const db = requireSupabase();
  const { error } = await db.storage.from('event-images').upload(path, file, { cacheControl: '3600', upsert: false });
  if (error) throw error;
  return db.storage.from('event-images').getPublicUrl(path).data.publicUrl;
}

export async function getPublishedSermons() {
  const { data, error } = await requireSupabase()
    .from('sermons')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function getAdminSermons() {
  const { data, error } = await requireSupabase().from('sermons').select('*').order('published_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function saveSermon(values, id) {
  const db = requireSupabase();
  const result = id
    ? await db.from('sermons').update(values).eq('id', id).select().single()
    : await db.from('sermons').insert(values).select().single();
  if (result.error) throw result.error;
  return result.data;
}

export async function deleteSermon(id) {
  const { error } = await requireSupabase().from('sermons').delete().eq('id', id);
  if (error) throw error;
}

export function subscribeToContent(onChange) {
  if (!supabase) return () => {};
  const db = requireSupabase();
  const channel = db.channel('public-content-changes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'events' }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'sermons' }, onChange)
    .subscribe();
  return () => db.removeChannel(channel);
}
