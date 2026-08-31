import { randomUUID } from 'node:crypto';
import { readEvents, writeEvents } from '../../../lib/server/jsonbin';
import { requireAdmin } from '../../../lib/server/firebaseAdmin';

export const dynamic = 'force-dynamic';

function json(data, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
}

function errorResponse(error, fallback = 'Unable to process the event request.') {
  const status = /required|access|sign in/i.test(error.message) ? 401 : 500;
  return json({ error: error.message || fallback }, status);
}

function validEvent(input, existing = {}) {
  const title = String(input.title || '').trim();
  const startsAt = String(input.startsAt || '').trim();
  if (!title || title.length > 160) throw new Error('Enter an event title of up to 160 characters.');
  if (!startsAt || Number.isNaN(new Date(startsAt).getTime())) throw new Error('Enter a valid event date and time.');
  return {
    ...existing,
    title,
    description: String(input.description || '').trim(),
    startsAt,
    location: String(input.location || '').trim(),
    category: String(input.category || '').trim(),
    imageUrl: input.imageUrl || existing.imageUrl || '',
    isPublished: Boolean(input.isPublished),
    updatedAt: new Date().toISOString(),
  };
}

export async function GET(request) {
  try {
    const events = await readEvents();
    const isAdminRequest = new URL(request.url).searchParams.get('scope') === 'admin';
    if (isAdminRequest) await requireAdmin(request);
    const visible = isAdminRequest ? events : events.filter((event) => event.isPublished);
    return json(visible.sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt)));
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request) {
  try {
    await requireAdmin(request);
    const events = await readEvents();
    const event = validEvent(await request.json(), {
      id: randomUUID(), createdAt: new Date().toISOString(),
    });
    events.push(event);
    await writeEvents(events);
    return json(event, 201);
  } catch (error) {
    return errorResponse(error);
  }
}
