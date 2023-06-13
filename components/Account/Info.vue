<template>
    <div v-if="user" class="flex items-center gap-3">
        <S3Image :src="user.picture" class="w-8 h-8 object-contain rounded-full ring-2" />

        <div class="flex flex-col text-base md:text-sm">
            <NText strong>{{ user.name }}</NText>
            <NText :depth="3">{{ user.email }}</NText>
        </div>
    </div>
</template>

<script setup lang="ts">
const { useUser } = useAuthSession()
const user = useUser()
</script>