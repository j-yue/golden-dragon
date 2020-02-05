self.addEventListener('install', e => {
  console.log('[Golden Dragon] Install');
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('[Golden Dragon] Caching all: files');
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => {
      console.log('[Service Worker] Fetching resource: ' + e.request.url);
      return r || fetch(e.request).then(res => {
        return caches.open(cacheName).then(cache => {
          console.log('[Service Worker] Caching new resource: ' + e.request.url);
          cache.put(e.request, res.clone());
          return res;
        });
      });
    })
  );
});

var cacheName = 'gd-v1';

var menu = [
  'appetizers', 'bean-curd', 'beef', 'chicken', 'clams', 'desserts', 'drinks',
  'duck', 'fish', 'hot-pot', 'noodle-soup', 'noodles', 'oyster', 'pork', 'rice',
  'scallop', 'shrimp', 'sizzling-plates', 'soup', 'squab', 'squid', 'vegetable'
];


var images = ['front', 'placeholder', 'hero', 'placeholder-front'];

var isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

var format = isIOS ? '.jpg' : '.webp';

var files = [
  'index.html',
  'menu-min.js',
  'loader.js',
  'map-min.js',
  'style-min.css',
  'images/logo/favicon.ico',
  'bootstrap.min.css',
  'mediaQueries-min.css'
];

var filesToCache = files.concat(menu.map(dish => 'images/menu/' + dish + format)).concat(images.map(pic => 'images/' + pic + format));



