import { auth, naiveui, tailwindcss } from "./config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt starter",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  modules: ["@bg-dev/nuxt-auth", "@bg-dev/nuxt-naiveui", "@nuxtjs/tailwindcss"],

  auth,
  naiveui,
  tailwindcss,
});
