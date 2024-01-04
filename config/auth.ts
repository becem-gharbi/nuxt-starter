import type { ModuleOptions } from '@bg-dev/nuxt-auth'

export const auth: Partial<ModuleOptions> = {
  baseUrl: 'http://localhost:3000',

  enableGlobalAuthMiddleware: true,

  prisma: {
    datasourceUrl: '*'
  },

  accessToken: {
    jwtSecret: '*'
  },

  refreshToken: {
    jwtSecret: '*'
  },

  oauth: {
    google: {
      clientId: '*',
      clientSecret: '*',
      scopes: 'email profile',
      authorizeUrl: 'https://accounts.google.com/o/oauth2/auth',
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
      userUrl: 'https://www.googleapis.com/oauth2/v3/userinfo'
    }
  },

  redirect: {
    login: '/auth/login',
    logout: '/auth/login',
    home: '/',
    callback: '/auth/callback',
    emailVerify: '/auth/verify-email',
    passwordReset: '/auth/reset-password'
  },

  email: {
    from: '*',
    provider: {
      name: 'sendgrid',
      apiKey: '*'
    }
  }
}
