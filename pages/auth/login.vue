<template>
    <div>
        <n-form ref="formRef" :rules="rules" :model="model" @submit.prevent="() => onSubmit(handleSubmit)">
            <n-form-item label="Email" path="email" :show-require-mark="false">
                <n-input v-model:value="model.email" :input-props="{ autocomplete: 'username' }"></n-input>
            </n-form-item>

            <n-form-item path="password" label="Password" :show-require-mark="false">
                <n-input v-model:value="model.password" type="password" show-password-on="mousedown"
                    :input-props="{ autocomplete: 'current-password' }"></n-input>
            </n-form-item>

            <div class="grid grid-cols-1 gap-4">
                <nuxt-link to="/auth/request-password-reset" class="no-underline">
                    <n-text type="primary">Forgot password?</n-text>
                </nuxt-link>
                <n-button attr-type="submit" block :loading="pending" :disabled="pending" type="primary">Login</n-button>

                <n-button @click="() => loginWithProvider('google')" block>
                    <template #icon>
                        <naive-icon name="logos:google-icon"></naive-icon>
                    </template>
                    Continue with Google
                </n-button>

                <nuxt-link to="/auth/register">
                    <n-button attr-type="button" block>Create Account</n-button>
                </nuxt-link>
            </div>

        </n-form>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    middleware: "guest",
    auth: false,
    colorMode: "light",
    layout: "auth"
})

const { formRef, rules, pending, apiErrors, onSubmit } = useNaiveForm()
const { login, loginWithProvider } = useAuth()

const model = ref({
    email: "",
    password: "",
});

apiErrors.value = {
    wrongCredentials: false,
    invalidProvider: false,
    accountNotVerified: false,
    accountSuspended: false
}

rules.value = {
    email: [
        {
            required: true,
            message: "Please input your email",
            trigger: "blur",
        },
        {
            type: "email",
            message: "Should be a valid email address"
        },
        {
            message: "Wrong credentials",
            validator: () => !apiErrors.value.wrongCredentials
        },
        {
            message: "Your account is not verified",
            validator: () => !apiErrors.value.accountNotVerified
        },
        {
            message: "Your account is suspended",
            validator: () => !apiErrors.value.accountSuspended
        }
    ],
    password: [
        {
            required: true,
            message: "Please input your password",
            trigger: "blur",
        },
    ],
}

async function handleSubmit() {
    const { error } = await login({
        email: model.value.email,
        password: model.value.password
    });

    if (error.value) {
        apiErrors.value.wrongCredentials = error.value.data?.message === "wrong-credentials"
        apiErrors.value.accountNotVerified = error.value.data?.message === "account-not-verified"
        apiErrors.value.accountSuspended = error.value.data?.message === "account-suspended"
    }
}
</script>