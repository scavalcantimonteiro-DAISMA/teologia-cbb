// sw.js - Service Worker robusto para suporte offline no Android e iPhone
const CACHE_NAME = 'scm-teologia-cache-v5';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/app.css',
  '/app.js',
  '/manifest.json',
  '/assets/logo.jpg',
  '/scm-tech-logo.jpg',
  '/data/studyPlanData.js',
  '/data/simuladoData.js',
  '/data/apostilaData.js',
  '/data/searchIndexData.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Ignora requisições de API de sincronização
  if (e.request.url.includes('/api/')) {
    return;
  }

  // Para requisições de páginas e navegação (HTML)
  if (e.request.mode === 'navigate' || e.request.destination === 'document') {
    e.respondWith(
      fetch(e.request)
        .catch(() => caches.match(e.request))
        .then((response) => response || caches.match('/') || caches.match('/index.html'))
    );
    return;
  }

  // Para outros arquivos estáticos (CSS, JS, imagens)
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
