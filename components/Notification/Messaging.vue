<template>
    <div></div>
</template>

<script setup lang="ts">
const notification = useNotification()

const { onMessage } = useFcm();

onMessage((payload) => {
    notification.info({
        title: payload.notification?.title,
        description: payload.notification?.body
    })
});
</script>