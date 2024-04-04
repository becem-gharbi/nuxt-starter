import { PrismaClient } from '@prisma/client'

export default defineNitroPlugin((nitroApp) => {
  const prisma = new PrismaClient()

  nitroApp.hooks.hook('request', (event) => {
    event.context.prisma = prisma
  })
})
