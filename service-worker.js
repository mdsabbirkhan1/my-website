// service-worker.js
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        '/styles.css',
    '/script.js',
    '/tools-data.js',
        "/style.css",
        "/app.js",
        "/manifest.json",
        "/icon.png",
        "/icon.png"
        //512
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
