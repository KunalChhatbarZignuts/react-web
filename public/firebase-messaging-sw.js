/* public/firebase-messaging-sw.js */

importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js",
);

// Firebase configuration matching firebaseConfig.ts
firebase.initializeApp({
  apiKey: "AIzaSyC6Spe3bfCTMeOjOOpse2RDcEYamZeT3w8",
  authDomain: "fir-e226f.firebaseapp.com",
  projectId: "fir-e226f",
  storageBucket: "fir-e226f.firebasestorage.app",
  messagingSenderId: "714686118788",
  appId: "1:714686118788:web:d337f942c4bafb976e3bd1",
});

const messaging = firebase.messaging();

// Background notification listener
messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Background message received:", payload);

  const title =
    payload.notification?.title ||
    payload.data?.title ||
    "New Notification";

  const options = {
    body: payload.notification?.body || payload.data?.body || "",
    icon: payload.notification?.icon || "/favicon.ico",
    data: payload.data || {},
  };

  self.registration.showNotification(title, options);
});

// Handle click on background notification to bring app into focus
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url && "focus" in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow("/");
        }
      }),
  );
});

