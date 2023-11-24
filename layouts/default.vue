<template>
  <div class="page">
    <template v-if="user">
      <Navbar />

      <ClientOnly>
        <n-notification-provider placement="bottom-right">
          <NotificationNetwork />
        </n-notification-provider>
      </ClientOnly>

      <div class="flex-1 container mx-auto my-8 px-4">
        <slot />
      </div>
      <Footer />
    </template>
  </div>
</template>

<script setup lang="ts">
const { user } = useAuthSession()
</script>
