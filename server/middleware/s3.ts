import { getKey } from '#s3'

export default defineEventHandler((event) => {
  const { pathname } = getRequestURL(event)
  const isS3Mutation = pathname.startsWith('/api/s3/mutation')

  if (isS3Mutation) {
    const userId = event.context.auth?.userId

    const key = getKey(event)

    const userIdFromKey = key.split('/')[0]

    if (!userId || userId !== userIdFromKey) {
      throw new Error('unauthorized')
    }
  }
})
