const urlsToCache = ['/', '/completed']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pwa-task-manager').then(function (cache) {
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response

      return fetch(event.request)
    }),
  )
})

self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['pwa-task-manager']

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})
