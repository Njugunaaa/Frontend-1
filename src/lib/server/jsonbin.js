const JSONBIN_BASE_URL = 'https://api.jsonbin.io/v3/b';

function headers() {
  const key = process.env.JSONBIN_MASTER_KEY;
  if (!key) throw new Error('JSONBin server credentials are missing.');
  return { 'X-Master-Key': key, 'Content-Type': 'application/json' };
}

async function readCollection(id, key, label) {
  if (!id) throw new Error(`JSONBin ${label} bin ID is missing.`);
  const response = await fetch(`${JSONBIN_BASE_URL}/${id}/latest`, { headers: headers(), cache: 'no-store' });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || `Could not read ${label}.`);
  return Array.isArray(data.record?.[key]) ? data.record[key] : [];
}

async function writeCollection(id, key, records, label) {
  if (!id) throw new Error(`JSONBin ${label} bin ID is missing.`);
  const response = await fetch(`${JSONBIN_BASE_URL}/${id}`, {
    method: 'PUT', headers: headers(), body: JSON.stringify({ [key]: records }), cache: 'no-store',
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || `Could not save ${label}.`);
}

export const readEvents = () => readCollection(process.env.JSONBIN_EVENTS_BIN_ID, 'events', 'events');
export const writeEvents = (events) => writeCollection(process.env.JSONBIN_EVENTS_BIN_ID, 'events', events, 'events');
export const readSermons = () => readCollection(process.env.JSONBIN_SERMONS_BIN_ID, 'sermons', 'sermons');
export const writeSermons = (sermons) => writeCollection(process.env.JSONBIN_SERMONS_BIN_ID, 'sermons', sermons, 'sermons');
