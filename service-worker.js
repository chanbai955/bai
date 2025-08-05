const CACHE_NAME = 'wood-inventory-v1';
const urlsToCache = [
  '/',
  '/wood.html',
  '/styles.css', // Assuming you've moved your CSS to an external file
  '/script.js',  // Assuming you've moved your JS to an external file
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
