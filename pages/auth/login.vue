<template>
    <div class="flex flex-col gap-4">
        <n-card>
            <n-form ref="formRef" :rules="rules" :model="model" @submit.prevent="() => onSubmit(handleSubmit)">
                <n-form-item label="Email" path="email" :show-require-mark="false">
                    <n-input v-model:value="model.email"></n-input>
                </n-form-item>

                <n-form-item path="password" label="Password" :show-require-mark="false">
                    <n-input v-model:value="model.password" type="password" show-password-on="mousedown"></n-input>
                </n-form-item>

                <div class="grid grid-cols-1 gap-4">
                    <NuxtLink to="/auth/request-password-reset" class="no-underline">
                        <n-text type="primary">Forgot password?</n-text>
                    </NuxtLink>
                    <n-button attr-type="submit" block :loading="pending" :disabled="pending"
                        type="primary">Login</n-button>
                    <n-button @click="() => loginWithProvider('google')" block>
                        <template #icon>
                            <NaiveIcon name="logos:google-icon"></NaiveIcon>
                        </template>
                        Continue with Google
                    </n-button>
                </div>
            </n-form>
        </n-card>

        <n-card class="text-center" size="small">
            Do not have account?
            <NuxtLink to="/auth/register" class="no-underline">
                <n-text type="primary"> Create one</n-text>
            </NuxtLink>
        </n-card>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    middleware: "guest",
    auth: false,
    colorMode: "light"
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