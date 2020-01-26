var cacheName = 'golden_dragon-v1';
var appShellFiles = [
    './index.html',
    './eventListeners.js',
    './loader.js',
    './map.js',
    './menu.js',
    './mediaQueries.css',
    './styles.css',
    './images/front.jpg',
    './images/hero.jpg',
    './images/logo/cover.png',
    './images/logo/default.png',
    './images/logo/favicon.ico',
    './images/menu/appetizers.jpg',
    './images/menu/bean-curd.jpg',
    './images/menu/beef.jpg',
    './images/menu/chicken.jpg',
    './images/menu/clams.jpg',
    './images/menu/desserts.jpg',
    './images/menu/drinks.jpg',
    './images/menu/duck.jpg',
    './images/menu/fish.jpg',
    './images/menu/hot-pot.jpg',
    './images/menu/noodle-soup.jpg',
    './images/menu/noodles.jpg',
    './images/menu/oyster.jpg',
    './images/menu/pork.jpg',
    './images/menu/rice.jpg',
    './images/menu/scallop.jpg',
    './images/menu/shrimp.jpg',
    './images/menu/sizzling-plates.jpg',
    './images/menu/soup.jpg',
    './images/menu/squab.jpg',
    './images/menu/squid.jpg',
    './images/menu/vegetable.jpg'
//     ,
//   '/pwa-examples/js13kpwa/',
//   '/pwa-examples/js13kpwa/index.html',
//   '/pwa-examples/js13kpwa/app.js',
//   '/pwa-examples/js13kpwa/style.css',
//   '/pwa-examples/js13kpwa/fonts/graduate.eot',
//   '/pwa-examples/js13kpwa/fonts/graduate.ttf',
//   '/pwa-examples/js13kpwa/fonts/graduate.woff',
//   '/pwa-examples/js13kpwa/favicon.ico',
//   '/pwa-examples/js13kpwa/img/js13kgames.png',
//   '/pwa-examples/js13kpwa/img/bg.png',
//   '/pwa-examples/js13kpwa/icons/icon-32.png',
//   '/pwa-examples/js13kpwa/icons/icon-64.png',
//   '/pwa-examples/js13kpwa/icons/icon-96.png',
//   '/pwa-examples/js13kpwa/icons/icon-128.png',
//   '/pwa-examples/js13kpwa/icons/icon-168.png',
//   '/pwa-examples/js13kpwa/icons/icon-192.png',
//   '/pwa-examples/js13kpwa/icons/icon-256.png',
//   '/pwa-examples/js13kpwa/icons/icon-512.png'
];

// Installing Service Worker
self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        console.log('[Service Worker] Caching all: app shell and content');
        return cache.addAll(contentToCache);
      })
    );
  });

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(r) {
        console.log('[Service Worker] Fetching resource: '+e.request.url);
        return r || fetch(e.request).then(function(response) {
          return caches.open(cacheName).then(function(cache) {
            console.log('[Service Worker] Caching new resource: ' + e.request.url);
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
  });