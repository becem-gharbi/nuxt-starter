importScripts(
  "https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyA-ZLjOO7ln-D7jzewjQg5HzSD-bWLDPdo",
  authDomain: "oauth-388710.firebaseapp.com",
  projectId: "oauth-388710",
  storageBucket: "oauth-388710.appspot.com",
  messagingSenderId: "608224103831",
  appId: "1:608224103831:web:75e719c2e93cfcc28608d2",
  measurementId: "G-EMFKD7JXYN"
};

const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification.title,
    payload.notification
  );
});
