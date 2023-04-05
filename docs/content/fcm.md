# Nuxt FCM

A Nuxt 3 module for integrating Firebase Cloud messaging. This module is based on Firebase JS SDK for client app and Firebase Admin SDK for app server.

## Features

- ✔️ Listen to messages via `$fcm` helper
- ✔️ Send & subscribe & unsubscribe from topics via `useFcmTopic` composable

## Quick Setup

1. Add `@bg-dev/nuxt-fcm` dependency to your project

```bash
# Using npm
npm install --save-dev @bg-dev/nuxt-fcm

# Using yarn
yarn add --dev @bg-dev/nuxt-fcm
```

2. Add `@bg-dev/nuxt-fcm` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@bg-dev/nuxt-fcm"],

  fcm: {},
});
```

3. Set `fcm` config object

- `firebaseConfig` Firebase project configuration
- `vapidKey` Public server key provided to push services [docs](https://firebase.google.com/docs/cloud-messaging/js/client?authuser=0#configure_web_credentials_with)
- `serviceAccount` Firebase admin credentials [docs](https://firebase.google.com/docs/admin/setup?authuser=0#initialize_the_sdk_in_non-google_environments). You can dismiss this property in case the app server is not needed.

4. Add firebase messaging service worker by creating `firebase-messaging-sw.js` file under `public` folder

```js
// /public/firebase-messaging-sw.js

importScripts(
  "https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  // Paste your firebase project configuration
};

const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification.title,
    payload.notification
  );
});
```

That's it! You can now use Nuxt FCM in your Nuxt app ✨

## Usage

### Authorization

By default all the module's features are inaccessible. Add a server side middleware in order to check the user's role and set the permissions accordingly.

```js
// /server/middleware/fcm.ts

import { setPermissions } from "#fcm";

export default defineEventHandler((event) => {
  setPermissions(event, {
    topic: {
      send: true,
      subscribe: true,
      unsubscribe: true,
    },
  });
});
```

### Listen to messages

When a push message is received and the page is open (in foreground), the message is passed to the page and an onMessage() event is dispatched with the payload of the push message.

```js
// Note that $fcm is available client side only.

const { $fcm } = useNuxtApp();

$fcm.onMessage(console.log);
```

### Use other firebase services

You can extend the module with other services provided by Firebase

```js
// /plugins/analytics.client.ts

import { getAnalytics } from "firebase/analytics";
import { defineNuxtPlugin, useNuxtApp } from "#imports";

export default defineNuxtPlugin(() => {
  const { $fcm } = useNuxtApp();

  getAnalytics($fcm.app);
});
```

## Appendix

- FCM architecture [docs](https://firebase.google.com/docs/cloud-messaging/fcm-architecture)
- Message types [docs](https://firebase.google.com/docs/cloud-messaging/concept-options)

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```
