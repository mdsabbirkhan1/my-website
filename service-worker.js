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
        
    '/tool/1.html',
    '/tool/2.html',
    '/tool/3.html',
    '/tool/4.html',
    '/tool/5.html',
    '/tool/6.html',
    '/tool/7.html',
    '/tool/8.html',
    '/tool/9.html',
    '/tool/10.html',
    '/tool/11.html',
    '/tool/12.html',
    '/tool/13.html',
     '/tool/14.html',
      '/tool/15.html',
      '/tool/16.html',
      '/tool/17.html',
      '/tool/18.html',
      '/tool/19.html',
      '/tool/20.html',
      '/tool/21.html',
      '/tool/22.html',
      '/tool/23.html',
      '/tool/24.html',
      '/tool/25.html',
      '/tool/26.html',
      '/tool/27.html',
      '/tool/28.html', "/https://cdn.jsdelivr.net/gh/mdsabbirkhan1/websitecdn@main/tool/styles.css",
        "/https://cdn.jsdelivr.net/gh/mdsabbirkhan1/websitecdn@main/tool/style.css",
        
"/https://cdn.jsdelivr.net/gh/mdsabbirkhan1/websitecdn@main/icon_optimized_5.png",
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
