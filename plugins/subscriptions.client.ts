export default defineNuxtPlugin(async () => {
  const { subscribe } = useFcmTopic();

  await subscribe({
    topic: "news",
  });
});
