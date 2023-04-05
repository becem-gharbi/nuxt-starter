<template>
    <div></div>
</template>

<script setup lang="ts">
const { onMessageReceived } = useFcm();

onMessageReceived((payload) => {
    alert(payload.notification?.title);
});
</script>