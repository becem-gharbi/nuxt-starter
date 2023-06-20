import Bugsnag from "@bugsnag/js";
import { version } from "../package.json";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  
  if (!config.public.bugsnag.enabled) {
    return;
  }

  const bugsnag = Bugsnag.start({
    apiKey: config.public.bugsnag.apiKey,
    enabledReleaseStages: ["production"],
    releaseStage: process.env.NODE_ENV,
    appVersion: version,
  });

  // Called when a fatal error occurs
  nuxtApp.hook("app:error", (error) => {
    bugsnag.notify(error);
  });

  return {
    provide: {
      bugsnag,
    },
  };
});
