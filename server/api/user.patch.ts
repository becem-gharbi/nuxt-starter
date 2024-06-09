import { handleError } from '#auth_utils'

export default defineEventHandler(async (event) => {
  try {
    const userId = event.context.auth.data?.userId

    if (!userId) {
      throw new Error('unauthorized')
    }

    const { name, picture } = await readBody(event)

    const user = await event.context.auth.adapter.source.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        picture,
      },
    })

    return user
  }
  catch (error) {
    await handleError(error)
  }
})
