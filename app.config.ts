export default defineAppConfig({
  naiveui: {
    themeConfig: {
      shared: {
        common: {
          fontFamily: 'Rubik',
          borderRadius: '6px'
        }
      },

      light: {
        common: {
          primaryColor: '#2563eb', // blue[600]
          primaryColorHover: '#3b82f6', // blue[500]
          primaryColorPressed: '#1d4ed8', // blue[700]
          borderColor: '#d1d5db' // gray[300]
        },
        Card: {
          borderColor: '#d1d5db' // gray[300]
        }
      },

      dark: {
        common: {
          primaryColor: '#3b82f6', // .blue[500]
          primaryColorHover: '#60a5fa', // blue[400]
          primaryColorPressed: '#4b5563', // blue[600]
          borderColor: '#1f2937' // gray[800]
        },
        Card: {
          borderColor: '#1f2937' // gray[800]
        }
      }
    }
  }
})
