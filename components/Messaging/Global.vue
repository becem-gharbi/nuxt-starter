<template>
    <ClientOnly></ClientOnly>
</template>

<script setup lang="ts">
if (process.client) {
    const { $fcm } = useNuxtApp();

    $fcm.onMessage((payload) => {
        alert(payload.notification?.title);
    });
}
</script>