<template>
  <div>
    <n-form
      ref="formRef"
      :rules="rules"
      :model="model"
      @submit.prevent="onSubmit(handleSubmit)"
    >
      <n-form-item
        label="Email"
        path="email"
        :show-require-mark="false"
      >
        <n-input
          v-model:value="model.email"
          :input-props="{ autocomplete: 'username' }"
        />
      </n-form-item>

      <n-form-item
        path="password"
        :show-require-mark="false"
        :label-style="{ display: 'block' }"
      >
        <n-input
          v-model:value="model.password"
          type="password"
          show-password-on="click"
          :input-props="{ autocomplete: 'current-password' }"
        />
        <template #label>
          <span>Password</span>
          <nuxt-link
            to="/auth/request-password-reset"
            class="no-underline float-end"
          >
            <n-text type="primary">
              Forgot password?
            </n-text>
          </nuxt-link>
        </template>
      </n-form-item>

      <div class="flex flex-col gap-4">
        <n-button
          attr-type="submit"
          block
          :loading="pending"
          :disabled="pending"
          type="primary"
        >
          Login
        </n-button>

        <n-button
          block
          @click="loginWithProvider('google')"
        >
          <template #icon>
            <naive-icon name="devicon:google" />
          </template>
          Continue with Google
        </n-button>

        <n-divider>or</n-divider>

        <nuxt-link to="/auth/register">
          <n-button
            attr-type="button"
            block
          >
            Create Account
          </n-button>
        </nuxt-link>
      </div>
    </n-form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
  layout: 'auth',
})

const { formRef, rules, pending, apiErrors, onSubmit } = useNaiveForm()
const { login, loginWithProvider } = useAuth()

const model = ref({
  email: '',
  password: '',
})

apiErrors.value = {
  wrongCredentials: false,
  invalidProvider: false,
  accountNotVerified: false,
  accountSuspended: false,
}

rules.value = {
  email: [
    {
      required: true,
      message: 'Please input your email',
      trigger: 'blur',
    },
    {
      type: 'email',
      message: 'Should be a valid email address',
    },
    {
      message: 'Wrong credentials',
      validator: () => !apiErrors.value.wrongCredentials,
    },
    {
      message: 'Your account is not verified',
      validator: () => !apiErrors.value.accountNotVerified,
    },
    {
      message: 'Your account is suspended',
      validator: () => !apiErrors.value.accountSuspended,
    },
  ],
  password: [
    {
      required: true,
      message: 'Please input your password',
      trigger: 'blur',
    },
  ],
}

async function handleSubmit() {
  await login({
    email: model.value.email,
    password: model.value.password,
  }).catch((error) => {
    apiErrors.value.wrongCredentials = error.data.message === 'Wrong credentials'
    apiErrors.value.accountNotVerified = error.data.message === 'Account not verified'
    apiErrors.value.accountSuspended = error.data.message === 'Account suspended'
  })
}
</script>
