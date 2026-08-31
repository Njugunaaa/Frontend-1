import { v2 as cloudinary } from 'cloudinary';
import { requireAdmin } from '../../../../lib/server/firebaseAdmin';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    await requireAdmin(request);
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const missing = [
      !cloudName && 'CLOUDINARY_CLOUD_NAME',
      !apiKey && 'CLOUDINARY_API_KEY',
      !apiSecret && 'CLOUDINARY_API_SECRET',
    ].filter(Boolean);
    if (missing.length) throw new Error(`Cloudinary configuration is missing: ${missing.join(', ')}.`);
    const timestamp = Math.floor(Date.now() / 1000);
    const folder = process.env.CLOUDINARY_EVENT_FOLDER || 'church-event-posters';
    const signature = cloudinary.utils.api_sign_request({ folder, timestamp }, apiSecret);
    return Response.json({ cloudName, apiKey, timestamp, folder, signature });
  } catch (error) {
    return Response.json({ error: error.message || 'Unable to prepare image upload.' }, { status: /required|access|sign in/i.test(error.message) ? 401 : 500 });
  }
}
