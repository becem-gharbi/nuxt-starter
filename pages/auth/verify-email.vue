<template>
    <div>
        <n-result v-if="$route.query.error" status="error" title="Failed to verify email"
            :description="$route.query.error.toString()">
            <template #footer>
                <nuxt-link to="/auth/login" class="no-underline">
                    <n-button type="primary">Go back to login</n-button>
                </nuxt-link>
            </template>
        </n-result>

        <n-result v-else status="success" title="Your email is confirmed" description="Registration successfully completed">
            <template #footer>
                <nuxt-link to="/auth/login" class="no-underline">
                    <n-button type="primary">Go back to login</n-button>
                </nuxt-link>
            </template>
        </n-result>
    </div>
</template>

<script setup>
definePageMeta({
    auth: false,
    colorMode: "light",
    layout: "auth"
})
</script>