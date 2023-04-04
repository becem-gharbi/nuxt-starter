import { setPermissions } from "#fcm";

export default defineEventHandler((event) => {
  const role = event.context.auth?.userRole;

  setPermissions(event, {
    topic: {
      send: true,
      subscribe: true,
      unsubscribe: true,
    },
  });
});
