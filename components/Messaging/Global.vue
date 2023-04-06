<template>
    <div>
    </div>
</template>

<script setup lang="ts">
const { onMessage } = useFcm();

onMessage((payload) => {
    alert(payload.notification?.title);
});
</script>