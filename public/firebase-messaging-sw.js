importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBqStBKvfcZTOdhEigzaxNpgQDAErw5Zr4",

  authDomain: "pwa-demo-a7372.firebaseapp.com",

  projectId: "pwa-demo-a7372",

  storageBucket: "pwa-demo-a7372.appspot.com",

  messagingSenderId: "448966555712",

  appId: "1:448966555712:web:2ccd9f9af2f7ff77de47a5",

  measurementId: "G-YXV44TPTB8",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
