<template>
    <div class="page">
        <template v-if="user">
            <NavbarMain :user="user"></NavbarMain>
            <div class="flex-1 container mx-auto my-8 px-4">
                <slot />
            </div>
        </template>
    </div>
</template>

<script setup>
const { useUser } = useAuthSession()
const user = useUser()
</script>