import type { ModuleOptions } from "nuxt-s3";

export const s3: Partial<ModuleOptions> = {
  region: process.env.S3_CLIENT_REGION,
  endpoint: process.env.S3_CLIENT_ENDPOINT,
  accessKeyId: process.env.S3_CLIENT_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_CLIENT_SECRET_ACCESS_KEY,
  bucket: process.env.S3_BUCKET,
  accept: "^image/(png|jpeg|png|gif)",
};
