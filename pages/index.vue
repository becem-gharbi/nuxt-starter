<template>
    <div>
        <NuxtLink to="/auth/login">Login</NuxtLink>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ auth: false });
</script>