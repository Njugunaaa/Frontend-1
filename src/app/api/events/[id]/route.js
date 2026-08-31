import { readEvents, writeEvents } from '../../../../lib/server/jsonbin';
import { requireAdmin } from '../../../../lib/server/firebaseAdmin';

export const dynamic = 'force-dynamic';

function json(data, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
}

function normalise(input, existing) {
  const title = String(input.title || '').trim();
  const startsAt = String(input.startsAt || '').trim();
  if (!title || title.length > 160) throw new Error('Enter an event title of up to 160 characters.');
  if (!startsAt || Number.isNaN(new Date(startsAt).getTime())) throw new Error('Enter a valid event date and time.');
  return { ...existing, title, startsAt, description: String(input.description || '').trim(), location: String(input.location || '').trim(), category: String(input.category || '').trim(), imageUrl: input.imageUrl || '', isPublished: Boolean(input.isPublished), updatedAt: new Date().toISOString() };
}

export async function PATCH(request, { params }) {
  try {
    await requireAdmin(request);
    const { id } = await params;
    const events = await readEvents();
    const index = events.findIndex((event) => event.id === id);
    if (index === -1) return json({ error: 'Event not found.' }, 404);
    events[index] = normalise(await request.json(), events[index]);
    await writeEvents(events);
    return json(events[index]);
  } catch (error) {
    return json({ error: error.message || 'Unable to update the event.' }, /required|access|sign in/i.test(error.message) ? 401 : 500);
  }
}

export async function DELETE(request, { params }) {
  try {
    await requireAdmin(request);
    const { id } = await params;
    const events = await readEvents();
    const remaining = events.filter((event) => event.id !== id);
    if (remaining.length === events.length) return json({ error: 'Event not found.' }, 404);
    await writeEvents(remaining);
    return json({ success: true });
  } catch (error) {
    return json({ error: error.message || 'Unable to delete the event.' }, /required|access|sign in/i.test(error.message) ? 401 : 500);
  }
}
