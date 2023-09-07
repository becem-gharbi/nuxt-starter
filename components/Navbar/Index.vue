<template>
  <naive-navbar :routes="routes" :drawer-routes="drawerRoutes" drawer-closable>
    <template #start>
      <NuxtLink to="/" class="flex items-center gap-3">
        <NaiveIcon name="logos:nuxt-icon" :size="25"></NaiveIcon>
        <n-text strong>Nuxt starter</n-text>
      </NuxtLink>
    </template>

    <template #end>
      <div v-if="!isMobileOrTablet" class="notMobileOrTablet">
        <LazyNDropdown placement="bottom-start" trigger="click" :options="dropdownOptions" :style="{ padding: '8px', minWidth: '200px' }"
          @select="handleDropdownSelect">
          <img :src="user?.picture" class="w-8 h-8 object-cover rounded-full ring-2 cursor-pointer" />
        </LazyNDropdown>
      </div>
    </template>

    <template #drawer-header>
      <AccountInfo class="mx-2" />
    </template>

    <template #drawer-footer>
      <n-button secondary block @click="() => logout()"> Logout </n-button>
    </template>
  </naive-navbar>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "#imports"
import { NaiveIcon, AccountInfo } from "#components";
import { NavbarRoute } from "@bg-dev/nuxt-naiveui";
import type { DropdownOption } from "naive-ui";

const { user } = useAuthSession();
const { logout } = useAuth();
const { isMobileOrTablet } = useNaiveDevice();

const LazyNDropdown = defineAsyncComponent(() => import("naive-ui/es/dropdown/src/Dropdown"))

const routes: NavbarRoute[] = [];

const drawerRoutes: NavbarRoute[] = [
  {
    label: "Account",
    icon: "ph:user",
    path: "/account",
  },
];

const dropdownOptions: DropdownOption[] = [
  {
    key: "header",
    type: "render",
    render: () => h(AccountInfo),
  },
  {
    key: "divider",
    type: "divider",
  },
  {
    label: "Account",
    key: "account",
    icon: () => h(NaiveIcon, { name: "ph:user" }),
  },
  {
    label: "Logout",
    key: "logout",
    icon: () => h(NaiveIcon, { name: "ph:sign-out" }),
  },
];

async function handleDropdownSelect(key: string) {
  if (key === "logout") {
    await logout();
  } else if (key === "account") {
    await navigateTo("/account");
  }
}
</script>
