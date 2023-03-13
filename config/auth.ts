import type { ModuleOptions } from "@bg-dev/nuxt-auth";

export const auth: Partial<ModuleOptions> = {
  accessToken: {
    jwtSecret: process.env.AUTH_ACCESS_TOKEN_SECRET || "",
  },
  refreshToken: {
    jwtSecret: process.env.AUTH_REFRESH_TOKEN_SECRET || "",
  },
  oauth: {
    google: {
      clientId: process.env.AUTH_OAUTH_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.AUTH_OAUTH_GOOGLE_CLIENT_SECRET || "",
      scopes: "email profile",
      authorizeUrl: "https://accounts.google.com/o/oauth2/auth",
      tokenUrl: "https://accounts.google.com/o/oauth2/token",
      userUrl: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
  },
  redirect: {
    login: "/auth/login",
    logout: "/auth/login",
    home: "/home",
    callback: "/auth/callback",
    emailVerify: "/verify-email",
    passwordReset: "/reset-password",
  },
  enableGlobalAuthMiddleware: true,
  registration: {
    requireEmailVerification: true,
    defaultRole: "user",
  },
  smtp: {
    host: process.env.AUTH_SMTP_HOST || "",
    port: parseInt(process.env.AUTH_SMTP_PORT!),
    user: process.env.AUTH_SMTP_USER || "",
    pass: process.env.AUTH_SMTP_PASS || "",
    from: process.env.AUTH_SMTP_FROM || "",
  },
};
