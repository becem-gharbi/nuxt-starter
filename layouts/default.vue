<template>
    <div class="page">
        <template v-if="user">
            <Navbar></Navbar>
            <div class="flex-1 container mx-auto my-8 px-4">
                <slot />
            </div>
            <Footer></Footer>
        </template>
    </div>
</template>

<script setup>
const { user } = useAuthSession()
</script>