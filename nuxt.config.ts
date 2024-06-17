import { auth, naiveui, tailwindcss, s3, security } from './config'

export default defineNuxtConfig({
  ssr: true,

  devtools: { enabled: true },

  nitro: {
    preset: process.env.NITRO_PRESET,
  },

  app: {
    head: {
      title: 'Nuxt starter',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Edge compatible Nuxt starter' },
        { name: 'theme-color', content: '#18181B' },
      ],
    },
  },

  css: ['~/assets/styles/main.css'],

  modules: [
    '@bg-dev/nuxt-auth',
    '@bg-dev/nuxt-naiveui',
    '@bg-dev/nuxt-s3',
    '@nuxtjs/tailwindcss',
    'nuxt-security',
    '@nuxt/eslint',
  ],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  auth,
  naiveui,
  tailwindcss,
  s3,
  security,

  routeRules: {
    '/api/s3/mutation/**': { security: { xssValidator: false } },
    '/api/s3/**': { security: { rateLimiter: { tokensPerInterval: 10, interval: 30000 } } },
    '/api/auth/**': { security: { rateLimiter: { tokensPerInterval: 15, interval: 30000 } } },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'ESNext',
      },
    },
  },
})
