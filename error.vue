<template>
  <naive-config>
    <div class="page justify-center items-center">
      <n-result
        :status="status"
        :builtin-theme-overrides="{ titleFontSizeMedium: '24px' }"
        :title="error.statusMessage || 'Oops, something went wrong'"
        :description="error.message"
      >
        <template #footer>
          <n-button
            type="primary"
            @click="handleError"
          >
            Back home
          </n-button>
        </template>
      </n-result>
    </div>
  </naive-config>
</template>

<script setup lang="ts">
import type { ResultProps } from 'naive-ui'
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const status = computed(() => props.error.statusCode?.toString() as ResultProps['status'])

const handleError = () => clearError({ redirect: '/' })
</script>
