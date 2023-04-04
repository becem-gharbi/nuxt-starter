importScripts(
  "https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAWBHIvddACahtklWzi1UjVmejsBPzGtrg",
  authDomain: "nuxt-fcm.firebaseapp.com",
  projectId: "nuxt-fcm",
  storageBucket: "nuxt-fcm.appspot.com",
  messagingSenderId: "476657243208",
  appId: "1:476657243208:web:8a0acd406ed065e89b347d",
};

const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification.title,
    payload.notification
  );
});
