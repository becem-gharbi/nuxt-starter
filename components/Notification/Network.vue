<template>
    <div></div>
</template>

<script setup>
const notification = useNotification()

addEventListener('online', () => {
    notification.destroyAll()

    notification.success({
        title: "Network online",
        duration: 5000,
        closable: false
    })
})

addEventListener('offline', () => {
    notification.error({
        title: "Network offline",
        closable: false,
    })
})

</script>