importScripts(
  "https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCkXK7YmLmj06A6W1LnyDPT7TIFdfzQv1s",
  authDomain: "opensource-393209.firebaseapp.com",
  projectId: "opensource-393209",
  storageBucket: "opensource-393209.appspot.com",
  messagingSenderId: "757120780044",
  appId: "1:757120780044:web:d9fd0f794cc146ab81ab29",
  measurementId: "G-ZME8S32QQC"
};

const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification.title,
    payload.notification
  );
});
