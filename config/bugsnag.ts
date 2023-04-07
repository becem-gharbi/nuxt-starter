import { ModuleOptions } from "nuxt-bugsnag";
import { version } from "../package.json";

export const bugsnag: Partial<ModuleOptions> = {
  config: {
    apiKey: process.env.BUGSNAG_API_KEY,
    enabledReleaseStages: ["production"],
    releaseStage: process.env.NODE_ENV,
    appVersion: version,
  },
};
