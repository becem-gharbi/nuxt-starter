export default defineNuxtPlugin({
  hooks: {
    's3:auth': async (headers) => {
      const { getAccessToken } = useAuthSession()

      const token = await getAccessToken()

      headers.authorization = `Bearer ${token}`
    },
  },
})
