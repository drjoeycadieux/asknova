// AskNova Developer Hub - Service Worker for PWA Support
// Version 1.0.0

const CACHE_NAME = 'asknova-v1.0.0';
const STATIC_CACHE_URLS = [
    '/',
    '/index.html',
    '/styles.css',
    '/critical.css',
    '/script.js',
    '/tutorials.js',
    '/site.webmanifest',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css'
];

// Install event - cache static assets
self.addEventListener('install', event => {
    console.log('Service Worker installing...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching static assets');
                return cache.addAll(STATIC_CACHE_URLS);
            })
            .then(() => {
                console.log('Static assets cached successfully');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('Error caching static assets:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker activated');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Only handle GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin) &&
        !event.request.url.startsWith('https://cdn.jsdelivr.net')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    console.log('Serving from cache:', event.request.url);
                    return cachedResponse;
                }

                console.log('Fetching from network:', event.request.url);
                return fetch(event.request)
                    .then(response => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response before caching
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(error => {
                        console.error('Fetch failed:', error);

                        // Return offline page for navigation requests
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }

                        throw error;
                    });
            })
    );
});

// Background sync for offline functionality
self.addEventListener('sync', event => {
    console.log('Background sync triggered:', event.tag);

    if (event.tag === 'search-sync') {
        event.waitUntil(
            syncOfflineSearches()
        );
    }
});

// Sync offline searches when back online
async function syncOfflineSearches() {
    try {
        const offlineSearches = await getOfflineSearches();

        for (const search of offlineSearches) {
            // Process offline search data
            console.log('Syncing offline search:', search);
        }

        // Clear offline searches after sync
        await clearOfflineSearches();
    } catch (error) {
        console.error('Error syncing offline searches:', error);
    }
}

// Helper functions for offline data management
async function getOfflineSearches() {
    // Implementation would depend on your offline storage strategy
    return [];
}

async function clearOfflineSearches() {
    // Clear offline search data
}

// Push notification handling (for future use)
self.addEventListener('push', event => {
    console.log('Push notification received:', event);

    const options = {
        body: event.data ? event.data.text() : 'New content available!',
        icon: '/favicon-32x32.png',
        badge: '/favicon-16x16.png',
        tag: 'asknova-update',
        requireInteraction: false,
        actions: [
            {
                action: 'open',
                title: 'Open AskNova'
            },
            {
                action: 'dismiss',
                title: 'Dismiss'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('AskNova Developer Hub', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    console.log('Notification clicked:', event);

    event.notification.close();

    if (event.action === 'open') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});
