<template>
    <div class="md:w-1/2 md:mx-auto flex flex-col gap-4">
        <n-card title="Profile" segmented size="small">
            <AccountProfile />
        </n-card>

        <n-card v-if="user?.provider === 'default'" title="Password" segmented size="small">
            <AccountPassword />
        </n-card>

        <n-card title="Preferences" segmented size="small">
            <AccountPreferences />
        </n-card>

        <n-card title="Sessions" segmented size="small">
            <AccountSessions />
        </n-card>
    </div>
</template>

<script setup>
const { useUser } = useAuthSession()
const user = useUser()
</script>