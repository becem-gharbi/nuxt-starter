import { generateColorThemes } from '@bg-dev/nuxt-naiveui/utils'

export default defineAppConfig({
  naiveui: {
    themeConfig: {
      shared: {
        common: {
          borderRadius: '4px',
          baseColor: 'white'
        }
      },
      ...generateColorThemes()
    }
  }
})
