<template>
    <div class="flex flex-col gap-2">

        <n-form @submit.prevent="() => refresh()">
            <n-input-group class="my-4">
                <n-input placeholder="Email address or name" v-model:value="searchString">
                    <template #prefix>
                        <NaiveIcon name="ph:magnifying-glass" :size="16"></NaiveIcon>
                    </template>
                </n-input>
                <n-button attr-type="submit">Search</n-button>
            </n-input-group>
        </n-form>

        <n-thing v-for="user of users">
            <template #avatar>
                <S3Image :src="user.picture!" class="w-8 h-8 object-contain rounded-full" />
            </template>

            <template #header>
                {{ user.name }}
            </template>

            <template #description>
                {{ user.email }}
            </template>

            <template #header-extra>
                <n-popconfirm v-if="user.suspended" @positive-click="() => unsuspendAccount(user.id)">
                    <template #trigger>
                        <n-button circle size="small" type="error" secondary>
                            <NaiveIcon name="ph:x-circle" />
                        </n-button>
                    </template>
                    {{ 'Unsuspend account ' + user.email }}
                </n-popconfirm>

                <n-popconfirm v-else @positive-click="() => suspendAccount(user.id)">
                    <template #trigger>
                        <n-button circle size="small" type="success" secondary>
                            <NaiveIcon name="ph:check-circle-bold" />
                        </n-button>
                    </template>
                    {{ 'Suspend account ' + user.email }}
                </n-popconfirm>


            </template>

        </n-thing>
    </div>
</template>

<script setup lang="ts">

const { listUsers, editUser } = useAuthAdmin()

const searchString = ref("")

const { data: users, refresh } = await useAsyncData(() => listUsers({
    orderBy: {
        createdAt: "desc"
    },
    where: {
        OR: [
            {
                name: {
                    contains: searchString.value,
                },
            }, {
                email: {
                    contains: searchString.value
                },
            }
        ]
    },
    take: 10
}))

async function suspendAccount(userId: number) {
    await editUser({
        id: userId,
        data: {
            suspended: true
        }
    })

    users.value?.forEach(user => {
        if (user.id === userId) {
            user.suspended = true
        }
    })
}

async function unsuspendAccount(userId: number) {
    await editUser({
        id: userId,
        data: {
            suspended: false
        }
    })

    users.value?.forEach(user => {
        if (user.id === userId) {
            user.suspended = false
        }
    })
}
</script>