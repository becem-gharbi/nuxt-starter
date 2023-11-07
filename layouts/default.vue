<template>
  <div class="page">
    <template v-if="user">
      <LazyNavbar />

      <ClientOnly>
        <n-notification-provider placement="bottom-right">
          <NotificationNetwork />
        </n-notification-provider>
      </ClientOnly>

      <div class="flex-1 container mx-auto my-8 px-4">
        <slot />
      </div>
      <LazyFooter />
    </template>
  </div>
</template>

<script setup>
const { user } = useAuthSession();
</script>
