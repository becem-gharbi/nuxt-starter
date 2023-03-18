<template>
  <NaiveConfig :theme-config="themeConfig">

    <NuxtLayout :name="user ? 'logged-in' : 'default'">
      <NuxtPage />
    </NuxtLayout>

  </NaiveConfig>
</template>

<script setup lang="ts">
import { ThemeConfig } from "@bg-dev/nuxt-naiveui"

const { useUser } = useAuthSession()
const user = useUser()

const themeConfig = ref<ThemeConfig>({
  shared: {
    common: {
      fontFamily: "Cairo",
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
