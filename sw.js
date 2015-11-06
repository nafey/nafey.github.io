this.addEventListener('fetch', function(event) {
	event.respondWith(
		new Response('Hello world from service worker')
	);
});