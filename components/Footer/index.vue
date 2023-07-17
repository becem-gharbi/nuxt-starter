<template>
    <footer :style="{ backgroundColor: naiveTheme.common.bodyColor }" class="text-gray-500">
        <nuxt-link :to="homepage" target="_blank">
            <span class="flex gap-1 items-start">
                <naive-icon name="ph:house" :size="18"></naive-icon>
                <n-text class="text-gray-500">Home</n-text>
            </span>
        </nuxt-link>

        <n-text class="text-gray-500">•</n-text>

        <nuxt-link :to="repository" target="_blank">
            <span class="flex gap-1 items-start">
                <naive-icon name="tabler:brand-github" :size="18"></naive-icon>
                <n-text class="text-gray-500">v-{{ version }}</n-text>
            </span>
        </nuxt-link>
    </footer>
</template>

<script setup>
import { version, repository, homepage } from "../../package.json"
const naiveTheme = useNaiveTheme()
</script>

<style scoped>
footer {
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
}
</style>