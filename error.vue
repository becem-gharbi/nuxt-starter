<template>
    <div class="page justify-center items-center">
        <n-result :status="error.statusCode?.toString()" :builtin-theme-overrides="{ titleFontSizeMedium: '24px' }"
            :title="error.statusMessage || 'Oops, something went wrong'" :description="error.message">

            <template #footer>
                <n-button @click="handleError">Back home</n-button>
            </template>
        </n-result>
    </div>
</template>

  
<script setup>
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>
  