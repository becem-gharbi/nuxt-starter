<template>
    <div>
        <!--On loggedIn section -->
        <section v-if="user">
            <naive-navbar>
                <template #start>
                    <NuxtLink to="/home" class="flex items-center gap-3">
                        <NaiveIcon name="logos:nuxt-icon" :size="25"></NaiveIcon>
                        <n-text strong>Nuxt starter</n-text>
                    </NuxtLink>
                </template>

                <template #end>
                    <NButton @click="() => isModalVisible = true" text>
                        <S3Image :src="userPicture" class="w-8 h-8 object-contain rounded-full" />
                    </NButton>
                </template>
            </naive-navbar>

            <n-modal v-model:show="isModalVisible" preset="card" class="md:w-1/3 md:m-auto m-2" segmented size="small">
                <template #header>
                    <div class="flex items-center gap-4 text-sm">
                        <S3Image :src="userPicture" class="w-10 h-10 rounded-full" />

                        <div class="flex flex-col">
                            <NText strong>{{ user?.name }}</NText>
                            <NText :depth="3">{{ user?.email }}</NText>
                        </div>
                    </div>
                </template>

                <n-list hoverable clickable>
                    <n-list-item @click="() => handleNavigation('account')">
                        Account
                        <template #prefix>
                            <NaiveIcon name="ph:user"></NaiveIcon>
                        </template>
                        <template #suffix>
                            <NaiveIcon name="ph:caret-right"></NaiveIcon>
                        </template>
                    </n-list-item>

                    <n-list-item @click="() => handleNavigation('settings')">
                        Settings
                        <template #prefix>
                            <NaiveIcon name="ph:gear"></NaiveIcon>
                        </template>
                        <template #suffix>
                            <NaiveIcon name="ph:caret-right"></NaiveIcon>
                        </template>
                    </n-list-item>

                    <n-list-item @click="() => logout()">
                        Logout
                        <template #prefix>
                            <NaiveIcon name="ph:sign-out"></NaiveIcon>
                        </template>
                        <template #suffix>
                            <NaiveIcon name="ph:caret-right"></NaiveIcon>
                        </template>
                    </n-list-item>
                </n-list>
            </n-modal>
        </section>
        <!--On loggedIn section -->

        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const { useUser } = useAuthSession()
const { logout } = useAuth()
const user = useUser()
const isModalVisible = ref(false)

const userPicture = computed(() =>
    user.value?.picture || `https://ui-avatars.com/api/?name=${user.value?.name}`
)

function handleNavigation(route: string) {
    navigateTo(route)
    isModalVisible.value = false
}
</script>
