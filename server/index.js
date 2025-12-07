import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Elim@2025';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const JSONBIN_BASE_URL = 'https://api.jsonbin.io/v3/b';
const JSONBIN_MASTER_KEY = process.env.JSONBIN_MASTER_KEY;
const JSONBIN_EVENTS_BIN_ID = process.env.JSONBIN_EVENTS_BIN_ID;
const JSONBIN_SERMONS_BIN_ID = process.env.JSONBIN_SERMONS_BIN_ID;

app.use(cors());
app.use(express.json());

const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }
});

const verifyAdmin = (req, res, next) => {
  const password = req.headers['x-admin-password'];
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

async function getEventsFromBin() {
  try {
    const response = await fetch(`${JSONBIN_BASE_URL}/${JSONBIN_EVENTS_BIN_ID}/latest`, {
      headers: { 'X-Master-Key': JSONBIN_MASTER_KEY },
    });
    const data = await response.json();
    const record = data.record || {};
    return Array.isArray(record) ? record : (record.events || []);
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

async function getSermonsFromBin() {
  try {
    const response = await fetch(`${JSONBIN_BASE_URL}/${JSONBIN_SERMONS_BIN_ID}/latest`, {
      headers: { 'X-Master-Key': JSONBIN_MASTER_KEY },
    });
    const data = await response.json();
    const record = data.record || {};
    return Array.isArray(record) ? record : (record.sermons || []);
  } catch (error) {
    console.error('Error fetching sermons:', error);
    return [];
  }
}

async function updateEventsBin(events) {
  const response = await fetch(`${JSONBIN_BASE_URL}/${JSONBIN_EVENTS_BIN_ID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': JSONBIN_MASTER_KEY,
    },
    body: JSON.stringify({ events }),
  });
  return await response.json();
}

async function updateSermonsBin(sermons) {
  const response = await fetch(`${JSONBIN_BASE_URL}/${JSONBIN_SERMONS_BIN_ID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': JSONBIN_MASTER_KEY,
    },
    body: JSON.stringify({ sermons }),
  });
  return await response.json();
}

async function uploadToCloudinary(buffer, filename) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'elim-church-events',
        public_id: `event_${Date.now()}`,
        resource_type: 'image',
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    uploadStream.end(buffer);
  });
}

app.get('/api/events', async (req, res) => {
  try {
    const events = await getEventsFromBin();
    const sortedEvents = events.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json(sortedEvents);
  } catch (error) {
    console.error('Error in /api/events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

app.get('/api/events/upcoming', async (req, res) => {
  try {
    const events = await getEventsFromBin();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const upcoming = events
      .filter(event => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    res.json(upcoming);
  } catch (error) {
    console.error('Error in /api/events/upcoming:', error);
    res.status(500).json({ error: 'Failed to fetch upcoming events' });
  }
});

app.get('/api/events/past', async (req, res) => {
  try {
    const events = await getEventsFromBin();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const past = events
      .filter(event => new Date(event.date) < today)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json(past);
  } catch (error) {
    console.error('Error in /api/events/past:', error);
    res.status(500).json({ error: 'Failed to fetch past events' });
  }
});

app.post('/api/events', verifyAdmin, upload.single('image'), async (req, res) => {
  try {
    const { title, description, date, time, location, category } = req.body;
    
    if (!title || !date) {
      return res.status(400).json({ error: 'Title and date are required' });
    }

    let image_path = null;
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, req.file.originalname);
      image_path = result.secure_url;
    }

    const events = await getEventsFromBin();
    const newEvent = {
      id: Date.now().toString(),
      title,
      description: description || '',
      date,
      time: time || '',
      location: location || '',
      category: category || '',
      image_path,
      created_at: new Date().toISOString(),
    };

    events.push(newEvent);
    await updateEventsBin(events);
    
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

app.put('/api/events/:id', verifyAdmin, upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date, time, location, category } = req.body;

    const events = await getEventsFromBin();
    const eventIndex = events.findIndex(e => e.id === id || e.id === parseInt(id));
    
    if (eventIndex === -1) {
      return res.status(404).json({ error: 'Event not found' });
    }

    let image_path = events[eventIndex].image_path;
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, req.file.originalname);
      image_path = result.secure_url;
    }

    events[eventIndex] = {
      ...events[eventIndex],
      title: title || events[eventIndex].title,
      description: description !== undefined ? description : events[eventIndex].description,
      date: date || events[eventIndex].date,
      time: time !== undefined ? time : events[eventIndex].time,
      location: location !== undefined ? location : events[eventIndex].location,
      category: category !== undefined ? category : events[eventIndex].category,
      image_path,
      updated_at: new Date().toISOString(),
    };

    await updateEventsBin(events);
    res.json(events[eventIndex]);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Failed to update event' });
  }
});

app.delete('/api/events/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const events = await getEventsFromBin();
    const filteredEvents = events.filter(e => e.id !== id && e.id !== parseInt(id));
    
    if (filteredEvents.length === events.length) {
      return res.status(404).json({ error: 'Event not found' });
    }

    await updateEventsBin(filteredEvents);
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Failed to delete event' });
  }
});

app.get('/api/sermons', async (req, res) => {
  try {
    const sermons = await getSermonsFromBin();
    const sortedSermons = sermons.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json(sortedSermons);
  } catch (error) {
    console.error('Error in /api/sermons:', error);
    res.status(500).json({ error: 'Failed to fetch sermons' });
  }
});

app.post('/api/sermons', verifyAdmin, async (req, res) => {
  try {
    const { title, speaker_or_leader, date, description, media_url } = req.body;
    
    if (!title || !date) {
      return res.status(400).json({ error: 'Title and date are required' });
    }

    const sermons = await getSermonsFromBin();
    const newSermon = {
      id: Date.now().toString(),
      title,
      speaker_or_leader: speaker_or_leader || '',
      date,
      description: description || '',
      media_url: media_url || '',
      created_at: new Date().toISOString(),
    };

    sermons.push(newSermon);
    await updateSermonsBin(sermons);
    
    res.status(201).json(newSermon);
  } catch (error) {
    console.error('Error creating sermon:', error);
    res.status(500).json({ error: 'Failed to create sermon' });
  }
});

app.put('/api/sermons/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, speaker_or_leader, date, description, media_url } = req.body;

    const sermons = await getSermonsFromBin();
    const sermonIndex = sermons.findIndex(s => s.id === id || s.id === parseInt(id));
    
    if (sermonIndex === -1) {
      return res.status(404).json({ error: 'Sermon not found' });
    }

    sermons[sermonIndex] = {
      ...sermons[sermonIndex],
      title: title || sermons[sermonIndex].title,
      speaker_or_leader: speaker_or_leader !== undefined ? speaker_or_leader : sermons[sermonIndex].speaker_or_leader,
      date: date || sermons[sermonIndex].date,
      description: description !== undefined ? description : sermons[sermonIndex].description,
      media_url: media_url !== undefined ? media_url : sermons[sermonIndex].media_url,
      updated_at: new Date().toISOString(),
    };

    await updateSermonsBin(sermons);
    res.json(sermons[sermonIndex]);
  } catch (error) {
    console.error('Error updating sermon:', error);
    res.status(500).json({ error: 'Failed to update sermon' });
  }
});

app.delete('/api/sermons/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const sermons = await getSermonsFromBin();
    const filteredSermons = sermons.filter(s => s.id !== id && s.id !== parseInt(id));
    
    if (filteredSermons.length === sermons.length) {
      return res.status(404).json({ error: 'Sermon not found' });
    }

    await updateSermonsBin(filteredSermons);
    res.json({ message: 'Sermon deleted successfully' });
  } catch (error) {
    console.error('Error deleting sermon:', error);
    res.status(500).json({ error: 'Failed to delete sermon' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on port ${PORT}`);
});
