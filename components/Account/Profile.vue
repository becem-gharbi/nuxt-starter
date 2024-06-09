<template>
  <div>
    <n-upload
      class="overflow-hidden w-min mx-auto my-4"
      list-type="image-card"
      :max="1"
      accept="image/*"
      :custom-request="(e) => (model.file = e.file.file)"
    >
      <img
        v-if="model.picture"
        :src="model.picture"
        class="object-cover"
        alt="avatar"
      >
    </n-upload>

    <n-form
      ref="formRef"
      class="flex-1"
      @submit.prevent="onSubmit(updateAccount)"
    >
      <n-form-item label="Name">
        <n-input v-model:value="model.name" />
      </n-form-item>

      <div class="flex gap-2">
        <n-button
          attr-type="reset"
          :disabled="pending || !edited"
          @click="reset"
        >
          Reset
        </n-button>

        <n-button
          attr-type="submit"
          :loading="pending"
          :disabled="pending || !edited"
          type="primary"
        >
          Update
          profile
        </n-button>
      </div>
    </n-form>
  </div>
</template>

<script setup lang="ts">
const { user } = useAuthSession()
const { upload } = useS3Object()
const { fetchUser } = useAuth()

const model = ref({
  name: user.value?.name,
  picture: user.value?.picture,
  file: null as File | null,
})

const { edited, pending, onSubmit, reset, formRef } = useNaiveForm(model)

async function updateAccount() {
  if (model.value.file) {
    const url = await upload(model.value.file, {
      url: model.value.picture,
      prefix: `${user.value!.id}/`,
      meta: {
        'user-id': user.value!.id,
      },
    })

    model.value.picture = url
  }

  await useNuxtApp().$auth.fetch('/api/user', {
    method: 'patch',
    body: {
      name: model.value.name,
      picture: model.value.picture,
    },
  })

  model.value.file = null

  await fetchUser()
}
</script>
