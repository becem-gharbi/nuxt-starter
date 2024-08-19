import type { ModuleOptions } from '@bg-dev/nuxt-naiveui'
import { generateTailwindColorThemes } from '@bg-dev/nuxt-naiveui/utils'

export const naiveui: Partial<ModuleOptions> = {
  colorModePreference: 'system',
  iconDownload: true,
  themeConfig: {
    ...generateTailwindColorThemes(),
  },
}
