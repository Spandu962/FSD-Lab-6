self.addEventListener('push', function(event) {
  let data = {
    title: "Notification",
    body: "Hello from Service Worker!"
  };

  if (event.data) {
    data = event.data.json();
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "https://cdn-icons-png.flaticon.com/512/1163/1163337.png"
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("http://localhost:5173")
  );
});