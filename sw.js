const version = "1.0.6";
const cacheName = `largetextdisplayer`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `script.js`,
        `404.html`,
        `display.html`,
        `favicon.ico`,
        `index.html`,
        `page2.html`,
        `README.md`,
        `style.css`,
        `sw.js`,
        `jscolor.js`,
        `https://fonts.googleapis.com/css?family=Roboto&display=swap`,
        `branding/apple-touch-icon.png`,
        `branding/favicon-32x32.png`,
        `branding/android-chrome-192x192.png`,
        `branding/favicon-16x16.png`,
        `branding/site.webmanifest`,
        `branding/browserconfig.xml`,
        `branding/mstile-144x144.png`,
        `branding/mstile-70x70.png`,
        `branding/mstile-150x150.png`,
        `branding/mstile-310x310.png`,
        `branding/mstile-310x150.png`,
        `branding/Logo.png`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});