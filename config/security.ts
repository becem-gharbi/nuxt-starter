import type { ModuleOptions } from 'nuxt-security'

export const security: Partial<ModuleOptions> = {
  corsHandler: {
    origin: process.env.NUXT_PUBLIC_AUTH_BASE_URL,
  },
  headers: {
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      'img-src': [
        '\'self\'',
        'data:',
        'blob:',
        'https://*.googleusercontent.com',
      ],
    },
  },
}
