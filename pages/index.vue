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
                <NuxtLink to="https://nuxt-starter-ready-docs.vercel.app" aria-label="docs" target="_blank">
                    <n-button type="warning" size="small">
                        Docs
                    </n-button>
                </NuxtLink>

                <NuxtLink to="/auth/login" aria-label="demo">
                    <n-button type="primary" size="small">
                        Demo
                    </n-button>
                </NuxtLink>
            </template>
        </naive-navbar>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ auth: false, middleware: "guest", colorMode: "light" });
</script>