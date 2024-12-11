const CACHE_NAME = 'alabanzas-cache-v1';
const urlsToCache = [
  '/',
  '/Inicio.html',
  '/Canciones.html',
  '/Contacto.html',
  '/Fechas.html',
  '/Cantos.html',
  '/Mdm.html',
  '/Guitarra.html',
  '/Piano.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/service-worker.js',
  '/logo-parroquia.png',
  '/Alabanza.png',
  '/Fonde-de-pantalla-ppal.png',
  '/abr25.png',
  '/ago.png',
  '/dic24.png',
  '/ene25.png',
  '/feb25.png',
  '/jul25.png',
  '/jun25.png',
  '/mar25.png',
  '/may25.png',
  '/nov24.png',
  '/oct25.png',
  '/sep25.png'
];

// Instalar el Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Archivos cacheados');
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.error('Error al cachear archivos:', err);
      })
  );
});

// Activar el Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch: responder a las solicitudes con la caché si está disponible
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Devuelve la respuesta de la caché si está disponible
        if (cachedResponse) {
          return cachedResponse;
        }
        // Si no está en la caché, realiza la solicitud de red
        return fetch(event.request).catch((err) => {
          console.error('Error en la solicitud de red:', err);
        });
      })
  );
});
