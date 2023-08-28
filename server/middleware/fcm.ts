import { setPermissions } from "#fcm";

export default defineEventHandler((event) => {
  const role = event.context.auth?.userRole;

  setPermissions(event, {
    topic: {
      send: role === "admin",
      subscribe: role === "user",
      unsubscribe: role === "user",
    },
  });
});
