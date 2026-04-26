self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Necessário para que o navegador reconheça como PWA
  e.respondWith(fetch(e.request));
});
