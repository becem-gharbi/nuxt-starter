import { auth, naiveui } from "./config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt starter",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  modules: ["@bg-dev/nuxt-auth", "@bg-dev/nuxt-naiveui"],

  auth,
  naiveui,
});
