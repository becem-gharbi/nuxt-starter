import type { ModuleOptions } from '@bg-dev/nuxt-auth'

export const auth: Partial<ModuleOptions> = {
  baseUrl: process.env.NUXT_PUBLIC_AUTH_BASE_URL,

  enableGlobalAuthMiddleware: true,

  accessToken: {
    jwtSecret: process.env.NUXT_AUTH_ACCESS_TOKEN_JWT_SECRET!,
  },

  refreshToken: {
    jwtSecret: process.env.NUXT_AUTH_REFRESH_TOKEN_JWT_SECRET!,
  },

  oauth: {
    google: {
      clientId: process.env.NUXT_AUTH_OAUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NUXT_AUTH_OAUTH_GOOGLE_CLIENT_SECRET!,
      scopes: 'email profile',
      authorizeUrl: 'https://accounts.google.com/o/oauth2/auth',
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
      userUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
  },

  redirect: {
    login: '/auth/login',
    logout: '/auth/login',
    home: '/',
    callback: '/auth/callback',
    emailVerify: '/auth/verify-email',
    passwordReset: '/auth/reset-password',
  },

  email: {
    from: process.env.NUXT_AUTH_EMAIL_FROM!,
    provider: {
      name: process.env.NUXT_AUTH_EMAIL_PROVIDER_NAME as 'sendgrid',
      apiKey: process.env.NUXT_AUTH_EMAIL_PROVIDER_API_KEY!,
    },
  },
}
