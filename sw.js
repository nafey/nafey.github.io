this.addEventListener('fetch', function(event) {
	event.respondWith(
		new Response('Hello world from service worker')
	);
});

this.addEventListener('install', function(event) {
	event.waitUntil(
		caches.create('static-v1').then(function(cache) {
			return cache.add({
				'/web/',
				'/web/web.html'
			});
		})
	);
});