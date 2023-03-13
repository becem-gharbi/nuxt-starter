<template>
    <div>
        <NaiveColorModeSwitch />
        <n-h1>Login</n-h1>
        <n-button @click="() => loginWithProvider('google')">Login with Google</n-button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ auth: false });

const { loginWithProvider } = useAuth()
</script>