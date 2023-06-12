import { handleError, prisma } from "#auth";

export default defineEventHandler(async (event) => {
  try {
    const userId = event.context.auth?.userId;

    if (!userId) {
      throw new Error("unauthorized");
    }

    const { name, picture, birthday } = await readBody(event);

    const user = await prisma.user.update({
      where: {
        id: event.context.auth.userId,
      },
      data: {
        name,
        picture,
        birthday: new Date(birthday),
      },
    });

    return user;
  } catch (error) {
    await handleError(error);
  }
});
