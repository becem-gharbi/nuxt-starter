<template>
    <div class="page">
        <template v-if="user">
            <Navbar :user="user"></Navbar>
            <div class="flex-1 container mx-auto my-8 px-4">
                <slot />
            </div>
            <Footer></Footer>
        </template>
    </div>
</template>

<script setup>
const { useUser } = useAuthSession()
const user = useUser()
</script>