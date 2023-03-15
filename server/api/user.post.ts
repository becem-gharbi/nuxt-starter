import { handleError, prisma } from "#auth";

export default defineEventHandler(async (event) => {
  try {
    const userId = event.context.auth?.userId;

    if (!userId) {
      throw new Error("unauthorized");
    }

    const { name, picture } = await readBody(event);

    const user = await prisma.user.update({
      where: {
        id: event.context.auth.userId,
      },
      data: {
        name,
        picture,
      },
    });

    return user;
  } catch (error) {
    handleError(error);
  }
});
