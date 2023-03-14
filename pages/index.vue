<template>
    <div>
        <NuxtLink to="/auth/login">
            <n-button>Login</n-button>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ auth: false });
</script>