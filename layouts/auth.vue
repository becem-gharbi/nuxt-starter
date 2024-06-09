<template>
  <div class="page">
    <div class="flex-1 flex">
      <div class="md:w-1/3 w-full flex flex-col justify-between">
        <div class="px-8 mt-10">
          <n-text class="text-lg font-semibold">
            Nuxt starter
          </n-text>
          <br>
          <n-text
            class="text-lg"
            :depth="2"
          >
            {{ title }}
          </n-text>
        </div>

        <div class="px-8 py-4 max-w-sm mx-auto w-full">
          <slot />
        </div>

        <div>
          <footer />
        </div>
      </div>

      <div class="w-2/3 hidden md:block bg-gradient-to-r from-cyan-500 to-blue-500" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const title = computed(() => {
  switch (route.name) {
    case 'auth-login':
      return 'Login to your account'

    case 'auth-register':
      return 'Create your account'

    case 'auth-request-password-reset':
      return 'Request password reset'

    case 'auth-reset-password':
      return 'Reset your password'

    case 'auth-verify-email':
      return 'Email verification'

    case 'auth-callback':
      return 'Social login'
    default:
      return ''
  }
})
</script>
