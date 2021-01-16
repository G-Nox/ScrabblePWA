/* eslint-disable no-undef */

//This is how you can use the network first strategy for files ending with .js
workbox.routing.registerRoute(/.*\.js/, workbox.strategies.networkFirst());

// Use cache but update cache files in the background ASAP
workbox.routing.registerRoute(
  /.*\.css/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "css-cache"
  })
);

//Cache first, but defining duration and maximum files
workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  workbox.strategies.cacheFirst({
    cacheName: "image-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
);

workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  workbox.strategies.cacheFirst({
    cacheName: "googleapis",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
);

workbox.core.setCacheNameDetails({ prefix: "pwa_scrabble" });

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
//
// // Catch routing errors, like if the user is offline
// workbox.routing.setCatchHandler(async ({ event }) => {
//   // Return the precached offline page if a document is being requested
//   if (event.request.destination === "document") {
//     return workbox.precaching.matchPrecache("/offline");
//   }
//
//   return Response.error();
// });
