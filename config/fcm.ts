import type { ModuleOptions } from "@bg-dev/nuxt-fcm";

export const fcm: Partial<ModuleOptions> = {
  firebaseConfig: JSON.parse(process.env.FCM_FIREBASE_CONFIG!),
  vapidKey: process.env.FCM_VAPID_KEY,
  serviceAccount: JSON.parse(process.env.FCM_SERVICE_ACCOUNT!),
};
