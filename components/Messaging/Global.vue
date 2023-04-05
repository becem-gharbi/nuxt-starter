<template>
    <div></div>
</template>

<script setup lang="ts">
const { $fcm } = useNuxtApp();

$fcm.onMessage((payload) => {
    alert(payload.notification?.title);
});
</script>