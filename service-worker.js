const OFFLINE_VERSION = 1;
const CACHE_NAME = "offline";

const urlsToCache = [
    "/",
    "css/reset.css",
    "style.css",
    "js/index.js",
];

self.addEventListener("install", event => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(urlsToCache);
        })()
    )
})

self.addEventListener("fetch", event => {
    event.respondWith(
        (async () => {
            const cachedResponse = await caches.match(event.request);
            return cachedResponse || fetch(event.request);
        })()
    )
})