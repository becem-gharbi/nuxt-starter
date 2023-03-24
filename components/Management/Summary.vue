<template>
    <div class="grid md:grid-cols-4 grid-cols-2">
        <n-statistic label="Total users" :value="totalUsers?.toString()" />
        <n-statistic label="Email" :value="emailUsers?.toString()" />
        <n-statistic label="Google" :value="googleUsers?.toString()" />
        <n-statistic label="Past month" :value="pastMonthUsers?.toString()" />
    </div>
</template>

<script setup lang="ts">
const { countUsers } = useAuthAdmin()

const { data: totalUsers } = await useAsyncData(() => countUsers())

const { data: pastMonthUsers } = await useAsyncData(() => countUsers({
    where: {
        createdAt: {
            gte: new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
        }
    }
}))

const { data: googleUsers } = await useAsyncData(() => countUsers({
    where: {
        provider: "google"
    }
}))

const { data: emailUsers } = await useAsyncData(() => countUsers({
    where: {
        provider: "default"
    }
}))
</script>