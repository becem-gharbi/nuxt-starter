import type { ModuleOptions } from '@bg-dev/nuxt-s3'

export const s3: Partial<ModuleOptions> = {
  driver: process.env.NUXT_S3_DRIVER as 's3',
  accessKeyId: process.env.NUXT_S3_ACCESS_KEY_ID,
  bucket: process.env.NUXT_S3_BUCKET,
  endpoint: process.env.NUXT_S3_ENDPOINT,
  region: process.env.NUXT_S3_REGION,
  secretAccessKey: process.env.NUXT_S3_SECRET_ACCESS_KEY,
  accept: '^image/(png|jpeg|png|gif)',
  maxSizeMb: 10,
}
