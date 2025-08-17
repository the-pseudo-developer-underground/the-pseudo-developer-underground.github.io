const cacheName = 'love-site-cache-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './favicon.png'
  // add other important assets
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
