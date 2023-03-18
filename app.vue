<template>
  <NaiveConfig :theme-config="themeConfig">

    <naive-navbar v-if="user" :routes="routes" drawer-width="100%" drawer-closable>
      <template #start>
        <NuxtLink to="/home" class="flex items-center gap-3">
          <NaiveIcon name="logos:nuxt-icon" :size="25"></NaiveIcon>
          <n-text strong>Nuxt starter</n-text>
        </NuxtLink>
      </template>

      <template #end>
        <n-dropdown v-if="!isMobileOrTablet" trigger="click" :options="dropdownOptions" :style="{ padding: '8px' }">
          <S3Image v-if="user?.picture" :src="user.picture"
            class="w-6 h-6 object-contain rounded-full ring-2 ring-slate-400" />
        </n-dropdown>
      </template>

      <template #drawer-header>
        <UserInfo class="mx-2"></UserInfo>
      </template>

      <template #drawer-footer>
        <n-button secondary block>
          Logout
        </n-button>
      </template>
    </naive-navbar>

    <NuxtPage />

  </NaiveConfig>
</template>

<script setup lang="ts">
import { ThemeConfig } from "@bg-dev/nuxt-naiveui"

import { NaiveIcon, UserInfo, NDivider } from "#components"
import { NavbarRoute } from "@bg-dev/nuxt-naiveui"

const { useUser } = useAuthSession()
const { logout } = useAuth()
const { isMobileOrTablet } = useNaiveDevice()
const user = useUser()

const routes = ref<NavbarRoute[]>([])

if (isMobileOrTablet) {
  routes.value.push({
    label: "Account",
    path: "/account",
    icon: 'ph:user'
  })
}

const dropdownOptions = ref([
  {
    key: 'header',
    type: 'render',
    render: () => h(UserInfo)
  },
  {
    key: 'divider',
    type: 'render',
    render: () => h(NDivider, { style: { margin: '8px 0px' } })

  },
  {
    label: 'Account',
    key: 'account',
    icon: () => h(NaiveIcon, { name: 'ph:user' }),
    props: {
      onClick: () => navigateTo('/account')
    }
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: () => h(NaiveIcon, { name: 'ph:sign-out' }),
    props: {
      onClick: () => logout()
    }
  }
])

const themeConfig = ref<ThemeConfig>({
  shared: {
    common: {
      fontFamily: "Cairo"
    },
  },
})
</script>
