<template>
    <div>
        <naive-navbar v-if="user" :routes="routes" drawer-width="100%" drawer-closable>
            <template #start>
                <NuxtLink to="/home" class="flex items-center gap-3">
                    <NaiveIcon name="logos:nuxt-icon" :size="25"></NaiveIcon>
                    <n-text strong>Nuxt starter</n-text>
                </NuxtLink>
            </template>

            <template #end v-if="!isMobileOrTablet">
                <n-dropdown trigger="click" :options="dropdownOptions" :style="{ padding: '8px' }" @select="handleSelect">
                    <S3Image v-if="user?.picture" :src="user.picture"
                        class="w-6 h-6 object-contain rounded-full ring-2 cursor-pointer" />
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
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { NaiveIcon, AccountInfo, NDivider } from "#components"
import { NavbarRoute } from "@bg-dev/nuxt-naiveui"

const { useUser } = useAuthSession()
const { logout } = useAuth()
const { isMobileOrTablet } = useNaiveDevice()
const user = useUser()

const routes = ref<NavbarRoute[]>([])

const dropdownOptions = ref([
    {
        key: 'header',
        type: 'render',
        render: () => h(AccountInfo)
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
    },
    {
        label: 'Logout',
        key: 'logout',
        icon: () => h(NaiveIcon, { name: 'ph:sign-out' }),
    }
])

if (user.value?.role === "admin") {
    dropdownOptions.value.push({
        label: 'Management',
        key: 'management',
        icon: () => h(NaiveIcon, { name: 'ph:circle-wavy-warning-light' }),
    })
}

if (isMobileOrTablet) {
    routes.value.push({
        label: "Account",
        path: "/account",
        icon: 'ph:user'
    })

    if (user.value?.role === "admin") {
        routes.value.push({
            label: "Management",
            path: "/management",
            icon: 'ph:circle-wavy-warning-light'
        })
    }
}

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