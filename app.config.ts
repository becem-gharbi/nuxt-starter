import { generateColorThemes } from '@bg-dev/nuxt-naiveui/utils'

export default defineAppConfig({
  naiveui: {
    themeConfig: {
      shared: {
        common: {
          fontFamily: 'Rubik',
          borderRadius: '6px'
        }
      },
      ...generateColorThemes()
    }
  }
})
