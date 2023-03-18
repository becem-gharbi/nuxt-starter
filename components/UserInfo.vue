<template>
    <div class="flex items-center gap-2 text-sm">
        <S3Image v-if="user?.picture" :src="user.picture"
            class="w-8 h-8 object-contain rounded-full ring-2 ring-slate-400" />

        <div class="flex flex-col">
            <NText strong>{{ user?.name }}</NText>
            <NText :depth="3" class="text-xs">{{ user?.email }}</NText>
        </div>
    </div>
</template>

<script setup lang="ts">
const { useUser } = useAuthSession()
const user = useUser()
</script>