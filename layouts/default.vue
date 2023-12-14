<template>
  <div class="page">
    <Navbar />

    <ClientOnly>
      <n-notification-provider placement="bottom-right">
        <NotificationNetwork />
      </n-notification-provider>
    </ClientOnly>

    <div v-if="user" class="flex-1 container mx-auto my-8 px-4">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { user } = useAuthSession()
</script>
