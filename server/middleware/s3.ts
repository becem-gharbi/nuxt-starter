import { getMeta } from '#s3'

export default defineEventHandler(async (event) => {
  const { pathname } = getRequestURL(event)
  const isS3Mutation = pathname.startsWith('/api/s3/mutation')

  if (isS3Mutation) {
    const userId = event.context.auth.data?.userId

    const meta = await getMeta(event)

    if (!userId || userId !== meta['user-id']) {
      throw createError({ message: 'unauthorized', statusCode: 401 })
    }
  }
})
