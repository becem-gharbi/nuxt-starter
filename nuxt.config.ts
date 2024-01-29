import { auth, naiveui, tailwindcss, s3 } from './config'

export default defineNuxtConfig({
  ssr: true,

  devtools: { enabled: true },

  nitro: {
    preset: process.env.NITRO_PRESET
  },

  app: {
    head: {
      title: 'Nuxt starter',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap'
        }
      ],
      meta: [
        { name: 'description', content: 'Edge compatible Nuxt starter' },
        { name: 'theme-color', content: '#18181B' }
      ]
    }
  },

  css: ['~/assets/styles/main.css'],

  modules: [
    '@bg-dev/nuxt-auth',
    '@bg-dev/nuxt-naiveui',
    '@nuxtjs/tailwindcss',
    'nuxt-s3',
    'nuxt-security'
  ],

  auth,
  naiveui,
  tailwindcss,
  s3,

  security: {
    corsHandler: {
      origin: process.env.NUXT_PUBLIC_AUTH_BASE_URL,
      methods: '*'
    },
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        'img-src': [
          "'self'",
          'data:',
          'blob:',
          'https://*.googleusercontent.com',
          'https://ui-avatars.com',
          'https://www.googletagmanager.com'
        ]
      }
    }
  },

  routeRules: {
    '/api/s3/mutation/**': { security: { xssValidator: false } },
    '/api/s3/**': { security: { rateLimiter: { tokensPerInterval: 10, interval: 30000 } } },
    '/api/auth/**': { security: { rateLimiter: { tokensPerInterval: 15, interval: 30000 } } }
  }
})
