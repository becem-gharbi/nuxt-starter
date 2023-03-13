<template>
  <NaiveConfig :theme-config="themeConfig">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NaiveConfig>
</template>

<script setup lang="ts">
import { ThemeConfig } from "@bg-dev/nuxt-naiveui"

const themeConfig = ref<ThemeConfig>({
  shared: {
    common: {
      fontFamily: "Poppins"
    }
  }
})
</script>
