export default defineEventHandler(async () => {
  await $fetch("https://jsonplaceholder.typicode.com/todos/1");
  return { ok: true };
});
