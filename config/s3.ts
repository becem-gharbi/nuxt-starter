import type { ModuleOptions } from 'nuxt-s3'

export const s3: Partial<ModuleOptions> = {
  driver: 'fs',
  accept: '^image/(png|jpeg|png|gif)',
  maxSizeMb: 10
}
