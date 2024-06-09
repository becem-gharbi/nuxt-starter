<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    @submit.prevent="onSubmit(handleChangePassword)"
  >
    <n-form-item
      label="Current password"
      path="currentPassword"
    >
      <n-input
        v-model:value="model.currentPassword"
        type="password"
        show-password-on="click"
        :input-props="{ autocomplete: 'current-password' }"
      />
    </n-form-item>

    <n-form-item
      label="New password"
      path="newPassword"
    >
      <n-input
        v-model:value="model.newPassword"
        type="password"
        show-password-on="click"
        :input-props="{ autocomplete: 'new-password' }"
      />
    </n-form-item>

    <div class="flex gap-4">
      <n-button
        secondary
        attr-type="reset"
        :disabled="pending || !edited"
        @click="reset"
      >
        Reset
      </n-button>
      <n-button
        type="primary"
        attr-type="submit"
        :loading="pending"
        :disabled="pending || !edited"
      >
        Save
      </n-button>
    </div>
  </n-form>
</template>

<script setup lang="ts">
const { changePassword } = useAuth()

const model = ref({
  currentPassword: '',
  newPassword: '',
})

const { formRef, onSubmit, pending, rules, apiErrors, edited, reset }
  = useNaiveForm(model)

apiErrors.value = {
  wrongPassword: false,
}

rules.value = {
  currentPassword: [
    {
      required: true,
      message: 'Please enter your password',
      trigger: 'input',
    },
    {
      validator: () => !apiErrors.value.wrongPassword,
      message: 'Wrong password',
      trigger: 'input',
    },
  ],
  newPassword: [
    {
      required: true,
      message: 'Please enter your new password',
      trigger: 'input',
    },
  ],
}

async function handleChangePassword() {
  await changePassword(model.value).catch((error) => {
    apiErrors.value.wrongPassword = error.data.message === 'Wrong password'
  })
}
</script>
