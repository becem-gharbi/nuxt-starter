import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(() => {
  const analytics = getAnalytics();

  return {
    provide: {
      analytics,
    },
  };
});
