import { auth, naiveui, tailwindcss, s3 } from "./config";

export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: process.env.NITRO_PRESET,
  },

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
    "nuxt-s3",
    "nuxt-security",
  ],

  auth,
  naiveui,
  tailwindcss,
  s3,

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
          "https://www.googletagmanager.com",
        ],
      },
    },
  },

  routeRules: {
    "/api/s3/query/**": { isr: true },
    "/api/s3/mutation/**": {
      security: {
        xssValidator: false,
      },
    },
  },

  runtimeConfig: {
    public: {
      bugsnag: {
        enable: process.env.BUGSNAG_ENABLE === "true",
        apiKey: process.env.BUGSNAG_API_KEY,
      },
    },
  },
});
