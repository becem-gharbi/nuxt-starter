<template>
    <div>
        <naive-navbar>
            <template #start>
                <NuxtLink to="/" class="flex items-center gap-3">
                    <NaiveIcon name="logos:nuxt-icon" :size="25"></NaiveIcon>
                    <n-text strong>Nuxt starter</n-text>
                </NuxtLink>
            </template>

            <template #end>
                <NuxtLink to="/auth/login" aria-label="login">
                    <n-button type="warning" size="small">
                        Get started
                    </n-button>
                </NuxtLink>
            </template>
        </naive-navbar>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ auth: false, middleware: "guest" });
</script>