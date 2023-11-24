<template>
  <naive-navbar :routes="routes" :drawer-routes="drawerRoutes" drawer-closable>
    <template #start>
      <nuxt-link to="/" class="flex items-center gap-3">
        <naive-icon name="logos:nuxt-icon" :size="25" />
        <n-text strong>
          Nuxt starter
        </n-text>
      </nuxt-link>
    </template>

    <template #end>
      <div v-if="!isMobileOrTablet" class="notMobileOrTablet">
        <n-dropdown
          placement="bottom-start"
          trigger="click"
          :options="dropdownOptions"
          :style="{ padding: '8px', minWidth: '200px' }"
          @select="handleDropdownSelect"
        >
          <img :src="user?.picture" class="w-8 h-8 object-cover rounded-full ring-2 cursor-pointer" alt="avatar">
        </n-dropdown>
      </div>
    </template>

    <template #drawer-header>
      <AccountInfo class="mx-2" />
    </template>

    <template #drawer-footer>
      <n-button secondary block @click="logout">
        Logout
      </n-button>
    </template>
  </naive-navbar>
</template>

<script setup lang="ts">
import type { NavbarRoute } from '@bg-dev/nuxt-naiveui'
import type { DropdownOption } from 'naive-ui'
import { NaiveIcon, AccountInfo } from '#components'

const { user } = useAuthSession()
const { logout } = useAuth()
const { isMobileOrTablet } = useNaiveDevice()

const routes: NavbarRoute[] = []

const drawerRoutes: NavbarRoute[] = [
  {
    label: 'Account',
    icon: 'ph:user',
    path: '/account'
  }
]

const dropdownOptions: DropdownOption[] = [
  {
    key: 'header',
    type: 'render',
    render: () => h(AccountInfo)
  },
  {
    key: 'divider',
    type: 'divider'
  },
  {
    label: 'Account',
    key: 'account',
    icon: () => h(NaiveIcon, { name: 'ph:user' })
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: () => h(NaiveIcon, { name: 'ph:sign-out' })
  }
]

async function handleDropdownSelect (key: string) {
  if (key === 'logout') {
    await logout()
  } else if (key === 'account') {
    await navigateTo('/account')
  }
}
</script>
