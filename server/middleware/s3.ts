import { setPermissions } from "#s3";

export default defineEventHandler((event) => {
  setPermissions(event, {
    bucket: {
      create: false,
      delete: false,
      list: false,
    },
    object: {
      create: true,
      delete: true,
      list: false,
      read: true,
      update: true,
    },
    image: {
      create: true,
      update: true,
      delete: true,
    },
  });
});
