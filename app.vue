<template>
  <NaiveConfig :theme-config="themeConfig">

    <ClientOnly>
      <n-notification-provider placement="bottom-right">
        <NotificationMessaging />
        <NotificationNetwork />
      </n-notification-provider>
    </ClientOnly>

    <NuxtLayout :name="layout">
      <NuxtLoadingIndicator :color="themeConfig.light?.common?.primaryColor" />

      <n-message-provider>
        <NuxtPage />
      </n-message-provider>
    </NuxtLayout>

  </NaiveConfig>
</template>

<script setup lang="ts">
import { ThemeConfig } from "@bg-dev/nuxt-naiveui"
import { theme } from "#tailwind-config";

const route = useRoute()

const layout = computed(() => route.path.startsWith("/auth") ? "auth" : "default")

const themeConfig = ref<ThemeConfig>({
  shared: {
    common: {
      fontFamily: theme.fontFamily.sans,
      lineHeight: theme.lineHeight.normal,
      borderRadius: "8px"
    },
  },

  light: {
    common: {
      primaryColor: theme.colors.blue[600],
      primaryColorHover: theme.colors.blue[500],
      primaryColorPressed: theme.colors.blue[700],
      borderColor: theme.colors.gray[300],
    },
    Card: {
      borderColor: theme.colors.gray[300]
    }
  },

  dark: {
    common: {
      primaryColor: theme.colors.blue[500],
      primaryColorHover: theme.colors.blue[400],
      primaryColorPressed: theme.colors.blue[600],
      borderColor: theme.colors.gray[800],
    },
    Card: {
      borderColor: theme.colors.gray[800]
    }
  },
})
</script>
