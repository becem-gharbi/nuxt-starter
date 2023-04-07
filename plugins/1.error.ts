export default defineNuxtPlugin((nuxtApp) => {
  const bugsnag = useBugsnag();

  // Called when a fatal error occurs
  nuxtApp.hook("app:error", (error) => {
    bugsnag.notify(error);
  });

  // Called when a vue error propagates to the root component
  nuxtApp.hook("vue:error", (error) => {
    bugsnag.notify(error);
  });
});
