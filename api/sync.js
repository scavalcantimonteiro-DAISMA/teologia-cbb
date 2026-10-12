const { put } = require('@vercel/blob');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const BLOB_FILENAME = 'teologia-sync-data.json';

  if (req.method === 'GET') {
    try {
      const response = await fetch(`https://887ylze68yqpoehu.public.blob.vercel-storage.com/${BLOB_FILENAME}?t=${Date.now()}`, {
        cache: 'no-store'
      });
      if (!response.ok) {
        return res.status(200).json({ data: {}, updatedAt: 0 });
      }
      const json = await response.json();
      return res.status(200).json(json);
    } catch (err) {
      return res.status(200).json({ data: {}, updatedAt: 0 });
    }
  }

  if (req.method === 'POST') {
    try {
      let payload = req.body;
      if (typeof payload === 'string') {
        try { payload = JSON.parse(payload); } catch (e) {}
      }
      const toSave = {
        data: (payload && payload.data) ? payload.data : (payload || {}),
        updatedAt: Date.now()
      };
      await put(BLOB_FILENAME, JSON.stringify(toSave), {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true
      });
      return res.status(200).json({ ok: true, updatedAt: toSave.updatedAt });
    } catch (err) {
      console.error('Blob sync error:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
