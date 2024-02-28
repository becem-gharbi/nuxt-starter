<template>
  <naive-config>
    <div class="page justify-center items-center">
      <n-result
        :status="error.statusCode?.toString()"
        :builtin-theme-overrides="{ titleFontSizeMedium: '24px' }"
        :title="error.statusMessage || 'Oops, something went wrong'"
        :description="error.message"
      >
        <template #footer>
          <n-button type="primary" @click="handleError">
            Back home
          </n-button>
        </template>
      </n-result>
    </div>
  </naive-config>
</template>

<script setup lang="ts">
defineProps<{error:any}>()

const handleError = () => clearError({ redirect: '/' })
</script>
