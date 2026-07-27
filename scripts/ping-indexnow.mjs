import { INDEXNOW_KEY, urls } from './generate-seo.mjs';

const SITE_HOST = 'sandraiderscheat.com';

async function pingIndexNow() {
  if (process.env.SKIP_INDEXNOW === '1') {
    console.log('Skipping IndexNow ping (SKIP_INDEXNOW=1)');
    return;
  }

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls.map(entry => entry.loc),
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    console.log(`IndexNow ping status: ${response.status}`);
  } catch (error) {
    console.warn('IndexNow ping failed (non-fatal):', error);
  }
}

pingIndexNow();
