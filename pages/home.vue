<template>
    <div>
        <n-h1 class="text-red-600">Home</n-h1>
        <n-button @click="logout">Logout</n-button>
    </div>
</template>

<script setup lang="ts">
const { logout } = useAuth()
</script>