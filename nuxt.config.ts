import { auth, naiveui, tailwindcss, s3, fcm } from "./config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt starter",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  css: ["~/assets/styles/main.css"],

  modules: [
    "@bg-dev/nuxt-auth",
    "@bg-dev/nuxt-naiveui",
    "@nuxtjs/tailwindcss",
    "@bg-dev/nuxt-s3",
    "nuxt-security",
    "@bg-dev/nuxt-fcm",
  ],

  auth,
  naiveui,
  tailwindcss,
  s3,
  fcm,

  security: {
    corsHandler: {
      origin: process.env.AUTH_BASE_URL,
      methods: "*",
    },
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
          "https://www.googletagmanager.com",
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

  runtimeConfig: {
    public: {
      bugsnag: {
        enabled: true,
        apiKey: process.env.BUGSNAG_API_KEY,
      },
    },
  },
});
