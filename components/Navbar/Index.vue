<template>
    <naive-navbar v-if="user" :routes="routes" drawer-closable>
        <template #start>
            <NuxtLink to="/" class="flex items-center gap-3">
                <NaiveIcon name="logos:nuxt-icon" :size="25"></NaiveIcon>
                <n-text strong>Nuxt starter</n-text>
            </NuxtLink>
        </template>

        <template #end v-if="!isMobileOrTablet">
            <n-dropdown trigger="click" :options="dropdownOptions" :style="{ padding: '8px' }" @select="handleSelect">
                <S3Image :src="user.picture" class="w-8 h-8 object-contain rounded-full ring-2 cursor-pointer" />
            </n-dropdown>
        </template>

        <template #drawer-header>
            <AccountInfo class="mx-2" />
        </template>

        <template #drawer-footer>
            <n-button secondary block @click="async () => await logout()">
                Logout
            </n-button>
        </template>
    </naive-navbar>
</template>

<script setup lang="ts">
import { NaiveIcon, AccountInfo } from "#components"
import { NavbarRoute } from "@bg-dev/nuxt-naiveui"
import type { DropdownOption } from "naive-ui"

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

const dropdownOptions = ref<DropdownOption[]>([])

watch(user, (newUser, oldUser) => {
    if (!newUser || newUser.role === oldUser?.role) {
        return
    }

    dropdownOptions.value = [
        {
            key: 'header',
            type: 'render',
            render: () => h(AccountInfo)
        },
        {
            key: 'divider',
            type: 'divider',
        },
        {
            label: 'Account',
            key: 'account',
            icon: () => h(NaiveIcon, { name: 'ph:user' }),
        },
        {
            label: 'Logout',
            key: 'logout',
            icon: () => h(NaiveIcon, { name: 'ph:sign-out' }),
        }
    ]

    if (newUser.role === "admin") {
        dropdownOptions.value.splice(3, 0, {
            label: 'Management',
            key: 'management',
            icon: () => h(NaiveIcon, { name: 'ph:users' }),
        })

        if (isMobileOrTablet) {
            routes.value.push({
                label: "Management",
                path: "/management",
                icon: 'ph:users'
            })
        }
    }
}, { immediate: true })


async function handleSelect(key: string) {
    if (key === 'logout') {
        await logout()
    }
    else if (key === 'account') {
        return navigateTo('/account')
    } else if (key === 'management') {
        return navigateTo('/management')
    }
}
</script>