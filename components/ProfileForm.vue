<template>
    <n-form @submit.prevent="updateAccount">
        <n-form-item label="Name">
            <n-input v-model:value="formModel.name"></n-input>
        </n-form-item>

        <n-form-item label="Picture">
            <n-upload :default-file-list="defaultFileList" list-type="image-card" :max="1" accept="image/*"
                :custom-request="uploadCustomRequest" />
        </n-form-item>

        <n-button attr-type="submit">Update profile</n-button>
    </n-form>
</template>

<script setup lang="ts">
import type { UploadFileInfo, UploadCustomRequestOptions } from "naive-ui"

const { useUser } = useAuthSession()
const { create, update, getKey } = useS3Object()
const { fetchUser } = useAuth()

const user = useUser()

const formModel = ref<{ name: string, picture: string, file: File | null }>({
    name: user.value?.name || "",
    picture: user.value?.picture || "",
    file: null
})

const defaultFileList = computed<UploadFileInfo[]>(() => ([
    {
        url: user.value?.picture,
        name: 'user_picture',
        id: 'user_picture',
        status: 'finished'
    }
]))

function uploadCustomRequest(options: UploadCustomRequestOptions) {
    formModel.value.file = options.file.file
}

async function updateAccount() {
    if (formModel.value.file) {
        const formData = new FormData()
        formData.append("file", formModel.value.file)
        const key = getKey(formModel.value.picture)

        if (key) {
            formData.append("key", key)
            const { data } = await update(formData, true)
            if (data.value) {
                formModel.value.picture = data.value.url
            }

        } else {
            const { data } = await create(formData)
            if (data.value) {
                formModel.value.picture = data.value[0].url
            }
        }
    }

    await useAuthFetch("/api/user", {
        method: "post",
        body: {
            name: formModel.value.name,
            picture: formModel.value.picture
        },
    })

    await fetchUser()

}
</script>