import { setPermissions } from "#s3";

export default defineEventHandler((event) => {
  const role = event.context.auth?.userRole;

  setPermissions(event, {
    bucket: {
      create: role === "admin",
      delete: role === "admin",
      list: role === "admin",
    },
    object: {
      create: role === "admin" || role === "user",
      delete: role === "admin" || role === "user",
      list: role === "admin",
      read: true,
      update: role === "admin" || role === "user",
    }
  });
});
