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
      fontFamily: "Inter",
    },
  },
  light: {
    common: {
      primaryColor: "#2563eb",
      primaryColorHover: "#0369a1",
      primaryColorPressed: "#0369a1",
    }
  },
  dark: {
    common: {
      primaryColor: "#60a5fa",
      primaryColorHover: "#3b82f6",
      primaryColorPressed: "#2563eb",
    }
  }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: none;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: none;
}
</style>