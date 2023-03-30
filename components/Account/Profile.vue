<template>
    <div>
        <n-upload class="overflow-hidden w-min mx-auto my-4" list-type="image-card" :max="1" accept="image/*"
            :custom-request="(e) => file = e.file.file">
            <S3Image v-if="formModel.picture" :src="formModel.picture" class="object-contain" />
        </n-upload>

        <n-form @submit.prevent="updateAccount" class="flex-1">
            <n-form-item label="Name">
                <n-input v-model:value="formModel.name"></n-input>
            </n-form-item>

            <n-form-item label="Birthday">
                <n-date-picker format="dd-MM-yyyy" type="date" v-model:value="formModel.birthday"
                    class="w-full"></n-date-picker>
            </n-form-item>

            <n-button attr-type="submit" :loading="loading" :disabled="loading" type="primary" class="float-right">Update
                profile</n-button>
        </n-form>

    </div>
</template>

<script setup lang="ts">
const { useUser, getAccessToken } = useAuthSession()
const { upload } = useS3Object()
const { fetchUser } = useAuth()

const user = useUser()

const formModel = ref({
    name: user.value?.name,
    picture: user.value?.picture,
    birthday: new Date(user.value?.birthday || 1181167200000).getTime()
})

const file = ref<File | null>()

const loading = ref(false)

async function updateAccount() {
    try {
        loading.value = true

        if (file.value) {
            const accessToken = await getAccessToken()

            const { data } = await upload({
                files: [file.value],
                url: formModel.value.picture,
                authorization: `Bearer ${accessToken}`
            })

            if (data.value) {
                formModel.value.picture = data.value[0].url
            }
        }

        await useAuthFetch("/api/user", {
            method: "post",
            body: formModel.value,
        })

        file.value = null

        await fetchUser()
    }
    finally {
        loading.value = false
    }
}
</script>