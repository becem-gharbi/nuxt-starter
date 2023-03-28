<template>
    <div class="flex items-center gap-2">
        <S3Image v-if="user" :src="user?.picture" class="w-8 h-8 object-contain rounded-full ring-2" />

        <div class="flex flex-col">
            <NText strong>{{ user?.name }}</NText>
            <NText :depth="3" class="text-base">{{ user?.email }}</NText>
        </div>
    </div>
</template>

<script setup lang="ts">
const { useUser } = useAuthSession()
const user = useUser()
</script>