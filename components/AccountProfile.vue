<template>
    <div>
        <div class="flex gap-6">
            <n-upload class="overflow-hidden w-min" list-type="image-card" :max="1" accept="image/*"
                :custom-request="(e) => file = e.file.file">
                <S3Image v-if="formModel.picture" :src="formModel.picture" class="object-contain" />
            </n-upload>

            <n-form @submit.prevent="updateAccount" class="flex-1">
                <n-form-item label="Name">
                    <n-input v-model:value="formModel.name"></n-input>
                </n-form-item>
                <n-button attr-type="submit" :loading="loading" :disabled="loading">Update profile</n-button>
            </n-form>
        </div>
    </div>
</template>

<script setup lang="ts">
const { useUser } = useAuthSession()
const { upload } = useS3Object()
const { fetchUser } = useAuth()

const user = useUser()

const formModel = ref({
    name: user.value?.name,
    picture: user.value?.picture,
})

const file = ref<File | null>()

const loading = ref(false)

async function updateAccount() {
    try {
        loading.value = true

        if (file.value) {
            const { data } = await upload([file.value], formModel.value.picture, true)

            if (data.value) {
                formModel.value.picture = data.value[0].url
            }
        }

        await useAuthFetch("/api/user", {
            method: "post",
            body: formModel.value,
        })

        await fetchUser()
    }
    finally {
        loading.value = false
    }
}
</script>