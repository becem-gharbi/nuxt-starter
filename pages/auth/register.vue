<template>
  <div>
    <n-result
      v-if="success"
      status="success"
      title="Email verification is sent"
      description="Please check your inbox"
    />

    <div v-else>
      <n-form
        ref="formRef"
        :model="model"
        :rules="rules"
        @submit.prevent="onSubmit(handleSubmit)"
      >
        <n-form-item
          label="First name"
          path="firstName"
        >
          <n-input v-model:value="model.firstName" />
        </n-form-item>

        <n-form-item
          label="Last name"
          path="lastName"
        >
          <n-input v-model:value="model.lastName" />
        </n-form-item>

        <n-form-item
          label="Email"
          path="email"
        >
          <n-input
            v-model:value="model.email"
            :input-props="{ autocomplete: 'username' }"
          />
        </n-form-item>

        <n-form-item
          label="Password"
          path="password"
        >
          <n-input
            v-model:value="model.password"
            type="password"
            show-password-on="click"
            :input-props="{ autocomplete: 'new-password' }"
          />
        </n-form-item>

        <n-form-item
          label="Confirm Password"
          path="passwordConfirm"
        >
          <n-input
            v-model:value="model.passwordConfirm"
            type="password"
            show-password-on="click"
            :input-props="{ autocomplete: 'new-password' }"
          />
        </n-form-item>

        <n-button
          type="primary"
          attr-type="submit"
          block
          :disabled="pending"
          :loading="pending"
        >
          Register
        </n-button>
      </n-form>
    </div>
  </div>
</template>

<script  setup lang="ts">
definePageMeta({
  middleware: 'guest',
  colorMode: 'light',
  layout: 'auth',
})

const { formRef, pending, rules, onSubmit, apiErrors } = useNaiveForm()
const { register, requestEmailVerify } = useAuth()
const success = ref(false)

apiErrors.value = {
  emailAlreadyExists: false,
}

const model = ref({
  email: '',
  password: '',
  passwordConfirm: '',
  firstName: '',
  lastName: '',
})

rules.value = {
  firstName: [
    {
      required: true,
      message: 'Please input your first name',
      trigger: 'blur',
    },
  ],
  lastName: [
    {
      required: true,
      message: 'Please input your last name',
      trigger: 'blur',
    },
  ],
  email: [
    {
      required: true,
      message: 'Please input your email',
      trigger: 'blur',
    },
    {
      validator: () => !apiErrors.value.emailAlreadyExists,
      message: 'Email already exists',
      trigger: 'input',
    },
    {
      type: 'email',
      message: 'Should be a valid email address',
    },
  ],
  password: [
    {
      required: true,
      message: 'Please input your password',
      trigger: 'blur',
    },
    {
      validator: (_, value) => /(?=.*[a-z])(?=.*[0-9])(?=.{6,})/.test(value),
      message: 'At least 6 characters, 1 lowercase, 1 number',
      trigger: 'blur',
    },
  ],
  passwordConfirm: [
    {
      validator: (_, value) => value === model.value.password,
      message: 'Passwords do not match',
      trigger: 'blur',
    },
  ],
}

async function handleSubmit() {
  await register({
    email: model.value.email,
    password: model.value.password,
    name: model.value.firstName + ' ' + model.value.lastName,
  }).then(async () => {
    await requestEmailVerify(model.value.email)
    success.value = true
  }).catch(async (error) => {
    apiErrors.value.emailAlreadyExists = error.data.message === 'Email already used'
    const accountNotVerified = error.data.message === 'Account not verified'
    if (accountNotVerified) {
      await requestEmailVerify(model.value.email)
      success.value = true
    }
  })
}
</script>
