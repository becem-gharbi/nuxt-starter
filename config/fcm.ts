import type { ModuleOptions } from "@bg-dev/nuxt-fcm";

export const fcm: Partial<ModuleOptions> = {
  firebaseConfig:
    process.env.FCM_FIREBASE_CONFIG &&
    JSON.parse(process.env.FCM_FIREBASE_CONFIG),

  vapidKey: process.env.FCM_VAPID_KEY,
  
  serviceAccount:
    process.env.FCM_SERVICE_ACCOUNT &&
    JSON.parse(process.env.FCM_SERVICE_ACCOUNT),
};
