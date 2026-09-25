const CACHE_NAME = "bikerdesk-v31";
const ASSETS = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(e) {
  var req = e.request;
  var isHTML = req.mode === "navigate" || (req.headers.get("accept") || "").indexOf("text/html") !== -1;
  if (isHTML) {
    // Network-first for the app shell so updates arrive immediately
    e.respondWith(
      fetch(req).then(function(response) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(req, clone); });
        return response;
      }).catch(function() {
        return caches.match(req).then(function(c){ return c || caches.match("./index.html"); });
      })
    );
    return;
  }
  // Cache-first for other assets
  e.respondWith(
    caches.match(req).then(function(cached) {
      return cached || fetch(req).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache){ cache.put(req, clone); });
        }
        return response;
      });
    })
  );
});

