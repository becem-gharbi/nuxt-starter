import { auth, naiveui, tailwindcss, s3, fcm, bugsnag } from "./config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt starter",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  modules: [
    "@bg-dev/nuxt-auth",
    "@bg-dev/nuxt-naiveui",
    "@nuxtjs/tailwindcss",
    "@bg-dev/nuxt-s3",
    "nuxt-security",
    "@bg-dev/nuxt-fcm",
    "nuxt-bugsnag",
  ],

  auth,
  naiveui,
  tailwindcss,
  s3,
  fcm,
  bugsnag,

  security: {
    corsHandler: {
      origin: process.env.AUTH_BASE_URL,
      methods: "*",
    },
    xssValidator: false,
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "data:",
          "blob:",
          "https://*.googleusercontent.com",
          "https://ui-avatars.com",
          process.env.S3_PUBLIC_BUCKET_URL || "",
        ],
      },
    },
  },

  routeRules: {
    "/": { prerender: true },
    "/auth/login": { prerender: true },
    "/auth/register": { prerender: true },
    "/auth/request-password-reset": { prerender: true },
  },

  vite: {
    optimizeDeps: {
      exclude: ["firebase/analytics"],
    },
  },
});
