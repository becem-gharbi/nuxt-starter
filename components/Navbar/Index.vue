<template>
    <naive-navbar :routes="routes" drawer-closable>
        <template #start>
            <NuxtLink to="/" class="flex items-center gap-3">
                <NaiveIcon name="logos:nuxt-icon" :size="25"></NaiveIcon>
                <n-text strong>Nuxt starter</n-text>
            </NuxtLink>
        </template>

        <template #end>
            <div v-if="!isMobileOrTablet" class="notMobileOrTablet">
                <n-dropdown trigger="click" :options="dropdownOptions" :style="{ padding: '8px', minWidth: '200px' }"
                    @select="handleSelect">
                    <img :src="user?.picture" class="w-8 h-8 object-cover rounded-full ring-2 cursor-pointer" />
                </n-dropdown>
            </div>
        </template>

        <template #drawer-header>
            <AccountInfo class="mx-2" />
        </template>

        <template #drawer-footer>
            <div class="flex flex-col gap-3 w-full">
                <n-button secondary block @click="() => navigateTo('/account')">
                    Account
                </n-button>
                <n-button secondary block @click="() => logout()">
                    Logout
                </n-button>
            </div>
        </template>
    </naive-navbar>
</template>

<script setup lang="ts">
import { NaiveIcon, AccountInfo } from "#components";
import { NavbarRoute } from "@bg-dev/nuxt-naiveui";
import type { DropdownOption } from "naive-ui";

const { user } = useAuthSession();
const { logout } = useAuth();
const { isMobileOrTablet } = useNaiveDevice();

const routes = ref<NavbarRoute[]>([]);

const dropdownOptions = ref<DropdownOption[]>([]);

dropdownOptions.value = [
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

async function handleSelect(key: string) {
    if (key === "logout") {
        await logout();
    } else if (key === "account") {
        await navigateTo("/account");
    }
}
</script>
