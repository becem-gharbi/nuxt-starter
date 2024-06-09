<template>
  <div class="md:w-1/2 md:mx-auto flex flex-col gap-4">
    <n-card
      title="Profile"
      segmented
      size="small"
    >
      <account-profile />
    </n-card>

    <n-card
      v-if="user?.provider === 'default'"
      title="Password"
      segmented
      size="small"
    >
      <account-password />
    </n-card>

    <n-card
      title="Preferences"
      segmented
      size="small"
    >
      <account-preferences />
    </n-card>

    <n-card
      title="Sessions"
      segmented
      size="small"
    >
      <account-sessions />
    </n-card>
  </div>
</template>

<script setup>
const { user } = useAuthSession()
</script>
