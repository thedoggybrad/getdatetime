'use strict'

const CACHE_NAME = 'getdatetime';
// The files we want to cache
const resourceList = [
  '/',
  'https://thedoggybrad.github.io/getdatetime/index.html',
  'https://thedoggybrad.github.io/getdatetime/resources/favicon.png',

'https://thedoggybrad.github.io/getdatetime/resources/dark-mode-toggle-playground.mjs',

'https://thedoggybrad.github.io/getdatetime/resources/dark-mode-toggle.mjs',

'https://thedoggybrad.github.io/getdatetime/resources/dark.css',

'https://thedoggybrad.github.io/getdatetime/resources/light.css',

'https://thedoggybrad.github.io/getdatetime/resources/moon.svg',

'https://thedoggybrad.github.io/getdatetime/resources/slider.css',

'https://thedoggybrad.github.io/getdatetime/resources/sun.svg'
  
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(resourceList);
  }));
});

function addToCache(cacheName, resourceList) {
  caches.open(cacheName).then(cache => {
    return cache.addAll(resourceList);
  });
}

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request);
  }));
});
