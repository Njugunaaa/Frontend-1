import { requireAdmin } from '../../../lib/server/firebaseAdmin';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    await requireAdmin(request);
    return Response.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    return Response.json(
      { error: error.message || 'Administrator access is required.' },
      { status: 401, headers: { 'Cache-Control': 'no-store' } },
    );
  }
}
